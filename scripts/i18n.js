(() => {
    const translations = {
        en: {
            pageTitle: "Moon Explorer — Interactive Space Exploration Museum",
            brandAlt: "Moon Explorer",
            homeNav: "Home",
            exploreNav: "Explore",
            aboutNav: "About",
            languageLabel: "Language",
            exploreMoon: "EXPLORE THE MOON",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            heroChapter: "AN INTERACTIVE LUNAR ARCHIVE",
            heroTitle: "THE MOON REMEMBERS.",
            heroSubtitle: "Every mission leaves something behind. Discover the forgotten machines that helped humanity reach for the stars.",
            startExploring: "START EXPLORING",
            discoverStories: "DISCOVER THEIR STORIES",
            archiveChapter: "THE LUNAR ARCHIVE · 01",
            aboutHeadingStart: "NOT EVERY EXPLORER",
            aboutHeadingEnd: "CAME HOME.",
            aboutText: "Long after astronauts returned to Earth, their machines remained. Landers, scientific instruments, and forgotten equipment still rest on distant worlds.",
            aboutStory: "Each one has a story worth telling.",
            yearsExploration: "Years of Exploration",
            forgottenArtifacts: "Forgotten Artifacts",
            discoveryStory: "Incredible Story of Discovery",
            objectsChapter: "OBJECTS IN THE SILENCE · 02",
            fallenHeadingStart: "FALLEN",
            fallenHeadingEnd: "MACHINES",
            machinesIntro: "Four machines. One legacy. They may be forgotten on distant worlds, but...",
            machinesOutro: "their stories will never be lost.",
            apollo11ImageAlt: "Apollo 11 lunar lander",
            apollo11Subtitle: "Lunar Module / EASEP",
            apollo11Location: "1969 · SEA OF TRANQUILITY",
            apollo11Description: "The first footprints faded, but the machines stayed. A small scientific station kept watch after the astronauts began their journey home.",
            discoverStory: "Discover Story",
            apollo15ImageAlt: "Apollo 15 lunar rover",
            apollo15Subtitle: "Lunar Module / ALSEP",
            apollo15Location: "1971 · HADLEY-APENNINE",
            apollo15Description: "At the foot of lunar mountains, another explorer was left behind. Its instruments peered below the dust and listened for the Moon's hidden rhythms.",
            apollo12ImageAlt: "Apollo 12 lunar equipment",
            apollo12Subtitle: "Lunar Module / ALSEP",
            apollo12Location: "1969 · OCEAN OF STORMS",
            apollo12Description: "Humanity returned with a new mission: land with precision, explore farther, and uncover more secrets beneath the gray lunar soil.",
            surveyorImageAlt: "Surveyor lunar lander",
            surveyorSubtitle: "Robotic Lunar Lander",
            surveyorLocation: "1967 · OCEAN OF STORMS",
            surveyorDescription: "Before astronauts walked nearby, a three-legged robotic explorer had already touched the dust and tested the ground for those who would follow.",
            missionAwaits: "YOUR MISSION AWAITS",
            nextDiscoveryStart: "THE NEXT DISCOVERY",
            nextDiscoveryEnd: "IS YOURS.",
            bannerText: "Travel across the Moon and join the journey of the machines that made history.",
            moonExplorerLabel: "MOON EXPLORER",
            loadingMoon: "LOADING MOON MODEL...",
            moonModelError: "UNABLE TO LOAD MOON MODEL.",
            moonModelAlt: "3D model of the Moon",
            selectLocation: "Select a location on the Moon",
            missionArtifact: "MISSION ARTIFACT",
            artifactModelAlt: "3D model of the selected equipment",
            loadingModel: "LOADING MODEL...",
            equipmentName: "Equipment name",
            missionName: "Mission name",
            missionDashboard: "MISSION DASHBOARD",
            detailsHeading: "01 / DETAILS",
            missionLabel: "Mission",
            massLabel: "Equipment mass",
            statusLabel: "Current status",
            launchSiteLabel: "Launch Site",
            launchVehicleLabel: "Launch Vehicle",
            localLabel: "Location",
            storyHeading: "02 / THE STORY",
            aboutEquipment: "About the equipment",
            objectiveLabel: "Objective",
            importanceLabel: "Why is it important?",
            contextLabel: "Mission context",
            timelineHeading: "03 / MISSION TIMELINE",
            funfactHeading: "04 / DID YOU KNOW?",
            previousEquipment: "Previous equipment",
            nextEquipment: "Next equipment",
            unknownEquipment: "Unknown equipment",
            unknownMission: "Unknown mission",
            unknown: "Unknown",
            modelLoadError: "ERROR LOADING MODEL"
        },
        es: {
            pageTitle: "Explorador Lunar — Museo interactivo de exploración espacial",
            brandAlt: "Explorador Lunar",
            homeNav: "Inicio",
            exploreNav: "Explorar",
            aboutNav: "Acerca de",
            languageLabel: "Idioma",
            exploreMoon: "EXPLORAR LA LUNA",
            openMenu: "Abrir menú",
            closeMenu: "Cerrar menú",
            heroChapter: "UN ARCHIVO LUNAR INTERACTIVO",
            heroTitle: "LA LUNA RECUERDA.",
            heroSubtitle: "Cada misión deja algo atrás. Descubre las máquinas olvidadas que ayudaron a la humanidad a alcanzar las estrellas.",
            startExploring: "EMPEZAR A EXPLORAR",
            discoverStories: "DESCUBRE SUS HISTORIAS",
            archiveChapter: "EL ARCHIVO LUNAR · 01",
            aboutHeadingStart: "NO TODOS LOS EXPLORADORES",
            aboutHeadingEnd: "VOLVIERON A CASA.",
            aboutText: "Mucho después de que los astronautas regresaran a la Tierra, sus máquinas permanecieron allí. Módulos de aterrizaje, instrumentos científicos y equipos olvidados aún descansan en mundos lejanos.",
            aboutStory: "Cada uno tiene una historia que merece ser contada.",
            yearsExploration: "Años de exploración",
            forgottenArtifacts: "Artefactos olvidados",
            discoveryStory: "Una increíble historia de descubrimiento",
            objectsChapter: "OBJETOS EN EL SILENCIO · 02",
            fallenHeadingStart: "MÁQUINAS",
            fallenHeadingEnd: "ABANDONADAS",
            machinesIntro: "Cuatro máquinas. Un legado. Puede que estén olvidadas en mundos lejanos, pero...",
            machinesOutro: "sus historias nunca se perderán.",
            apollo11ImageAlt: "Módulo lunar del Apollo 11",
            apollo11Subtitle: "Módulo lunar / EASEP",
            apollo11Location: "1969 · MAR DE LA TRANQUILIDAD",
            apollo11Description: "Las primeras huellas se borraron, pero las máquinas se quedaron. Una pequeña estación científica siguió observando cuando los astronautas emprendieron el viaje de regreso.",
            discoverStory: "Descubrir la historia",
            apollo15ImageAlt: "Vehículo lunar del Apollo 15",
            apollo15Subtitle: "Módulo lunar / ALSEP",
            apollo15Location: "1971 · HADLEY-APENNINE",
            apollo15Description: "Al pie de las montañas lunares quedó otro explorador. Sus instrumentos miraron bajo el polvo y escucharon los ritmos ocultos de la Luna.",
            apollo12ImageAlt: "Equipo lunar del Apollo 12",
            apollo12Subtitle: "Módulo lunar / ALSEP",
            apollo12Location: "1969 · OCÉANO DE LAS TORMENTAS",
            apollo12Description: "La humanidad regresó con una nueva misión: aterrizar con precisión, explorar más lejos y descubrir secretos bajo el suelo lunar gris.",
            surveyorImageAlt: "Módulo de aterrizaje lunar Surveyor",
            surveyorSubtitle: "Módulo robótico de aterrizaje lunar",
            surveyorLocation: "1967 · OCÉANO DE LAS TORMENTAS",
            surveyorDescription: "Antes de que los astronautas caminaran cerca, un explorador robótico de tres patas ya había tocado el polvo y probado el terreno para quienes vendrían después.",
            missionAwaits: "TU MISIÓN TE ESPERA",
            nextDiscoveryStart: "EL PRÓXIMO DESCUBRIMIENTO",
            nextDiscoveryEnd: "ES TUYO.",
            bannerText: "Recorre la Luna y acompaña el viaje de las máquinas que hicieron historia.",
            moonExplorerLabel: "EXPLORADOR LUNAR",
            loadingMoon: "CARGANDO EL MODELO LUNAR...",
            moonModelError: "NO SE PUDO CARGAR EL MODELO LUNAR.",
            moonModelAlt: "Modelo 3D de la Luna",
            selectLocation: "Selecciona un lugar en la Luna",
            missionArtifact: "ARTEFACTO DE LA MISIÓN",
            artifactModelAlt: "Modelo 3D del equipo seleccionado",
            loadingModel: "CARGANDO MODELO...",
            equipmentName: "Nombre del equipo",
            missionName: "Nombre de la misión",
            missionDashboard: "PANEL DE LA MISIÓN",
            detailsHeading: "01 / DETALLES",
            missionLabel: "Misión",
            massLabel: "Masa del equipo",
            statusLabel: "Estado actual",
            launchSiteLabel: "Lugar de lanzamiento",
            launchVehicleLabel: "Vehículo de lanzamiento",
            localLabel: "Ubicación",
            storyHeading: "02 / LA HISTORIA",
            aboutEquipment: "Sobre el equipo",
            objectiveLabel: "Objetivo",
            importanceLabel: "¿Por qué es importante?",
            contextLabel: "Contexto de la misión",
            timelineHeading: "03 / CRONOLOGÍA DE LA MISIÓN",
            funfactHeading: "04 / ¿SABÍAS QUE...?",
            previousEquipment: "Equipo anterior",
            nextEquipment: "Equipo siguiente",
            unknownEquipment: "Equipo desconocido",
            unknownMission: "Misión desconocida",
            unknown: "Desconocido",
            modelLoadError: "ERROR AL CARGAR EL MODELO"
        },
        pt: {
            pageTitle: "Explorador Lunar — Museu Interativo de Exploração Espacial",
            brandAlt: "Explorador Lunar",
            homeNav: "Início",
            exploreNav: "Explorar",
            aboutNav: "Sobre",
            languageLabel: "Idioma",
            exploreMoon: "EXPLORAR A LUA",
            openMenu: "Abrir menu",
            closeMenu: "Fechar menu",
            heroChapter: "UM ARQUIVO LUNAR INTERATIVO",
            heroTitle: "A LUA SE LEMBRA.",
            heroSubtitle: "Cada missão deixa algo para trás. Descubra as máquinas esquecidas que ajudaram a humanidade a alcançar as estrelas.",
            startExploring: "COMECE A EXPLORAR",
            discoverStories: "DESCUBRA SUAS HISTÓRIAS",
            archiveChapter: "O ARQUIVO LUNAR · 01",
            aboutHeadingStart: "NEM TODO EXPLORADOR",
            aboutHeadingEnd: "VOLTOU PARA CASA.",
            aboutText: "Muito depois de os astronautas retornarem à Terra, suas máquinas permaneceram. Módulos de pouso, instrumentos científicos e equipamentos esquecidos ainda repousam em mundos distantes.",
            aboutStory: "Cada um tem uma história que merece ser contada.",
            yearsExploration: "Anos de exploração",
            forgottenArtifacts: "Artefatos esquecidos",
            discoveryStory: "Uma incrível história de descoberta",
            objectsChapter: "OBJETOS NO SILÊNCIO · 02",
            fallenHeadingStart: "MÁQUINAS",
            fallenHeadingEnd: "ABANDONADAS",
            machinesIntro: "Quatro máquinas. Um legado. Elas podem estar esquecidas em mundos distantes, mas...",
            machinesOutro: "suas histórias nunca serão perdidas.",
            apollo11ImageAlt: "Módulo lunar da Apollo 11",
            apollo11Subtitle: "Módulo Lunar / EASEP",
            apollo11Location: "1969 · MAR DA TRANQUILIDADE",
            apollo11Description: "As primeiras pegadas desapareceram, mas as máquinas ficaram. Uma pequena estação científica continuou observando depois que os astronautas iniciaram a viagem de volta.",
            discoverStory: "Descubra a história",
            apollo15ImageAlt: "Veículo lunar da Apollo 15",
            apollo15Subtitle: "Módulo Lunar / ALSEP",
            apollo15Location: "1971 · HADLEY-APENNINE",
            apollo15Description: "Ao pé das montanhas lunares, outro explorador foi deixado para trás. Seus instrumentos investigaram o que havia sob a poeira e ouviram os ritmos ocultos da Lua.",
            apollo12ImageAlt: "Equipamento lunar da Apollo 12",
            apollo12Subtitle: "Módulo Lunar / ALSEP",
            apollo12Location: "1969 · OCEANO DAS TORMENTAS",
            apollo12Description: "A humanidade voltou com uma nova missão: pousar com precisão, explorar mais longe e descobrir segredos sob o solo lunar acinzentado.",
            surveyorImageAlt: "Módulo lunar Surveyor",
            surveyorSubtitle: "Módulo robótico de pouso lunar",
            surveyorLocation: "1967 · OCEANO DAS TORMENTAS",
            surveyorDescription: "Antes de os astronautas caminharem por perto, um explorador robótico de três pernas já havia tocado a poeira e testado o terreno para quem viria depois.",
            missionAwaits: "SUA MISSÃO AGUARDA",
            nextDiscoveryStart: "A PRÓXIMA DESCOBERTA",
            nextDiscoveryEnd: "É SUA.",
            bannerText: "Percorra a Lua e acompanhe a jornada das máquinas que fizeram história.",
            moonExplorerLabel: "EXPLORADOR LUNAR",
            loadingMoon: "CARREGANDO O MODELO DA LUA...",
            moonModelError: "NÃO FOI POSSÍVEL CARREGAR O MODELO DA LUA.",
            moonModelAlt: "Modelo 3D da Lua",
            selectLocation: "Selecione um local na Lua",
            missionArtifact: "ARTEFATO DA MISSÃO",
            artifactModelAlt: "Modelo 3D do equipamento selecionado",
            loadingModel: "CARREGANDO MODELO...",
            equipmentName: "Nome do equipamento",
            missionName: "Nome da missão",
            missionDashboard: "PAINEL DA MISSÃO",
            detailsHeading: "01 / DETALHES",
            missionLabel: "Missão",
            massLabel: "Massa do equipamento",
            statusLabel: "Status atual",
            launchSiteLabel: "Local de lançamento",
            launchVehicleLabel: "Veículo lançador",
            localLabel: "Localização",
            storyHeading: "02 / A HISTÓRIA",
            aboutEquipment: "Sobre o equipamento",
            objectiveLabel: "Objetivo",
            importanceLabel: "Por que é importante?",
            contextLabel: "Contexto da missão",
            timelineHeading: "03 / LINHA DO TEMPO DA MISSÃO",
            funfactHeading: "04 / VOCÊ SABIA?",
            previousEquipment: "Equipamento anterior",
            nextEquipment: "Próximo equipamento",
            unknownEquipment: "Equipamento desconhecido",
            unknownMission: "Missão desconhecida",
            unknown: "Desconhecido",
            modelLoadError: "ERRO AO CARREGAR O MODELO"
        }
    };

    const supportedLanguages = Object.keys(translations);
    const savedLanguage = window.localStorage.getItem("moon-explorer-language");
    const browserLanguage = (navigator.language || "en").slice(0, 2).toLowerCase();
    let currentLanguage = supportedLanguages.includes(savedLanguage)
        ? savedLanguage
        : supportedLanguages.includes(browserLanguage)
            ? browserLanguage
            : "en";
    const languageSelect = document.getElementById("language-select");

    function translate(key) {
        return translations[currentLanguage][key] ?? translations.en[key] ?? key;
    }

    function localizeRecord(record) {
        return {
            ...record,
            ...(record.translations?.[currentLanguage] || {})
        };
    }

    function applyTranslations() {
        document.documentElement.lang = currentLanguage;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            element.textContent = translate(element.dataset.i18n);
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
            element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            element.setAttribute("alt", translate(element.dataset.i18nAlt));
        });

        if (languageSelect) {
            languageSelect.value = currentLanguage;
        }

        window.dispatchEvent(new CustomEvent("moon-language-change", {
            detail: { language: currentLanguage }
        }));
    }

    function setLanguage(language) {
        if (!supportedLanguages.includes(language)) {
            return;
        }

        currentLanguage = language;
        window.localStorage.setItem("moon-explorer-language", language);
        applyTranslations();
    }

    if (languageSelect) {
        languageSelect.addEventListener("change", () => {
            setLanguage(languageSelect.value);
        });
    }

    window.MoonExplorerI18n = {
        getLanguage: () => currentLanguage,
        localizeRecord,
        translate
    };

    applyTranslations();
})();
