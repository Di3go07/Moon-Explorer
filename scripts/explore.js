// =========================================
// ELEMENTOS HTML
// =========================================

const explorer = document.getElementById("explorer");

const moonRegions = document.querySelectorAll(".moon-region");

const moonInstruction = document.getElementById("moon-instruction");

const objectPanel = document.getElementById("object-panel");
const detailsPanel = document.getElementById("details-panel");

const artifactModel = document.getElementById("artifact-model");
const objectLoading = document.getElementById("object-loading");

const objectName = document.getElementById("object-name");
const objectMission = document.getElementById("object-mission");
const detailsMission = document.getElementById("details-mission");
const detailsMass = document.getElementById("details-mass");
const detailsStatus = document.getElementById("details-status");

const storyInfo = document.getElementById("story-info");
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

    objectName.textContent = item.nome || "Unknown equipment";

    objectMission.textContent = item.missao || "Unknown mission";

    detailsMission.textContent = item.missao || "Unknown mission";
    detailsMass.textContent = item.mass ? `${item.mass} kg` : "Unknown";
    detailsStatus.textContent = item.status || "Unknown";


    // =====================================
    // HISTÓRIA
    // =====================================

    storyInfo.textContent = item.story?.info || "";

    storyImportance.textContent = item.story?.importance || "";

    storyContext.textContent = item.story?.context || "";


    // =====================================
    // TIMELINE
    // =====================================

    missionTimeline.replaceChildren();

    if (Array.isArray(item.timeline)) {

        item.timeline.forEach(event => {

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


    // =====================================
    // CURIOSIDADE
    // =====================================

    objectFunfact.textContent = item.funfact || "";


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

    objectLoading.textContent = "ERROR LOADING MODEL";

});


// =========================================
// INICIALIZAÇÃO
// =========================================

loadEquipments();