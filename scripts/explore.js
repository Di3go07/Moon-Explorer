// =========================================
// ELEMENTOS HTML
// =========================================

const explorer = document.getElementById("explorer");

const moonRegions = document.querySelectorAll(".moon-region");

const moonInstruction = document.getElementById("moon-instruction");
const moonPanel = document.querySelector(".moon-panel");
const moonModel = document.getElementById("moon-model");
const moonLoadingText = document.querySelector(".moon-loading-text");

const objectPanel = document.getElementById("object-panel");
const detailsPanel = document.getElementById("details-panel");

const artifactModel = document.getElementById("artifact-model");
const objectLoading = document.getElementById("object-loading");

const objectName = document.getElementById("object-name");
const objectMission = document.getElementById("object-mission");
const detailsMission = document.getElementById("details-mission");
const detailsMass = document.getElementById("details-mass");
const detailsStatus = document.getElementById("details-status");
const statusSummaryItem = document.getElementById("status-summary-item");
const detailsLaunchSite = document.getElementById("details-launch-site");
const detailsLaunchVehicle = document.getElementById("details-launch-vehicle");
const detailsLocal = document.getElementById("details-local");

const storyInfo = document.getElementById("story-info");
const storyObjective = document.getElementById("story-objetivo");
const storyImportance = document.getElementById("story-importance");
const storyContext = document.getElementById("story-context");

const missionTimeline = document.getElementById("mission-timeline");
const objectFunfact = document.getElementById("object-funfact");

const previousButton = document.getElementById("previous-artifact");
const nextButton = document.getElementById("next-artifact");
const artifactCounter = document.getElementById("artifact-counter");


// =========================================
// VARIÁVEIS
// =========================================

let equipmentList = [];
let currentIndex = -1;

function getStatusClass(status) {
    const normalizedStatus = status
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    if (normalizedStatus.includes("abandon")) {
        return "status-abandoned";
    }

    if (
        normalizedStatus.includes("desativ") ||
        normalizedStatus.includes("desactiv") ||
        normalizedStatus.includes("deactivat")
    ) {
        return "status-deactivated";
    }

    if (
        normalizedStatus.includes("encerr") ||
        normalizedStatus.includes("ended") ||
        normalizedStatus.includes("finaliz")
    ) {
        return "status-ended";
    }

    if (
        normalizedStatus.includes("ultimo contato") ||
        normalizedStatus.includes("last contact") ||
        normalizedStatus.includes("inactiv")
    ) {
        return "status-inactive";
    }

    if (
        normalizedStatus.includes("operacional") ||
        normalizedStatus.includes("ativo") ||
        normalizedStatus.includes("activo") ||
        normalizedStatus.includes("operational") ||
        normalizedStatus.includes("active")
    ) {
        return "status-operational";
    }

    return "status-unknown";
}

function renderLocalizedEquipment(item) {
    const localizedItem = window.MoonExplorerI18n.localizeRecord(item);
    const translate = window.MoonExplorerI18n.translate;

    moonRegions.forEach(region => {
        const equipment = equipmentList[Number(region.dataset.object)];
        if (equipment) {
            const localizedEquipment = window.MoonExplorerI18n.localizeRecord(equipment);
            region.setAttribute("aria-label", localizedEquipment.nome);
        }
    });

    objectName.textContent = localizedItem.nome || translate("unknownEquipment");
    artifactModel.setAttribute("alt", localizedItem.nome || translate("artifactModelAlt"));
    objectMission.textContent = localizedItem.missao || translate("unknownMission");

    detailsMission.textContent = localizedItem.missao || translate("unknownMission");
    detailsMass.textContent = item.mass ? `${item.mass} kg` : translate("unknown");

    const status = localizedItem.status || translate("unknown");
    detailsStatus.textContent = status;
    statusSummaryItem.className = getStatusClass(status);

    detailsLaunchSite.textContent = localizedItem.launchSite || translate("unknown");
    detailsLaunchVehicle.textContent = localizedItem.launchVehicle || translate("unknown");
    detailsLocal.textContent = localizedItem.local || translate("unknown");

    storyInfo.textContent = localizedItem.story?.info || "";
    storyObjective.textContent = localizedItem.story?.objetivo || "";
    storyImportance.textContent = localizedItem.story?.importance || "";
    storyContext.textContent = localizedItem.story?.context || "";

    missionTimeline.replaceChildren();

    if (Array.isArray(localizedItem.timeline)) {
        localizedItem.timeline.forEach(event => {
            const timelineItem = document.createElement("div");
            timelineItem.classList.add("timeline-item");

            const date = document.createElement("h3");
            date.textContent = event.data || "";

            const fact = document.createElement("p");
            fact.textContent = event.fact || "";

            timelineItem.append(date, fact);
            missionTimeline.appendChild(timelineItem);
        });
    }

    objectFunfact.textContent = localizedItem.funfact || "";
}

window.addEventListener("moon-language-change", () => {
    if (currentIndex >= 0) {
        renderLocalizedEquipment(equipmentList[currentIndex]);
    }
});

function showMoonControls() {
    moonPanel.classList.add("model-loaded");
    moonPanel.classList.remove("model-error");
}

function showMoonModelError() {
    moonPanel.classList.add("model-error");
    moonLoadingText.dataset.i18n = "moonModelError";
    moonLoadingText.textContent = window.MoonExplorerI18n.translate("moonModelError");
}

moonModel.addEventListener("load", showMoonControls, { once: true });
moonModel.addEventListener("error", showMoonModelError, { once: true });

if (moonModel.loaded) {
    showMoonControls();
}


// =========================================
// CARREGAR JSON
// =========================================

async function loadEquipments() {

    try {

        const response = await fetch("./data/equipaments.json");

        if (!response.ok) {
            throw new Error("Could not load equipment database.");
        }

        const database = await response.json();

        equipmentList = database.equipaments;

        if (!Array.isArray(equipmentList) || equipmentList.length === 0) {
            throw new Error("No equipment found in database.");
        }

        // Esconde regiões que não possuem equipamento correspondente
        moonRegions.forEach((region, index) => {
            region.hidden = index >= equipmentList.length;
        });

        // NÃO seleciona nenhum equipamento automaticamente.
        // A Lua permanece centralizada até o primeiro clique.

    } catch (error) {

        console.error("Error loading equipment:", error);

    }

}


// =========================================
// SELECIONAR EQUIPAMENTO
// =========================================

function selectEquipment(index) {

    if (index < 0 || index >= equipmentList.length) {
        return;
    }

    const item = equipmentList[index];

    currentIndex = index;


    // Muda o layout inicial
    explorer.classList.remove("initial-state");
    explorer.classList.add("selected-state");


    // Mostra os painéis
    objectPanel.classList.remove("hidden");
    detailsPanel.classList.remove("hidden");


    // Esconde a instrução inicial
    moonInstruction.style.display = "none";


    // Atualiza região ativa
    moonRegions.forEach((region, regionIndex) => {

        region.classList.toggle("active", regionIndex === index);

    });


    // =====================================
    // INFORMAÇÕES DO EQUIPAMENTO
    // =====================================

    artifactModel.src = item.link || "";

    objectLoading.style.display = item.link ? "block" : "none";

    renderLocalizedEquipment(item);


    // =====================================
    // CONTADOR
    // =====================================

    artifactCounter.textContent =
        `${currentIndex + 1} / ${equipmentList.length}`;

}


// =========================================
// CLIQUE NAS REGIÕES DA LUA
// =========================================

moonRegions.forEach(region => {

    region.addEventListener("click", () => {

        const index = Number(region.dataset.object);

        selectEquipment(index);

    });

});


// =========================================
// NAVEGAÇÃO ENTRE EQUIPAMENTOS
// =========================================

previousButton.addEventListener("click", () => {

    if (equipmentList.length === 0) return;

    const previousIndex =
        (currentIndex - 1 + equipmentList.length) % equipmentList.length;

    selectEquipment(previousIndex);

});


nextButton.addEventListener("click", () => {

    if (equipmentList.length === 0) return;

    const nextIndex =
        (currentIndex + 1) % equipmentList.length;

    selectEquipment(nextIndex);

});


// =========================================
// CARREGAMENTO DO MODELO 3D
// =========================================

artifactModel.addEventListener("load", () => {

    objectLoading.style.display = "none";

});

artifactModel.addEventListener("error", () => {

    objectLoading.dataset.i18n = "modelLoadError";
    objectLoading.textContent = window.MoonExplorerI18n.translate("modelLoadError");

});


// =========================================
// INICIALIZAÇÃO
// =========================================

loadEquipments();