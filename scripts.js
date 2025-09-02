// =============================================
// CONSTANTES E CONFIGURAÇÕES (mantidas conforme solicitado)
// =============================================
const HORAS_NECESSARIAS = 225;
const CURSO_DE_GRADUACAO = 'Engenharia de Produção Bacharelado UEMA, Campus São Luis';
const ADMIN_USER = {
    username: 'admin',
    password: 'admin',
    matricula: '00000000001'
};

// Grupos e tipos de atividades
const gruposAtividades = [
    'GRUPO I - Atividades de iniciação à pesquisa ou ensino ou atividades de extensão em áreas correlatas a Engenharia de Produção',
    'GRUPO II - Produção Técnica e/ou Científica em áreas correlatas',
    'GRUPO III - Atividades de participação e/ou organização de eventos em áreas correlatas',
    'GRUPO IV - Vivências de gestão',
    'GRUPO V - Experiências ligadas à formação profissional e/ou correlatas',
    'GRUPO VI - Outras atividades'
];

const maxHorasGruposAtividades = {
    'GRUPO I - Atividades de iniciação à pesquisa ou ensino ou atividades de extensão em áreas correlatas a Engenharia de Produção': Infinity,
    'GRUPO II - Produção Técnica e/ou Científica em áreas correlatas': Infinity,
    'GRUPO III - Atividades de participação e/ou organização de eventos em áreas correlatas': Infinity,
    'GRUPO IV - Vivências de gestão': Infinity,
    'GRUPO V - Experiências ligadas à formação profissional e/ou correlatas': Infinity,
    'GRUPO VI - Outras atividades': Infinity,
};

const AtividadesPorGrupo = {
    'GRUPO I - Atividades de iniciação à pesquisa ou ensino ou atividades de extensão em áreas correlatas a Engenharia de Produção': [
        'Bolsista em projeto de pesquisa',
        'Voluntário em projeto de pesquisa',
        'Bolsista em projeto de extensão',
        'Voluntário em projeto de extensão',
        'Bolsista em monitoria',
        'Monitoria voluntária',
        'Disciplinas cursadas com aprovação',
        'Participação em projetos especiais e atléticas desportivas',
    ],

    'GRUPO II - Produção Técnica e/ou Científica em áreas correlatas': [
        'Publicação de artigo em revista Qualis A1, A2, B1, B2 e B3',
        'Publicação de artigo em revista Qualis B4, B5 e C',
        'Publicação de artigo completo em congresso internacional (autor principal)',
        'Publicação de artigo completo em congresso internacional (co-autoria)',
        'Publicação de artigo completo em congresso nacional',
        'Depósito de pedido de Patente',
    ],

    'GRUPO III - Atividades de participação e/ou organização de eventos em áreas correlatas': [
        'Participação em congressos internacionais',
        'Participação em congressos nacionais/Regionais',
        'Apresentação de artigo em congresso internacional',
        'Apresentação de artigo em congresso nacional',
        'Apresentação de trabalhos em seminários, encontros, jornadas, colóquios, workshops locais',
        'Participação como ouvinte em palestras, congressos, seminários, conferências, encontros, workshops',
        'Participação em audiências de defesas de monografias, dissertações e teses',
        'Organização de eventos: seminários, congressos, encontros, jornadas e colóquios',
    ],

    'GRUPO IV - Vivências de gestão': [
        'Participação na composição de empresa júnior do Curso',
        'Participação na diretoria do centro Acadêmico do Curso',
        'Participação na condição de representante estudantil no colegiado de curso, assembleia departamental ou conselho de centro',
    ],

    'GRUPO V - Experiências ligadas à formação profissional e/ou correlatas': [
        'Treinamento como participante',
        'Treinamento como ministrante',
        'Participação em CREA Jr e ABEPRO-JUNIOR',
        'Consultoria',
        'Estágio Não-Curricular',
    ],

    'GRUPO VI - Outras atividades': [
        'Participação em gincanas ou torneios de conhecimento',
        'Participação em atividades de voluntariado, campanhas beneficentes e beneméritas',
        'Visitas técnicas realizadas em atividades referentes ao Curso',
        'Participação em atividades desportivas representando o Curso de Engenharia de Produção ou a UEMA',
        'Participação em Cursos (áreas da ABEPRO)',
        'Participação de cursos via plataforma Eskada',
        'Facilitador de Cursos (ministrante)',
        'Curso de língua Estrangeira',
        'Intercâmbio',
        'Participação em startups ou incubadoras',
        'Registro de Software',
    ]
};

const opcoesAtividades = [
    'Bolsista em projeto de pesquisa',
    'Voluntário em projeto de pesquisa',
    'Bolsista em projeto de extensão',
    'Voluntário em projeto de extensão',
    'Bolsista em monitoria',
    'Monitoria voluntária',
    'Disciplinas cursadas com aprovação',
    'Participação em projetos especiais e atléticas desportivas',
    'Publicação de artigo em revista Qualis A1, A2, B1, B2 e B3',
    'Publicação de artigo em revista Qualis B4, B5 e C',
    'Publicação de artigo completo em congresso internacional (autor principal)',
    'Publicação de artigo completo em congresso internacional (co-autoria)',
    'Publicação de artigo completo em congresso nacional',
    'Depósito de pedido de Patente',
    'Participação em congressos internacionais',
    'Participação em congressos nacionais/Regionais',
    'Apresentação de artigo em congresso internacional',
    'Apresentação de artigo em congresso nacional',
    'Apresentação de trabalhos em seminários, encontros, jornadas, colóquios, workshops locais',
    'Participação como ouvinte em palestras, congressos, seminários, conferências, encontros, workshops',
    'Participação em audiências de defesas de monografias, dissertações e teses',
    'Organização de eventos: seminários, congressos, encontros, jornadas e colóquios',
    'Participação na composição de empresa júnior do Curso',
    'Participação na diretoria do centro Acadêmico do Curso',
    'Participação na condição de representante estudantil no colegiado de curso, assembleia departamental ou conselho de centro',
    'Treinamento como participante',
    'Treinamento como ministrante',
    'Participação em CREA Jr e ABEPRO-JUNIOR',
    'Consultoria',
    'Estágio Não-Curricular',
    'Participação em gincanas ou torneios de conhecimento',
    'Participação em atividades de voluntariado, campanhas beneficentes e beneméritas',
    'Visitas técnicas realizadas em atividades referentes ao Curso',
    'Participação em atividades desportivas representando o Curso de Engenharia de Produção ou a UEMA',
    'Participação em Cursos (áreas da ABEPRO)',
    'Participação de cursos via plataforma Eskada',
    'Facilitador de Cursos (ministrante)',
    'Curso de língua Estrangeira',
    'Intercâmbio',
    'Participação em startups ou incubadoras',
    'Registro de Software',
];

const configAtividades = {
    'Bolsista em projeto de pesquisa': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo',
    },
    'Voluntário em projeto de pesquisa': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo',
    },
    'Bolsista em projeto de extensão': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo',
    },
    'Voluntário em projeto de extensão': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo',
    },
    'Bolsista em monitoria': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo',
    },
    'Monitoria voluntária': {
        maxHorasValidadas: 20,
        maxHoras: 80,
        restricao: 'periodo',
    },
    'Disciplinas cursadas com aprovação': {
        maxHorasValidadas: 90,
        maxHoras: 90,
        restricao: 'registro',
    },
    'Participação em projetos especiais e atléticas desportivas': {
        maxHorasValidadas: 30,
        maxHoras: 90,
        restricao: 'periodo',
    },
    'Publicação de artigo em revista Qualis A1, A2, B1, B2 e B3': {
        maxHorasValidadas: 90,
        maxHoras: 180,
        restricao: 'registro',
    },
    'Publicação de artigo em revista Qualis B4, B5 e C': {
        maxHorasValidadas: 60,
        maxHoras: 120,
        restricao: 'registro',
    },
    'Publicação de artigo completo em congresso internacional (autor principal)': {
        maxHorasValidadas: 30,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Publicação de artigo completo em congresso internacional (co-autoria)': {
        maxHorasValidadas: 15,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Publicação de artigo completo em congresso nacional': {
        maxHorasValidadas: 20,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Depósito de pedido de Patente': {
        maxHorasValidadas: 120,
        maxHoras: 120,
        restricao: 'registro',
    },
    'Participação em congressos internacionais': {
        maxHorasValidadas: 20,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Participação em congressos nacionais/Regionais': {
        maxHorasValidadas: 10,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Apresentação de artigo em congresso internacional': {
        maxHorasValidadas: 30,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Apresentação de artigo em congresso nacional': {
        maxHorasValidadas: 20,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Apresentação de trabalhos em seminários, encontros, jornadas, colóquios, workshops locais': {
        maxHorasValidadas: 15,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Participação como ouvinte em palestras, congressos, seminários, conferências, encontros, workshops': {
        maxHorasValidadas: 7.5,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Participação em audiências de defesas de monografias, dissertações e teses': {
        maxHorasValidadas: 5,
        maxHoras: 15,
        restricao: 'registro',
    },
    'Organização de eventos: seminários, congressos, encontros, jornadas e colóquios': {
        maxHorasValidadas: 20,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Participação na composição de empresa júnior do Curso': {
        maxHorasValidadas: 30,
        maxHoras: 120,
        restricao: 'periodo',
    },
    'Participação na diretoria do centro Acadêmico do Curso': {
        maxHorasValidadas: 30,
        maxHoras: 120,
        restricao: 'periodo',
    },
    'Participação na condição de representante estudantil no colegiado de curso, assembleia departamental ou conselho de centro': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro',
    },
    'Treinamento como participante': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro',
    },
    'Treinamento como ministrante': {
        maxHorasValidadas: 10,
        maxHoras: 30,
        restricao: 'registro',
    },
    'Participação em CREA Jr e ABEPRO-JUNIOR': {
        maxHorasValidadas: 30,
        maxHoras: 60,
        restricao: 'periodo',
    },
    'Consultoria': {
        maxHorasValidadas: 15,
        maxHoras: 30,
        restricao: 'registro',
    },
    'Estágio Não-Curricular': {
        maxHorasValidadas: 30,
        maxHoras: 60,
        restricao: 'periodo',
    },
    'Participação em gincanas ou torneios de conhecimento': {
        maxHorasValidadas: 5,
        maxHoras: 15,
        restricao: 'registro',
    },
    'Participação em atividades de voluntariado, campanhas beneficentes e beneméritas': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro',
    },
    'Visitas técnicas realizadas em atividades referentes ao Curso': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro',
    },
    'Participação em atividades desportivas representando o Curso de Engenharia de Produção ou a UEMA': {
        maxHorasValidadas: 5,
        maxHoras: 30,
        restricao: 'registro',
    },
    'Participação em Cursos (áreas da ABEPRO)': {
        maxHorasValidadas: 10,
        maxHoras: 40,
        restricao: 'registro',
    },
    'Participação de cursos via plataforma Eskada': {
        maxHorasValidadas: 10,
        maxHoras: 50,
        restricao: 'registro',
    },
    'Facilitador de Cursos (ministrante)': {
        maxHorasValidadas: 15,
        maxHoras: 60,
        restricao: 'registro',
    },
    'Curso de língua Estrangeira': {
        maxHorasValidadas: 15,
        maxHoras: 30,
        restricao: 'periodo',
    },
    'Intercâmbio': {
        maxHorasValidadas: 15,
        maxHoras: 30,
        restricao: 'registro',
    },
    'Participação em startups ou incubadoras': {
        maxHorasValidadas: 20,
        maxHoras: 40,
        restricao: 'registro',
    },
    'Registro de Software': {
        maxHorasValidadas: 60,
        maxHoras: 120,
        restricao: 'registro',
    }
};

// =============================================
// ESTADO DA APLICAÇÃO
// =============================================
let db = null;
let dbInitialized = false;
let currentUser = null;
let currentUserType = null;
let currentUserData = null;
let horasChart = null;
let selectedStudent = null;

// =============================================
// INICIALIZAÇÃO PRINCIPAL
// =============================================

/**
 * Inicializa a aplicação quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

/**
 * Função principal de inicialização
 */
async function initializeApp() {
    try {
        // Inicializar elementos da interface
        initializeUIElements();

        // Inicializar banco de dados
        await initDatabase();

        // Configurar event listeners
        initEventListeners();

        console.log("Aplicação inicializada com sucesso");
    } catch (error) {
        console.error("Erro na inicialização:", error);
        showError(error.message || "Erro ao inicializar o aplicativo. Recarregue a página.");
    }
}

/**
 * Inicializa referências aos elementos da interface
 */
function initializeUIElements() {
    loginScreen = document.getElementById('loginScreen');
    mainScreen = document.getElementById('mainScreen');

    // Inicialmente, esconder todas as abas e conteúdos
    document.querySelectorAll('.tab').forEach(tab => {
        tab.style.display = 'none';
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });
}

// =============================================
// GERENCIAMENTO DO BANCO DE DADOS
// =============================================

/**
 * Inicializa o banco de dados IndexedDB
 * @returns {Promise} Promise que resolve quando o banco é inicializado
 */
function initDatabase() {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            reject(new Error("Seu navegador não suporta IndexedDB. Use um navegador mais moderno."));
            return;
        }

        const request = indexedDB.open("SGIACC_DB", 17);

        request.onerror = (event) => {
            console.error("Erro ao abrir o banco de dados:", event.target.error);
            reject(new Error("Não foi possível abrir o banco de dados."));
        };

        request.onupgradeneeded = (event) => {
            db = event.target.result;
            setupDatabaseSchema(db, event);
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            dbInitialized = true;
            console.log("Banco de dados inicializado com sucesso");
            createDefaultAdmin().then(resolve).catch(resolve);
        };

        request.onblocked = () => {
            reject(new Error("O banco de dados está bloqueado. Feche outras abas."));
        };
    });
}

/**
 * Configura o schema do banco de dados
 * @param {IDBDatabase} db Instância do banco de dados
 * @param {Event} event Evento de upgrade
 */
function setupDatabaseSchema(db, event) {
    const objectStores = [
        "administradores",
        "coordenadores",
        "estudantes",
        "atividades",
        "turmas"
    ];

    objectStores.forEach(storeName => {
        if (!db.objectStoreNames.contains(storeName)) {
            createObjectStore(db, storeName);
        }
    });

    // Garantir índices necessários
    ensureIndexes(db, event);
}

/**
 * Cria uma object store no banco de dados
 * @param {IDBDatabase} db Instância do banco
 * @param {string} storeName Nome da store a ser criada
 */
function createObjectStore(db, storeName) {
    switch (storeName) {
        case "administradores":
        case "coordenadores":
        case "estudantes":
            const store = db.createObjectStore(storeName, { keyPath: "usuario" });
            if (storeName === "estudantes") {
                store.createIndex("matricula", "matricula", { unique: true });
            }
            break;
        case "atividades":
            const atividadesStore = db.createObjectStore("atividades", {
                keyPath: "id",
                autoIncrement: true
            });
            atividadesStore.createIndex("usuario", "usuario", { unique: false });
            atividadesStore.createIndex("tipo", "tipo", { unique: false });
            atividadesStore.createIndex("periodo", "periodo", { unique: false });
            atividadesStore.createIndex("status", "status", { unique: false });
            break;
        case "turmas":
            db.createObjectStore("turmas", { keyPath: "id", autoIncrement: true });
            break;
    }
}

/**
 * Garante que todos os índices necessários existam
 * @param {IDBDatabase} db Instância do banco
 * @param {Event} event Evento de upgrade
 */
function ensureIndexes(db, event) {
    if (db.objectStoreNames.contains("estudantes")) {
        const transaction = event.currentTarget.transaction;
        const estudantesStore = transaction.objectStore("estudantes");

        if (!estudantesStore.indexNames.contains("coordenador")) {
            estudantesStore.createIndex("coordenador", "coordenador", { unique: false });
        }

        if (!estudantesStore.indexNames.contains("matricula")) {
            estudantesStore.createIndex("matricula", "matricula", { unique: true });
        }
    }
}

/**
 * Cria o administrador padrão no banco de dados
 * @returns {Promise} Promise que resolve quando o admin é criado
 */
function createDefaultAdmin() {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject(new Error("Banco de dados não inicializado"));
            return;
        }

        const transaction = db.transaction(["administradores"], "readwrite");
        const store = transaction.objectStore("administradores");
        const request = store.get(ADMIN_USER.username);

        request.onsuccess = function () {
            if (!request.result) {
                const adminData = {
                    nome: "Administrador do Sistema",
                    matricula: ADMIN_USER.matricula,
                    usuario: ADMIN_USER.username,
                    senha: ADMIN_USER.password,
                    tipo: "admin"
                };

                const addRequest = store.add(adminData);
                addRequest.onsuccess = resolve;
                addRequest.onerror = () => {
                    console.error("Erro ao criar admin padrão");
                    resolve(); // Não é crítico, então apenas resolvemos
                };
            } else {
                resolve();
            }
        };

        request.onerror = () => {
            console.error("Erro ao verificar admin padrão");
            resolve(); // Não é crítico, então apenas resolvemos
        };
    });
}

// =============================================
// SISTEMA DE AUTENTICAÇÃO
// =============================================

/**
 * Manipula o envio do formulário de login
 * @param {Event} e Evento de submit
 */
async function handleLoginSubmit(e) {
    e.preventDefault();

    try {
        if (!dbInitialized) {
            await initDatabase();
        }

        const username = getElementSafe("username").value.trim();
        const password = getElementSafe("password").value.trim();

        if (!username || !password) {
            showError('Por favor, preencha todos os campos.');
            return;
        }

        hideMessages();
        setLoginButtonState(true);

        // Verificar se é o admin principal
        if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
            await handleAdminLogin();
            return;
        }

        // Para outros usuários, verificar no IndexedDB
        const user = await findUserInDatabase(username, password);

        if (user) {
            await handleSuccessfulLogin(user);
        } else {
            showError("Usuário ou senha inválidos!");
        }
    } catch (error) {
        showError("Erro ao acessar o banco de dados: " + error.message);
        console.error("Erro de autenticação:", error);
    } finally {
        setLoginButtonState(false);
    }
}

/**
 * Processa login do administrador
 */
async function handleAdminLogin() {
    currentUser = ADMIN_USER.username;
    currentUserType = "admin";
    currentUserData = {
        nome: "Administrador do Sistema",
        matricula: ADMIN_USER.matricula,
        usuario: ADMIN_USER.username
    };

    await new Promise(resolve => setTimeout(resolve, 500)); // Pequeno delay
    iniciarApp();
}

/**
 * Processa login bem-sucedido de usuário
 * @param {Object} user Dados do usuário
 */
async function handleSuccessfulLogin(user) {
    currentUser = user.usuario;
    currentUserType = user.tipo;
    currentUserData = user;
    iniciarApp();
}

/**
 * Busca usuário no banco de dados
 * @param {string} username Nome de usuário
 * @param {string} password Senha
 * @returns {Promise} Promise com os dados do usuário ou null se não encontrado
 */
function findUserInDatabase(username, password) {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject(new Error("Banco de dados não inicializado"));
            return;
        }

        // Primeiro verifica se é administrador
        checkAdminUser(username, password, resolve, reject);
    });
}

/**
 * Verifica se o usuário é um administrador
 * @param {string} username Nome de usuário
 * @param {string} password Senha
 * @param {Function} resolve Função de resolve da Promise
 * @param {Function} reject Função de reject da Promise
 */
function checkAdminUser(username, password, resolve, reject) {
    const adminTransaction = db.transaction(["administradores"], "readonly");
    const adminStore = adminTransaction.objectStore("administradores");
    const adminRequest = adminStore.get(username);

    adminRequest.onsuccess = function () {
        const administrador = adminRequest.result;

        if (administrador && administrador.senha === password) {
            resolve({ ...administrador, tipo: "admin" });
            return;
        }

        // Se não é administrador, verifica se é coordenador
        checkCoordinatorUser(username, password, resolve, reject);
    };

    adminRequest.onerror = () => reject(adminRequest.error);
}

/**
 * Verifica se o usuário é um coordenador
 * @param {string} username Nome de usuário
 * @param {string} password Senha
 * @param {Function} resolve Função de resolve da Promise
 * @param {Function} reject Função de reject da Promise
 */
function checkCoordinatorUser(username, password, resolve, reject) {
    const coordinatorTransaction = db.transaction(["coordenadores"], "readonly");
    const coordinatorStore = coordinatorTransaction.objectStore("coordenadores");
    const coordinatorRequest = coordinatorStore.get(username);

    coordinatorRequest.onsuccess = function () {
        const coordenador = coordinatorRequest.result;

        if (coordenador && coordenador.senha === password) {
            resolve({ ...coordenador, tipo: "coordinator" });
            return;
        }

        // Se não é coordenador, verifica se é estudante
        checkStudentUser(username, password, resolve, reject);
    };

    coordinatorRequest.onerror = () => reject(coordinatorRequest.error);
}

/**
 * Verifica se o usuário é um estudante
 * @param {string} username Nome de usuário
 * @param {string} password Senha
 * @param {Function} resolve Função de resolve da Promise
 * @param {Function} reject Função de reject da Promise
 */
function checkStudentUser(username, password, resolve, reject) {
    const studentTransaction = db.transaction(["estudantes"], "readonly");
    const studentStore = studentTransaction.objectStore("estudantes");
    const studentRequest = studentStore.get(username);

    studentRequest.onsuccess = function () {
        const estudante = studentRequest.result;
        resolve(estudante && estudante.senha === password ? { ...estudante, tipo: "student" } : null);
    };

    studentRequest.onerror = () => reject(studentRequest.error);
}

/**
 * Altera o estado do botão de login
 * @param {boolean} isLoading Se está carregando
 */
function setLoginButtonState(isLoading) {
    const submitBtn = getElementSafe("submitBtn");
    if (!submitBtn) return;

    if (isLoading) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
        submitBtn.disabled = true;
    } else {
        submitBtn.innerHTML = 'Entrar';
        submitBtn.disabled = false;
    }
}

/**
 * Realiza logout do usuário
 */
function logout() {
    if (confirm("Tem certeza que deseja sair do sistema?")) {
        // Limpar estado da aplicação
        resetAppState();

        // Ocultar tela principal e mostrar login
        showLoginScreen();

        // Recarregar a página após um delay
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }
}

/**
 * Reseta o estado da aplicação
 */
function resetAppState() {
    // Remover todos os event listeners das abas
    document.querySelectorAll('.tab').forEach(tab => {
        const newTab = tab.cloneNode(true);
        tab.parentNode.replaceChild(newTab, tab);
    });

    // Limpar variáveis de estado
    currentUser = null;
    currentUserType = null;
    currentUserData = null;
    selectedStudent = null;

    // Fechar conexão com o banco
    if (db) {
        db.close();
        db = null;
    }
    dbInitialized = false;

    // Remover classes de tipo de usuário
    document.body.classList.remove('user-admin', 'user-coordinator', 'user-student');
}

/**
 * Mostra a tela de login e esconde a principal
 */
function showLoginScreen() {
    if (mainScreen) {
        mainScreen.style.display = 'none';
    }

    if (loginScreen) {
        loginScreen.style.display = 'block';
    }

    // Limpar formulário de login
    const loginForm = getElementSafe("loginForm");
    if (loginForm) {
        loginForm.reset();
    }
}

// =============================================
// GERENCIAMENTO DE INTERFACE
// =============================================

/**
 * Inicia a aplicação após login bem-sucedido
 */
function iniciarApp() {
    // Ocultar tela de login
    if (loginScreen) {
        loginScreen.style.display = 'none';
    }

    // Mostrar tela principal
    if (mainScreen) {
        mainScreen.style.display = 'block';
    }

    // Configurar interface conforme o tipo de usuário
    document.body.classList.add(`user-${currentUserType}`);

    // Configurar abas conforme o tipo de usuário
    configurarAbasPorTipoUsuario();
    ativarPrimeiraAba();

    // Inicializar listeners de aba sempre
    initTabListeners();

    // Atualizar informações do usuário
    if (currentUserType === "admin") {
        const adminUserName = getElementSafe("adminUserName");
        if (adminUserName) adminUserName.textContent = currentUserData.nome;
        carregarCoordenadores();
    } else if (currentUserType === "coordinator") {
        const coordinatorUserName = getElementSafe("coordinatorUserName");
        if (coordinatorUserName) coordinatorUserName.textContent = currentUserData.nome;
        carregarEstudantes();
    } else if (currentUserType === "student") {
        const studentUserName = getElementSafe("studentUserName");
        if (studentUserName) studentUserName.textContent = currentUserData.nome;

        // Inicializar componentes do estudante
        popularSelects();
        atualizarTabela();
        atualizarResumo();
    }
}

/**
 * Configura as abas visíveis conforme o tipo de usuário
 */
function configurarAbasPorTipoUsuario() {
    // Esconder todas as abas primeiro
    document.querySelectorAll('.tab').forEach(tab => {
        tab.style.display = 'none';
    });

    // Mostrar apenas as abas do tipo de usuário atual
    document.querySelectorAll(`.tab.${currentUserType}-tab`).forEach(tab => {
        tab.style.display = 'flex';
    });

    // Esconder todos os conteúdos de abas
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });
}

/**
 * Ativa a primeira aba disponível para o usuário
 */
function ativarPrimeiraAba() {
    const primeiraAba = document.querySelector(`.tab.${currentUserType}-tab`);
    if (primeiraAba) {
        // Remover classe active de todas as abas
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

        // Adicionar classe active à primeira aba
        primeiraAba.classList.add('active');

        // Mostrar o conteúdo correspondente à primeira aba
        const tabId = primeiraAba.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
            tabContent.style.display = 'block';
            tabContent.classList.add('active');
        }
    }
}

/**
 * Carrega dados específicos baseado no tipo de usuário
 */
function loadUserSpecificData() {
    // Atualizar informações do usuário na interface
    updateUserInfo();

    // Carregar dados específicos
    if (currentUserType === "admin") {
        carregarCoordenadores();
    } else if (currentUserType === "coordinator") {
        carregarEstudantes();
    } else if (currentUserType === "student") {
        popularSelects();
        atualizarTabela();
        atualizarResumo();
    }
}

/**
 * Atualiza as informações do usuário na interface
 */
function updateUserInfo() {
    if (currentUserType === "admin") {
        const adminUserName = getElementSafe("adminUserName");
        if (adminUserName) adminUserName.textContent = currentUserData.nome;
    } else if (currentUserType === "coordinator") {
        const coordinatorUserName = getElementSafe("coordinatorUserName");
        if (coordinatorUserName) coordinatorUserName.textContent = currentUserData.nome;
    } else if (currentUserType === "student") {
        const studentUserName = getElementSafe("studentUserName");
        if (studentUserName) studentUserName.textContent = currentUserData.nome;
    }
}

// =============================================
// FUNÇÕES AUXILIARES
// =============================================

/**
 * Obtém elemento de forma segura (com verificação de null)
 * @param {string} id ID do elemento
 * @returns {HTMLElement|null} Elemento ou null se não encontrado
 */
function getElementSafe(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Elemento com ID ${id} não encontrado`);
        return null;
    }
    return element;
}

/**
 * Mostra uma mensagem de erro
 * @param {string} message Mensagem de erro
 */
function showError(message) {
    const errorMessage = getElementSafe("errorMessage");
    if (errorMessage) {
        const span = errorMessage.querySelector("span");
        if (span) {
            span.textContent = message;
        }
        showElement(errorMessage);
    }

    hideElement(getElementSafe("successMessage"));
}

/**
 * Mostra uma mensagem de sucesso
 * @param {string} message Mensagem de sucesso
 */
function showSuccess(message) {
    const successMessage = getElementSafe("successMessage");
    if (successMessage) {
        const span = successMessage.querySelector("span");
        if (span) {
            span.textContent = message;
        }
        showElement(successMessage);
    }

    hideElement(getElementSafe("errorMessage"));
}

/**
 * Oculta todas as mensagens
 */
function hideMessages() {
    hideElement(getElementSafe("errorMessage"));
    hideElement(getElementSafe("successMessage"));
}

/**
 * Mostra um elemento
 * @param {HTMLElement} element Elemento a ser mostrado
 */
function showElement(element) {
    if (element) {
        element.style.display = "flex";
    }
}

/**
 * Oculta um elemento
 * @param {HTMLElement} element Elemento a ser ocultado
 */
function hideElement(element) {
    if (element) {
        element.style.display = "none";
    }
}

/**
 * Mostra uma mensagem do sistema (temp)
 * @param {string} message Mensagem a ser exibida
 * @param {string} type Tipo de mensagem (success, error, warning, info)
 */
function showSystemMessage(message, type) {
    document.querySelectorAll('.system-message.temp').forEach(msg => msg.remove());

    const messageContainer = document.createElement("div");
    messageContainer.className = `system-message ${type} temp`;

    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'error') iconClass = 'fa-exclamation-circle';
    if (type === 'warning') iconClass = 'fa-exclamation-triangle';

    messageContainer.innerHTML = `
        <i class="fas ${iconClass}"></i>
        <span>${message}</span>
    `;

    // Encontrar local apropriado para inserir a mensagem
    const activeTab = document.querySelector(".tab-content.active");
    if (activeTab) {
        activeTab.insertBefore(messageContainer, activeTab.firstChild);
    } else {
        const formContainer = document.querySelector(".form-container");
        if (formContainer) {
            formContainer.parentNode.insertBefore(messageContainer, formContainer);
        }
    }

    // Remover a mensagem após 5 segundos
    setTimeout(() => {
        if (messageContainer.parentNode) {
            messageContainer.parentNode.removeChild(messageContainer);
        }
    }, 5000);
}

/**
 * Alterna a visibilidade da senha no campo de login
 */
function togglePasswordVisibility() {
    const passwordInput = getElementSafe("password");
    const toggleIcon = getElementSafe("togglePassword");

    if (!passwordInput || !toggleIcon) return;

    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    toggleIcon.classList.toggle("fa-eye");
    toggleIcon.classList.toggle("fa-eye-slash");
}

/**
 * Valida o formato de uma matrícula
 * @param {string} matricula Matrícula a ser validada
 * @returns {boolean} True se a matrícula é válida
 */
function validarMatricula(matricula) {
    // Deve ter exatamente 11 dígitos
    if (!/^\d{11}$/.test(matricula)) {
        return false;
    }

    // Verifica o ano atual
    const anoAtual = new Date().getFullYear();

    // Os 4 primeiros dígitos devem ser um ano entre 2000 e ano atual
    const ano = parseInt(matricula.substring(0, 4), 10);
    return ano >= 2000 && ano <= anoAtual;
}

/**
 * Valida o formato de um período (AAAA.S)
 * @param {string} periodo Período a ser validado
 * @param {string} matricula Matrícula para verificar ano de ingresso
 * @returns {boolean} True se o período é válido
 */
function validarPeriodo(periodo, matricula) {
    if (typeof periodo !== 'string') return false;

    if (!matricula || matricula.length < 4) return false;

    // Verifica formato AAAA.1 ou AAAA.2
    const regex = /^\d{4}\.[12]$/;
    if (!regex.test(periodo)) return false;

    // Extrai ano do período
    const ano = parseInt(periodo.split('.')[0], 10);

    // Extrai ano de ingresso do estudante a partir da matrícula (4 primeiros dígitos)
    const anoIngresso = parseInt(matricula.substring(0, 4), 10);

    // O período só é válido se estiver entre o ano de ingresso e o ano atual
    return ano >= anoIngresso && ano <= new Date().getFullYear();
}

// =============================================
// FUNÇÕES DE BANCO DE DADOS AUXILIARES
// =============================================

/**
 * Obtém todos os registros de uma store
 * @param {string} storeName Nome da store
 * @returns {Promise} Promise com os resultados
 */
function getAllFromStore(storeName) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(`Erro ao carregar dados de ${storeName}`);
    });
}

/**
 * Obtém todas as atividades de um usuário
 * @param {string} usuario Usuário para filtrar atividades
 * @returns {Promise} Promise com as atividades
 */
function getAtividadesPorUsuario(usuario) {
    return new Promise((resolve, reject) => {
        const atividades = [];
        const transaction = db.transaction("atividades", "readonly");
        const store = transaction.objectStore("atividades");
        const index = store.index("usuario");
        const request = index.openCursor(IDBKeyRange.only(usuario));

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                atividades.push(cursor.value);
                cursor.continue();
            } else {
                resolve(atividades);
            }
        };

        request.onerror = () => reject("Erro ao carregar atividades");
    });
}

// =============================================
// EVENT LISTENERS
// =============================================

/**
 * Inicializa os event listeners da aplicação
 */
function initEventListeners() {
    // Event listener para o link "Sobre"
    document.getElementById("aboutLink").addEventListener("click", mostrarSobre);

    // Event listeners para formulário de login
    const loginForm = getElementSafe("loginForm");
    const togglePassword = getElementSafe("togglePassword");

    if (loginForm) {
        loginForm.addEventListener("submit", handleLoginSubmit);
    }

    if (togglePassword) {
        togglePassword.addEventListener("click", togglePasswordVisibility);
    }

    // Event listeners para abas
    initTabListeners();

    // Event listeners para logout
    initLogoutListeners();

    // Event listeners para formulários
    initFormListeners();
}

/**
 * Inicializa os listeners para as abas
 */
function initTabListeners() {
    // Remove todos os event listeners existentes clonando os elementos
    document.querySelectorAll('.tab').forEach(tab => {
        const newTab = tab.cloneNode(true);
        tab.parentNode.replaceChild(newTab, tab);
    });

    // Adiciona os listeners corretamente
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function () {
            if (this.classList.contains(`${currentUserType}-tab`)) {
                // Gestão de abas
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                    content.classList.remove('active');
                });

                const tabId = this.getAttribute('data-tab');
                const tabContent = document.getElementById(tabId);
                if (tabContent) {
                    tabContent.style.display = 'block';
                    tabContent.classList.add('active');

                    // Carregamentos específicos
                    if (tabId === "visualizar-turma") {
                        carregarTurma();
                    } else if (tabId === "resumo") {
                        atualizarGraficoResumo();
                    } else if (tabId === "exibir") {
                        atualizarTabela();
                    } else if (tabId === "atividades-estudante" && selectedStudent) {
                        carregarAtividadesEstudante(selectedStudent);
                    }
                }
            }
        });
    });
}
/**
 * Manipula o clique em uma aba
 * @param {HTMLElement} tabElement Elemento da aba clicada
 */
function handleTabClick(tabElement) {
    // Remover classe active de todas as abas do mesmo tipo
    document.querySelectorAll(`.tab.${currentUserType}-tab`).forEach(t => t.classList.remove('active'));

    // Adicionar classe active à aba clicada
    tabElement.classList.add('active');

    // Ocultar todos os conteúdos de abas
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Mostrar o conteúdo correspondente à aba clicada
    const tabId = tabElement.getAttribute('data-tab');
    const tabContent = document.getElementById(tabId);

    if (tabContent) {
        tabContent.classList.add('active');
        handleTabContentDisplay(tabId);
    }
}

/**
 * Manipula a exibição do conteúdo de uma aba específica
 * @param {string} tabId ID da aba
 */
function handleTabContentDisplay(tabId) {
    switch (tabId) {
        case "visualizar-turma":
            carregarTurma();
            break;
        case "resumo":
            atualizarGraficoResumo();
            break;
        case "exibir":
            atualizarTabela();
            break;
        case "atividades-estudante":
            if (selectedStudent) {
                carregarAtividadesEstudante(selectedStudent);
            }
            break;
    }
}

/**
 * Inicializa os listeners para os botões de logout
 */
function initLogoutListeners() {
    const adminLogoutBtn = getElementSafe("adminLogoutBtn");
    const coordinatorLogoutBtn = getElementSafe("coordinatorLogoutBtn");
    const studentLogoutBtn = getElementSafe("studentLogoutBtn");

    if (adminLogoutBtn) adminLogoutBtn.addEventListener("click", logout);
    if (coordinatorLogoutBtn) coordinatorLogoutBtn.addEventListener("click", logout);
    if (studentLogoutBtn) studentLogoutBtn.addEventListener("click", logout);
}

/**
 * Inicializa os listeners para os formulários
 */
function initFormListeners() {
    // Formulários do admin
    const formCadastroCoordenador = getElementSafe("formCadastroCoordenador");
    if (formCadastroCoordenador) {
        formCadastroCoordenador.addEventListener("submit", handleCadastroCoordenador);
    }

    // Formulários do coordenador
    const formCadastroEstudante = getElementSafe("formCadastroEstudante");
    const importarEstudanteBtn = getElementSafe("importarEstudanteBtn");

    if (formCadastroEstudante) {
        formCadastroEstudante.addEventListener("submit", handleCadastroEstudante);
    }

    if (importarEstudanteBtn) {
        importarEstudanteBtn.addEventListener("click", importarEstudanteZIP);
    }

    // Formulários do estudante
    const formCadastro = getElementSafe("formCadastro");
    const formFiltro = getElementSafe("formFiltro");
    const formEdicao = getElementSafe("formEdicao");
    const limparCadastroBtn = getElementSafe("limparCadastroBtn");
    const limparFiltrosBtn = getElementSafe("limparFiltrosBtn");
    const imprimirBtn = getElementSafe("imprimirBtn");
    const studentExportBtn = getElementSafe("studentExportBtn");
    const studentImportBtn = getElementSafe("studentImportBtn");
    const formEdicaoCoordenador = document.getElementById("formEdicaoCoordenador");
    const formEdicaoEstudante = document.getElementById("formEdicaoEstudante");

    if (formCadastro) formCadastro.addEventListener("submit", handleCadastroSubmit);
    if (formFiltro) formFiltro.addEventListener("submit", handleFiltroSubmit);
    if (formEdicao) formEdicao.addEventListener("submit", handleEdicaoSubmit);
    if (limparCadastroBtn) limparCadastroBtn.addEventListener("click", limparCadastro);
    if (limparFiltrosBtn) limparFiltrosBtn.addEventListener("click", limparFiltros);
    if (imprimirBtn) imprimirBtn.addEventListener("click", handleImprimir);
    if (studentExportBtn) studentExportBtn.addEventListener("click", exportarDados);
    if (studentImportBtn) studentImportBtn.addEventListener("click", importarDados);

    if (formEdicaoCoordenador) {
        formEdicaoCoordenador.addEventListener("submit", salvarEdicaoCoordenador);
    }

    if (formEdicaoEstudante) {
        formEdicaoEstudante.addEventListener("submit", salvarEdicaoEstudante);
    }
}

// =============================================
// FUNÇÕES DE ADMINISTRADOR
// =============================================

/**
 * Manipula o cadastro de um novo coordenador
 * @param {Event} e Evento de submit
 */
function handleCadastroCoordenador(e) {
    e.preventDefault();

    const coordNome = getElementSafe("coordNome");
    const coordMatricula = getElementSafe("coordMatricula");
    const coordUsuario = getElementSafe("coordUsuario");
    const coordSenha = getElementSafe("coordSenha");

    if (!coordNome || !coordMatricula || !coordUsuario || !coordSenha) {
        showSystemMessage("Elementos do formulário não encontrados", "error");
        return;
    }

    const nome = coordNome.value.trim();
    const matricula = coordMatricula.value.trim();
    const usuario = coordUsuario.value.trim();
    const senha = coordSenha.value.trim();

    if (!nome || !matricula || !usuario || !senha) {
        showSystemMessage("Preencha todos os campos", "error");
        return;
    }

    const coordenador = {
        nome,
        matricula,
        usuario,
        senha,
        tipo: "coordinator"
    };

    const transaction = db.transaction("coordenadores", "readwrite");
    const store = transaction.objectStore("coordenadores");
    const request = store.add(coordenador);

    request.onsuccess = function () {
        showSystemMessage("Coordenador cadastrado com sucesso!", "success");
        const form = getElementSafe("formCadastroCoordenador");
        if (form) form.reset();
        carregarCoordenadores();
    };

    request.onerror = function () {
        showSystemMessage("Erro ao cadastrar coordenador. O usuário pode já existir.", "error");
    };
}

/**
 * Carrega a lista de coordenadores
 */
async function carregarCoordenadores() {
    const container = getElementSafe("coordenadoresList");
    if (!container) return;

    try {
        const coordenadores = await getAllFromStore("coordenadores");
        container.innerHTML = "";

        if (coordenadores.length === 0) {
            container.innerHTML = '<div class="system-message info">Nenhum coordenador cadastrado.</div>';
            return;
        }

        coordenadores.forEach(coordenador => {
            if (coordenador.usuario === ADMIN_USER.username) return;

            const card = document.createElement("div");
            card.className = "user-card";
            card.innerHTML = `
                <div class="user-info-card">
                    <h4>${coordenador.nome}</h4>
                    <p>Matrícula: ${coordenador.matricula} | Usuário: ${coordenador.usuario}</p>
                </div>
                <div class="user-actions">
                    <button class="btn-icon btn-edit" onclick="editarCoordenador('${coordenador.usuario}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon btn-delete" onclick="excluirCoordenador('${coordenador.usuario}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar coordenadores:", error);
        showSystemMessage("Erro ao carregar coordenadores", "error");
    }
}

/**
 * Exclui um coordenador e todos os dados relacionados
 * @param {string} usuario Usuário do coordenador a ser excluído
 */
function excluirCoordenador(usuario) {
    if (confirm("Tem certeza que deseja excluir este coordenador? Todos os estudantes, atividades e comprovantes relacionados serão excluídos permanentemente.")) {
        const transaction = db.transaction(["coordenadores", "estudantes", "atividades"], "readwrite");
        const coordenadoresStore = transaction.objectStore("coordenadores");
        const estudantesStore = transaction.objectStore("estudantes");
        const atividadesStore = transaction.objectStore("atividades");

        // Excluir coordenador
        coordenadoresStore.delete(usuario);

        // Buscar todos os estudantes deste coordenador
        const index = estudantesStore.index("coordenador");
        const request = index.openCursor(IDBKeyRange.only(usuario));

        request.onsuccess = function () {
            const cursor = request.result;
            if (cursor) {
                const estudante = cursor.value;

                // Excluir todas as atividades deste estudante
                const indexAtividades = atividadesStore.index("usuario");
                const requestAtividades = indexAtividades.openCursor(IDBKeyRange.only(estudante.usuario));

                requestAtividades.onsuccess = function () {
                    const cursorAtividades = requestAtividades.result;
                    if (cursorAtividades) {
                        atividadesStore.delete(cursorAtividades.value.id);
                        cursorAtividades.continue();
                    }
                };

                // Excluir estudante
                estudantesStore.delete(estudante.usuario);
                cursor.continue();
            }
        };

        transaction.oncomplete = function () {
            showSystemMessage("Coordenador e todos os dados relacionados excluídos com sucesso!", "success");
            carregarCoordenadores();
        };

        transaction.onerror = function () {
            showSystemMessage("Erro ao excluir coordenador", "error");
        };
    }
}

/**
 * Preenche o formulário de edição de coordenador
 * @param {string} usuario Usuário do coordenador a ser editado
 */
function editarCoordenador(usuario) {
    const transaction = db.transaction("coordenadores", "readonly");
    const store = transaction.objectStore("coordenadores");
    const request = store.get(usuario);

    request.onsuccess = function () {
        const coordenador = request.result;
        if (!coordenador) return;

        // Preencher formulário de edição
        const coordNome = getElementSafe("coordNomeEdicao");
        const coordMatricula = getElementSafe("coordMatriculaEdicao");
        const coordUsuario = getElementSafe("coordUsuarioEdicao");
        const coordSenha = getElementSafe("coordSenhaEdicao");
        const coordId = getElementSafe("coordIdEdicao");

        if (coordNome && coordMatricula && coordUsuario && coordSenha && coordId) {
            coordId.value = coordenador.usuario;
            coordNome.value = coordenador.nome;
            coordMatricula.value = coordenador.matricula;
            coordUsuario.value = coordenador.usuario;
            coordSenha.value = coordenador.senha;

            abrirModalEdicaoCoordenador();
        }
    };
}

/**
 * Salva as alterações na edição de um coordenador
 * @param {Event} e Evento de submit
 */
function salvarEdicaoCoordenador(e) {
    e.preventDefault();

    const form = document.getElementById("formEdicaoCoordenador");
    if (!form) {
        showSystemMessage("Formulário não encontrado", "error");
        return;
    }

    const coordId = getElementSafe("coordIdEdicao");
    const coordNome = getElementSafe("coordNomeEdicao");
    const coordMatricula = getElementSafe("coordMatriculaEdicao");
    const coordUsuario = getElementSafe("coordUsuarioEdicao");
    const coordSenha = getElementSafe("coordSenhaEdicao");

    if (!coordId || !coordNome || !coordMatricula || !coordUsuario || !coordSenha) {
        showSystemMessage("Elementos do formulário não encontrados", "error");
        return;
    }

    const usuarioAntigo = coordId.value;
    const nome = coordNome.value.trim();
    const matricula = coordMatricula.value.trim();
    const usuario = coordUsuario.value.trim();
    const senha = coordSenha.value.trim();

    if (!nome || !matricula || !usuario || !senha) {
        showSystemMessage("Preencha todos os campos", "error");
        return;
    }

    // Verificar se o usuário atual está editando a si mesmo
    if (currentUser === usuarioAntigo) {
        showSystemMessage("Não é possível editar seu próprio usuário enquanto está logado", "error");
        return;
    }

    const transaction = db.transaction(["coordenadores", "estudantes"], "readwrite");
    const coordenadoresStore = transaction.objectStore("coordenadores");
    const estudantesStore = transaction.objectStore("estudantes");

    // Primeiro verificar se o novo usuário já existe (apenas se mudou o usuário)
    if (usuario !== usuarioAntigo) {
        const checkRequest = coordenadoresStore.get(usuario);

        checkRequest.onsuccess = function () {
            if (checkRequest.result) {
                showSystemMessage("Já existe um coordenador com este nome de usuário", "error");
                return;
            }
            continuarAtualizacao();
        };

        checkRequest.onerror = function () {
            showSystemMessage("Erro ao verificar usuário", "error");
        };
    } else {
        continuarAtualizacao();
    }

    function continuarAtualizacao() {
        // Buscar o coordenador original
        const getRequest = coordenadoresStore.get(usuarioAntigo);

        getRequest.onsuccess = function () {
            const coordenadorOriginal = getRequest.result;
            if (!coordenadorOriginal) {
                showSystemMessage("Coordenador não encontrado", "error");
                return;
            }

            // Atualizar os dados mantendo a mesma chave (usuário antigo)
            coordenadorOriginal.nome = nome;
            coordenadorOriginal.matricula = matricula;
            coordenadorOriginal.senha = senha;

            // Se o usuário mudou, precisamos atualizar todas as referências
            if (usuario !== usuarioAntigo) {
                coordenadorOriginal.usuario = usuario;

                // 1. Primeiro atualizar referências em estudantes
                const index = estudantesStore.index("coordenador");
                const cursorRequest = index.openCursor(IDBKeyRange.only(usuarioAntigo));

                cursorRequest.onsuccess = function (e) {
                    const cursor = e.target.result;
                    if (cursor) {
                        const estudante = cursor.value;
                        estudante.coordenador = usuario;
                        estudantesStore.put(estudante);
                        cursor.continue();
                    } else {
                        // 2. Depois de atualizar estudantes, deletar o registro antigo
                        coordenadoresStore.delete(usuarioAntigo);
                        // 3. E adicionar o registro atualizado com a nova chave
                        coordenadoresStore.add(coordenadorOriginal);
                    }
                };
            } else {
                // Se o usuário não mudou, apenas atualizar
                coordenadoresStore.put(coordenadorOriginal);
            }
        };

        transaction.oncomplete = function () {
            showSystemMessage("Coordenador atualizado com sucesso!", "success");
            fecharModalEdicaoCoordenador();
            carregarCoordenadores();
        };

        transaction.onerror = function () {
            showSystemMessage("Erro ao atualizar coordenador", "error");
        };
    }
}

/**
 * Abre o modal de edição de coordenador
 */
function abrirModalEdicaoCoordenador() {
    const modal = document.getElementById("modalEdicaoCoordenador");
    if (modal) {
        modal.style.display = "block";
    }
}

/**
 * Fecha o modal de edição de coordenador
 */
function fecharModalEdicaoCoordenador() {
    const modal = document.getElementById("modalEdicaoCoordenador");
    if (modal) {
        modal.style.display = "none";
        // Limpar formulário
        const form = document.getElementById("formEdicaoCoordenador");
        if (form) form.reset();
    }
}

/**
 * Limpa o formulário de edição de coordenador
 */
function limparEdicaoCoordenador() {
    const form = getElementSafe("formEdicaoCoordenador");
    if (form) form.reset();
    fecharModalEdicaoCoordenador();
}

// =============================================
// FUNÇÕES DE COORDENADOR
// =============================================

/**
 * Manipula o cadastro de um novo estudante
 * @param {Event} e Evento de submit
 */
function handleCadastroEstudante(e) {
    e.preventDefault();

    const estudanteNome = getElementSafe("estudanteNome");
    const estudanteMatricula = getElementSafe("estudanteMatricula");
    const estudanteUsuario = getElementSafe("estudanteUsuario");
    const estudanteSenha = getElementSafe("estudanteSenha");

    if (!estudanteNome || !estudanteMatricula || !estudanteUsuario || !estudanteSenha) {
        showSystemMessage("Elementos do formulário não encontrados", "error");
        return;
    }

    const nome = estudanteNome.value.trim();
    const matricula = estudanteMatricula.value.trim();
    const usuario = estudanteUsuario.value.trim();
    const senha = estudanteSenha.value.trim();

    if (!nome || !matricula || !usuario || !senha) {
        showSystemMessage("Preencha todos os campos", "error");
        return;
    }

    // VALIDAÇÃO DA MATRÍCULA
    if (!validarMatricula(matricula)) {
        const anoAtual = new Date().getFullYear();
        showSystemMessage(`Matrícula inválida. Deve ter 11 dígitos e o ano de ingresso entre 2000 e o ${anoAtual}.`, "error");
        return;
    }

    const estudante = {
        nome,
        matricula,
        usuario,
        senha,
        tipo: "student",
        coordenador: currentUser // Usuário do coordenador logado
    };

    const transaction = db.transaction("estudantes", "readwrite");
    const store = transaction.objectStore("estudantes");
    const request = store.add(estudante);

    request.onsuccess = function () {
        showSystemMessage("Estudante cadastrado com sucesso!", "success");
        const form = getElementSafe("formCadastroEstudante");
        if (form) form.reset();
        carregarEstudantes();
    };

    request.onerror = function () {
        showSystemMessage("Erro ao cadastrar estudante. O usuário pode já existir.", "error");
    };
}

/**
 * Carrega a lista de estudantes do coordenador logado
 */
async function carregarEstudantes() {
    const container = getElementSafe("estudantesList");
    if (!container) return;

    try {
        const estudantes = await getAllFromStore("estudantes");
        container.innerHTML = "";

        if (estudantes.length === 0) {
            container.innerHTML = '<div class="system-message info">Nenhum estudante cadastrado.</div>';
            return;
        }

        // Filtrar apenas estudantes do coordenador logado
        const estudantesDoCoordenador = estudantes.filter(estudante => estudante.coordenador === currentUser);

        if (estudantesDoCoordenador.length === 0) {
            container.innerHTML = '<div class="system-message info">Nenhum estudante cadastrado.</div>';
            return;
        }

        estudantesDoCoordenador.forEach(estudante => {
            const card = document.createElement("div");
            card.className = "user-card";
            card.innerHTML = `
                <div class="user-info-card">
                    <h4>${estudante.nome}</h4>
                    <p>Matrícula: ${estudante.matricula} | Usuário: ${estudante.usuario}</p>
                </div>
                <div class="user-actions">
                    <button class="btn-icon btn-edit" onclick="editarEstudante('${estudante.usuario}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon btn-delete" onclick="excluirEstudante('${estudante.usuario}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar estudantes:", error);
        showSystemMessage("Erro ao carregar estudantes", "error");
    }
}

/**
 * Preenche o formulário de edição de estudante
 * @param {string} usuario Usuário do estudante a ser editado
 */
function editarEstudante(usuario) {
    const transaction = db.transaction("estudantes", "readonly");
    const store = transaction.objectStore("estudantes");
    const request = store.get(usuario);

    request.onsuccess = function () {
        const estudante = request.result;
        if (!estudante) return;

        // Preencher formulário de edição
        const estudanteNome = getElementSafe("estudanteNomeEdicao");
        const estudanteMatricula = getElementSafe("estudanteMatriculaEdicao");
        const estudanteUsuario = getElementSafe("estudanteUsuarioEdicao");
        const estudanteSenha = getElementSafe("estudanteSenhaEdicao");
        const estudanteId = getElementSafe("estudanteIdEdicao");

        if (estudanteNome && estudanteMatricula && estudanteUsuario && estudanteSenha && estudanteId) {
            estudanteId.value = estudante.usuario;
            estudanteNome.value = estudante.nome;
            estudanteMatricula.value = estudante.matricula;
            estudanteUsuario.value = estudante.usuario;
            estudanteSenha.value = estudante.senha;

            abrirModalEdicaoEstudante();
        }
    };
}

/**
 * Salva as alterações na edição de um estudante
 * @param {Event} e Evento de submit
 */
function salvarEdicaoEstudante(e) {
    e.preventDefault();

    const form = document.getElementById("formEdicaoEstudante");
    if (!form) {
        showSystemMessage("Formulário não encontrado", "error");
        return;
    }

    const estudanteId = getElementSafe("estudanteIdEdicao");
    const estudanteNome = getElementSafe("estudanteNomeEdicao");
    const estudanteMatricula = getElementSafe("estudanteMatriculaEdicao");
    const estudanteUsuario = getElementSafe("estudanteUsuarioEdicao");
    const estudanteSenha = getElementSafe("estudanteSenhaEdicao");

    if (!estudanteId || !estudanteNome || !estudanteMatricula || !estudanteUsuario || !estudanteSenha) {
        showSystemMessage("Elementos do formulário não encontrados", "error");
        return;
    }

    const usuarioAntigo = estudanteId.value;
    const nome = estudanteNome.value.trim();
    const matricula = estudanteMatricula.value.trim();
    const usuario = estudanteUsuario.value.trim();
    const senha = estudanteSenha.value.trim();

    if (!nome || !matricula || !usuario || !senha) {
        showSystemMessage("Preencha todos os campos", "error");
        return;
    }

    // Verificar se o usuário atual está editando a si mesmo
    if (currentUser === usuarioAntigo) {
        showSystemMessage("Não é possível editar seu próprio usuário enquanto está logado", "error");
        return;
    }

    const transaction = db.transaction(["estudantes", "atividades"], "readwrite");
    const estudantesStore = transaction.objectStore("estudantes");
    const atividadesStore = transaction.objectStore("atividades");

    // Primeiro verificar se o novo usuário já existe (apenas se mudou o usuário)
    if (usuario !== usuarioAntigo) {
        const checkRequest = estudantesStore.get(usuario);

        checkRequest.onsuccess = function () {
            if (checkRequest.result) {
                showSystemMessage("Já existe um estudante com este nome de usuário", "error");
                return;
            }
            continuarAtualizacao();
        };

        checkRequest.onerror = function () {
            showSystemMessage("Erro ao verificar usuário", "error");
        };
    } else {
        continuarAtualizacao();
    }

    function continuarAtualizacao() {
        // Buscar o estudante original
        const getRequest = estudantesStore.get(usuarioAntigo);

        getRequest.onsuccess = function () {
            const estudanteOriginal = getRequest.result;
            if (!estudanteOriginal) {
                showSystemMessage("Estudante não encontrado", "error");
                return;
            }

            // Atualizar os dados mantendo a mesma chave (usuário antigo)
            estudanteOriginal.nome = nome;
            estudanteOriginal.matricula = matricula;
            estudanteOriginal.senha = senha;

            // Se o usuário mudou, precisamos atualizar todas as referências
            if (usuario !== usuarioAntigo) {
                estudanteOriginal.usuario = usuario;

                // 1. Primeiro atualizar referências em atividades
                const index = atividadesStore.index("usuario");
                const cursorRequest = index.openCursor(IDBKeyRange.only(usuarioAntigo));

                cursorRequest.onsuccess = function (e) {
                    const cursor = e.target.result;
                    if (cursor) {
                        const atividade = cursor.value;
                        atividade.usuario = usuario;
                        atividadesStore.put(atividade);
                        cursor.continue();
                    } else {
                        // 2. Depois de atualizar atividades, deletar o registro antigo
                        estudantesStore.delete(usuarioAntigo);
                        // 3. E adicionar o registro atualizado com a nova chave
                        estudantesStore.add(estudanteOriginal);
                    }
                };
            } else {
                // Se o usuário não mudou, apenas atualizar
                estudantesStore.put(estudanteOriginal);
            }
        };

        transaction.oncomplete = function () {
            showSystemMessage("Estudante atualizado com sucesso!", "success");
            fecharModalEdicaoEstudante();
            carregarEstudantes();
            carregarTurma();
        };

        transaction.onerror = function () {
            showSystemMessage("Erro ao atualizar estudante", "error");
        };
    }
}

/**
 * Exclui um estudante e todos os dados relacionados
 * @param {string} usuario Usuário do estudante a ser excluído
 */
function excluirEstudante(usuario) {
    if (confirm("Tem certeza que deseja excluir este estudante? Todas as atividades e comprovantes serão excluídos permanentemente.")) {
        const transaction = db.transaction(["estudantes", "atividades"], "readwrite");
        const estudantesStore = transaction.objectStore("estudantes");
        const atividadesStore = transaction.objectStore("atividades");

        // Excluir estudante
        estudantesStore.delete(usuario);

        // Excluir todas as atividades deste estudante
        const index = atividadesStore.index("usuario");
        const request = index.openCursor(IDBKeyRange.only(usuario));

        request.onsuccess = function () {
            const cursor = request.result;
            if (cursor) {
                atividadesStore.delete(cursor.value.id);
                cursor.continue();
            }
        };

        transaction.oncomplete = function () {
            showSystemMessage("Estudante e todas as atividades excluídos com sucesso!", "success");
            carregarEstudantes();
            carregarTurma();
        };

        transaction.onerror = function () {
            showSystemMessage("Erro ao excluir estudante", "error");
        };
    }
}

/**
 * Abre o modal de edição de estudante
 */
function abrirModalEdicaoEstudante() {
    const modal = document.getElementById("modalEdicaoEstudante");
    if (modal) {
        modal.style.display = "block";
    }
}

/**
 * Fecha o modal de edição de estudante
 */
function fecharModalEdicaoEstudante() {
    const modal = document.getElementById("modalEdicaoEstudante");
    if (modal) {
        modal.style.display = "none";
        // Limpar formulário
        const form = getElementSafe("formEdicaoEstudante");
        if (form) form.reset();
    }
}

/**
 * Limpa o formulário de edição de estudante
 */
function limparEdicaoEstudante() {
    const form = getElementSafe("formEdicaoEstudante");
    if (form) form.reset();
    fecharModalEdicaoEstudante();
}

/**
 * Importa estudantes a partir de um arquivo ZIP
 */
function importarEstudanteZIP() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.zip';

    fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const zip = new JSZip();
            const content = await zip.loadAsync(file);

            // Processar CSV
            const csvFiles = Object.values(content.files).filter(f => f.name.endsWith('.csv'));
            if (csvFiles.length === 0) throw new Error("Arquivo CSV não encontrado no ZIP");

            const csvFile = csvFiles[0];
            const csvContent = await csvFile.async('string');
            const linhas = csvContent.split('\n').filter(linha => linha.trim() !== '');

            // Verificar compatibilidade do curso
            if (linhas.length === 0 || !linhas[0].startsWith('Curso�')) {
                throw new Error("Arquivo inválido: Formato não reconhecido");
            }

            const cursoImportado = linhas[0].split('�')[1];
            if (cursoImportado !== CURSO_DE_GRADUACAO) {
                throw new Error(`Arquivo incompatível! Este arquivo pertente ao curso: ${cursoImportado}. O sistema atual esá configurado para: ${CURSO_DE_GRADUACAO}.`);
            }

            // Extrair informações do estudante (segunda linha)
            const infoEstudante = linhas[1].split('�');
            if (infoEstudante.length < 4) {
                throw new Error("Formato de arquivo inválido: informações do estudante não encontradas");
            }

            const estudante = {
                nome: infoEstudante[1].replace('Dados do usuário�', ''),
                usuario: infoEstudante[2],
                matricula: infoEstudante[3],
                senha: infoEstudante[4],
                tipo: "student",
                coordenador: currentUser
            };

            // VALIDAÇÃO DA MATRÍCULA DO ESTUDANTE IMPORTADO
            if (!validarMatricula(estudante.matricula)) {
                throw new Error("Matrícula do estudante no arquivo é inválida.");
            }

            // Processar comprovantes
            const comprovantes = {};
            const comprovanteFiles = Object.values(content.files).filter(f =>
                f.name.startsWith('comprovantes/') && f.name.endsWith('.pdf')
            );

            for (const comprovanteFile of comprovanteFiles) {
                const comprovanteData = await comprovanteFile.async('arraybuffer');
                const fileName = comprovanteFile.name.split('/').pop();
                const id = fileName.replace('comprovante_', '').replace('.pdf', '');
                comprovantes[id] = comprovanteData;
            }

            // Cadastrar estudante e atividades
            const transaction = db.transaction(["estudantes", "atividades"], "readwrite");
            const estudantesStore = transaction.objectStore("estudantes");
            const atividadesStore = transaction.objectStore("atividades");

            // Verificar se estudante já existe
            const reqExistente = estudantesStore.get(estudante.usuario);

            reqExistente.onsuccess = function () {
                if (reqExistente.result) {
                    showSystemMessage("Estudante já existe com este usuário.", "error");
                    return;
                }

                estudantesStore.add(estudante);

                // Processar atividades (a partir da terceira linha)
                for (let i = 3; i < linhas.length; i++) {
                    try {
                        const campos = linhas[i].split('�');
                        if (campos.length < 7) continue;

                        // VALIDAÇÃO DO PERÍODO DA ATIVIDADE
                        const periodoAtividade = campos[5];
                        if (!validarPeriodo(periodoAtividade, estudante.matricula)) {
                            console.warn(`Atividade na linha ${i} ignorada: período inválido`);
                            continue; // Pula esta atividade, mas continua com as demais
                        }

                        const novaAtividade = {
                            usuario: estudante.usuario,
                            nome: campos[1],
                            tipo: campos[2],
                            horasRegistradas: parseFloat(campos[3]) || 0,
                            horasValidadas: 0,
                            periodo: periodoAtividade,
                            status: 'Pendente',
                            comprovante: comprovantes[campos[0]] || null
                        };

                        atividadesStore.add(novaAtividade);
                    } catch (error) {
                        console.error(`Erro na linha ${i}:`, error);
                    }
                }

                showSystemMessage("Estudante e atividades importados com sucesso!", "success");
                carregarEstudantes();
            };

        } catch (error) {
            showSystemMessage("Erro na importação: " + error.message, "error");
        }
    };

    fileInput.click();
}

/**
 * Carrega a turma do coordenador com informações de progresso
 */
async function carregarTurma() {
    const tabela = getElementSafe("tabelaTurma");
    if (!tabela) return;

    try {
        const estudantes = await getAllFromStore("estudantes");
        // Filtrar apenas estudantes do coordenador logado
        const estudantesDoCoordenador = estudantes.filter(estudante => estudante.coordenador === currentUser);

        // Limpar tabela completamente antes de popular
        tabela.innerHTML = "";

        let totalHorasValidadasTurma = 0;
        let totalEstudantesComHoras = 0;
        let totalEstudantes = estudantesDoCoordenador.length;

        if (estudantesDoCoordenador.length === 0) {
            tabela.innerHTML = '<tr><td colspan="6" style="text-align: center;">Nenhum estudante cadastrado.</td></tr>';
            // Atualizar KPIs para zero
            atualizarKPIsTurma(0, 0, 0);
            return;
        }

        // Para cada estudante, calcular totais de horas
        for (const estudante of estudantesDoCoordenador) {
            const atividades = await getAtividadesPorUsuario(estudante.usuario);
            let horasRegistradas = 0;
            let horasValidadas = 0;

            atividades.forEach(atividade => {
                horasRegistradas += atividade.horasRegistradas;
                if (atividade.status === 'Aprovado') {
                    horasValidadas += atividade.horasValidadas;
                }
            });

            if (horasValidadas > 0) {
                totalEstudantesComHoras++;
            }

            totalHorasValidadasTurma += horasValidadas;

            const progresso = Math.min(100, (horasValidadas / HORAS_NECESSARIAS) * 100);

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${estudante.nome}</td>
                <td>${estudante.matricula}</td>
                <td>${horasRegistradas.toFixed(1)}</td>
                <td>${horasValidadas.toFixed(1)}</td>
                <td>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${progresso}%"></div>
                    </div>
                    <small>${progresso.toFixed(1)}%</small>
                </td>
                <td>
                    <button class="btn-icon btn-view" onclick="visualizarAtividades('${estudante.usuario}')">
                        <i class="fas fa-eye"></i> Acessar Atividades
                    </button>
                </td>
            `;

            tabela.appendChild(row);
        }

        // Calcular progresso médio da turma
        const progressoMedio = totalEstudantes > 0 ? (totalHorasValidadasTurma / (HORAS_NECESSARIAS * totalEstudantes)) * 100 : 0;

        // Atualizar KPIs
        atualizarKPIsTurma(totalEstudantes, totalEstudantesComHoras, progressoMedio);

    } catch (error) {
        console.error("Erro ao carregar turma:", error);
        showSystemMessage("Erro ao carregar turma", "error");
    }
}

/**
 * Atualiza os KPIs da turma
 * @param {number} totalEstudantes Total de estudantes
 * @param {number} estudantesComHoras Estudantes com horas validadas
 * @param {number} progressoMedio Progresso médio da turma
 */
function atualizarKPIsTurma(totalEstudantes, estudantesComHoras, progressoMedio) {
    const totalEstudantesElem = getElementSafe("totalEstudantesTurma");
    const estudantesComHorasElem = getElementSafe("estudantesComHoras");
    const progressoMedioElem = getElementSafe("updatecoordinatorKPI"); // ID corrigido

    if (totalEstudantesElem) totalEstudantesElem.textContent = totalEstudantes;
    if (estudantesComHorasElem) estudantesComHorasElem.textContent = estudantesComHoras;
    if (progressoMedioElem) progressoMedioElem.textContent = progressoMedio.toFixed(1) + '%';
}

/**
 * Atualiza o KPI do coordenador
 * @param {number} totalHorasValidadas Total de horas validadas
 */
function updateCoordinatorKPI(totalHorasValidadas) {
    const needed = HORAS_NECESSARIAS || 225;
    const percent = Math.min(100, Math.round((totalHorasValidadas / needed) * 100));
    const el = document.getElementById('updatecoordinatorKPI');
    if (el) el.textContent = percent + '%';
}

/**
 * Visualiza as atividades de um estudante específico
 * @param {string} usuarioEstudante Usuário do estudante
 */
function visualizarAtividades(usuarioEstudante) {
    selectedStudent = usuarioEstudante;

    // Alternar para a aba de atividades
    const tab = document.querySelector('[data-tab="atividades-estudante"]');
    if (tab) {
        tab.click();
    }

    // Buscar dados do estudante
    const transaction = db.transaction(["estudantes"], "readonly");
    const store = transaction.objectStore("estudantes");
    const request = store.get(usuarioEstudante);

    request.onsuccess = function () {
        const estudante = request.result;

        // Atualizar nome do estudante em ambos os lugares
        const nomeEstudanteElem = document.querySelector('#atividades-estudante #nomeEstudanteSelecionado');
        if (nomeEstudanteElem) {
            nomeEstudanteElem.textContent = estudante.nome;
        }

        const nomeEstudanteEstatisticas = document.querySelector('#estatisticas-estudante #nomeEstudanteSelecionado');
        if (nomeEstudanteEstatisticas) {
            nomeEstudanteEstatisticas.textContent = estudante.nome;
        }

        // Carregar atividades e resumo
        carregarAtividadesEstudante(usuarioEstudante);
        carregarEstatisticasEstudante(usuarioEstudante);
        atualizarResumoEstudante(usuarioEstudante);

    };
}

/**
 * Carrega as atividades de um estudante para visualização do coordenador
 * @param {string} usuarioEstudante Usuário do estudante
 * @param {number} tentativas Número de tentativas (para retry)
 */
async function carregarAtividadesEstudante(usuarioEstudante, tentativas = 0) {
    const maxTentativas = 10;
    const tabela = document.getElementById('tabelaAtividadesEstudante');

    if (!tabela) {
        if (tentativas < maxTentativas) {
            setTimeout(() => {
                carregarAtividadesEstudante(usuarioEstudante, tentativas + 1);
            }, 50);
            return;
        } else {
            console.error('Elemento tabelaAtividadesEstudante não encontrado após múltiplas tentativas');
            return;
        }
    }

    try {
        const atividades = await getAtividadesPorUsuario(usuarioEstudante);

        // Aplicar filtro de status
        const filtroStatus = getElementSafe("filtroStatus").value;
        const atividadesFiltradas = atividades.filter(atividade => {
            if (filtroStatus === "Todos") return true;
            return atividade.status === filtroStatus;
        });

        // Limpar tabela completamente antes de popular
        tabela.innerHTML = "";

        if (atividadesFiltradas.length === 0) {
            tabela.innerHTML = '<tr><td colspan="8" style="text-align: center;">Nenhuma atividade encontrada.</td></tr>';
            return;
        }

        atividadesFiltradas.forEach(atividade => {
            let statusClass = "";
            let statusText = "";

            if (atividade.status === 'Aprovado') {
                statusClass = "approved";
                statusText = "Aprovado";
            } else if (atividade.status === 'Rejeitado') {
                statusClass = "rejected";
                statusText = "Rejeitado";
            } else {
                statusClass = "pending";
                statusText = "Pendente";
            }

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${atividade.nome}</td>
                <td>${atividade.tipo}</td>
                <td>${atividade.horasRegistradas}</td>
                <td>${atividade.horasValidadas}</td>
                <td>${atividade.periodo}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td style="text-align: center;">
                    <button class="action-btn download" onclick="baixarComprovante(${atividade.id})" ${!atividade.comprovante ? 'disabled' : ''}>
                        <i class="fas fa-download"></i>
                    </button>
                </td>
                <td>
                    <div style="display: flex; gap: 10px;">
                        <button class="btn-icon btn-edit" onclick="avaliarAtividade(${atividade.id}, 'Aprovado')">
                            <i class="fa-solid fa-check"></i> Aprovar
                        </button>
                        <button class="btn-icon btn-delete" onclick="avaliarAtividade(${atividade.id}, 'Rejeitado')">
                            <i class="fa-solid fa-xmark"></i> Rejeitar
                        </button>
                    </div>
                </td>
            `;

            tabela.appendChild(row);
        });
    } catch (error) {
        console.error("Erro ao carregar atividades do estudante:", error);
        showSystemMessage("Erro ao carregar atividades do estudante", "error");
    }
}

/**
 * Aplica filtros nas atividades do estudante
 */
function aplicarFiltrosAtividades() {
    if (selectedStudent) {
        carregarAtividadesEstudante(selectedStudent);
    }
}

/**
 * Atualiza o resumo do estudante
 * @param {string} usuarioEstudante Usuário do estudante
 */
async function atualizarResumoEstudante(usuarioEstudante) {
    let totalHorasRegistradas = 0;
    let totalHorasValidadas = 0;

    const atividades = await getAtividadesPorUsuario(usuarioEstudante);
    atividades.forEach(atividade => {
        totalHorasRegistradas += atividade.horasRegistradas;
        totalHorasValidadas += atividade.horasValidadas;
    });

    const progressoTotal = Math.min(100, (totalHorasValidadas / HORAS_NECESSARIAS) * 100);

    // Atualizar elementos do resumo
    const resumoHorasRegistradas = getElementSafe("resumoHorasRegistradasEstudante");
    const resumoHorasValidadas = getElementSafe("resumoHorasValidadasEstudante");
    const progressoTotalEstudante = getElementSafe("progressoTotalEstudante");
    const progressoTotalFillEstudante = getElementSafe("progressoTotalFillEstudante");
    const horasValidadasEstudante = getElementSafe("horasValidadasEstudante");
    const horasValidadasFillEstudante = getElementSafe("horasValidadasFillEstudante");

    if (resumoHorasRegistradas) resumoHorasRegistradas.textContent = totalHorasRegistradas.toFixed(1);
    if (resumoHorasValidadas) resumoHorasValidadas.textContent = totalHorasValidadas.toFixed(1);
    if (progressoTotalEstudante) progressoTotalEstudante.textContent = progressoTotal.toFixed(1) + '%';
    if (progressoTotalFillEstudante) progressoTotalFillEstudante.style.width = progressoTotal + '%';
    if (horasValidadasEstudante) horasValidadasEstudante.textContent = `${totalHorasValidadas.toFixed(1)}/225`;
    if (horasValidadasFillEstudante) horasValidadasFillEstudante.style.width = progressoTotal + '%';
}

/**
 * Avalia uma atividade (aprova ou rejeita)
 * @param {number} id ID da atividade
 * @param {string} status Novo status (Aprovado/Rejeitado)
 */
async function avaliarAtividade(id, status) {
    try {
        // Primeiro, buscar a atividade
        const atividade = await new Promise((resolve, reject) => {
            const transaction = db.transaction(["atividades"], "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao buscar atividade");
        });

        if (!atividade) {
            showSystemMessage("Atividade não encontrada", "error");
            return;
        }

        if (status === 'Aprovado') {
            // Calcular horas validadas considerando os limites
            const horasValidadas = await calcularHorasValidadas(
                atividade.tipo,
                atividade.horasRegistradas,
                atividade.periodo,
                atividade.comprovante,
                id,
                atividade.usuario
            );

            // Atualizar a atividade com as horas validadas e status
            atividade.horasValidadas = horasValidadas;
            atividade.status = 'Aprovado';

            showSystemMessage("Atividade aprovada com sucesso!", "success");
        } else {
            atividade.horasValidadas = 0;
            atividade.status = 'Rejeitado';
            showSystemMessage("Atividade rejeitada", "warning");
        }

        // Salvar a atividade atualizada
        await new Promise((resolve, reject) => {
            const transaction = db.transaction(["atividades"], "readwrite");
            const store = transaction.objectStore("atividades");
            const request = store.put(atividade);

            request.onsuccess = () => resolve();
            request.onerror = () => reject("Erro ao salvar atividade");
        });

        // Recarregar as atividades do estudante
        carregarAtividadesEstudante(selectedStudent);
        atualizarResumoEstudante(selectedStudent);
        await atualizarEstudanteNaTurma(selectedStudent);
        carregarEstatisticasEstudante(selectedStudent);

        // Atualizar o resumo da turma
        carregarTurma();
    } catch (error) {
        console.error("Erro ao avaliar atividade:", error);
        showSystemMessage("Erro ao avaliar atividade", "error");
    }
}

/**
 * Calcula as horas validadas para uma atividade considerando limites
 * @param {string} tipo Tipo de atividade
 * @param {number} horasSolicitadas Horas solicitadas
 * @param {string} periodo Período da atividade
 * @param {ArrayBuffer} comprovante Comprovante da atividade
 * @param {number} excludeId ID a ser excluído do cálculo (para edição)
 * @param {string} usuario Usuário dono da atividade
 * @returns {Promise} Promise com o número de horas validadas
 */
async function calcularHorasValidadas(tipo, horasSolicitadas, periodo, comprovante, excludeId, usuario) {
    if (comprovante == null) return 0;

    // 1. Verificação de limite do grupo
    const grupo = obterGrupoPorTipo(tipo);
    if (grupo) {
        const horasCadastradasGrupo = await consultarHorasCadastradasGrupo(grupo, excludeId, usuario);
        const disponibilidadeGrupo = Math.max(0, maxHorasGruposAtividades[grupo] - horasCadastradasGrupo);
        if (disponibilidadeGrupo <= 0) return 0;
    }

    const horasCadastradasGlobal = await consultarHorasCadastradasGlobal(tipo, excludeId, usuario);
    const disponibilidadeGlobal = Math.max(0, configAtividades[tipo].maxHoras - horasCadastradasGlobal);
    if (disponibilidadeGlobal <= 0) return 0;

    let limiteEspecifico;
    if (configAtividades[tipo].restricao === 'periodo') {
        const horasPeriodo = await consultarHorasPorTipo(tipo, periodo, excludeId, usuario);
        const disponibilidadePeriodo = Math.max(0, configAtividades[tipo].maxHorasValidadas - horasPeriodo.totalValidadas);
        limiteEspecifico = disponibilidadePeriodo;
    } else {
        limiteEspecifico = configAtividades[tipo].maxHorasValidadas;
    }

    return Math.min(horasSolicitadas, limiteEspecifico, disponibilidadeGlobal);
}

/**
 * Obtém o grupo de uma atividade pelo tipo
 * @param {string} tipo Tipo de atividade
 * @returns {string|null} Nome do grupo ou null se não encontrado
 */
function obterGrupoPorTipo(tipo) {
    for (const grupo in AtividadesPorGrupo) {
        if (AtividadesPorGrupo[grupo].includes(tipo)) {
            return grupo;
        }
    }
    return null;
}

/**
 * Consulta horas cadastradas globalmente para um tipo de atividade
 * @param {string} tipo Tipo de atividade
 * @param {number} excludeId ID a ser excluído
 * @param {string} usuario Usuário dono das atividades
 * @returns {Promise} Promise com o total de horas
 */
async function consultarHorasCadastradasGlobal(tipo, excludeId = null, usuario) {
    return new Promise((resolve, reject) => {
        let totalHoras = 0;

        const transaction = db.transaction(["atividades"], "readonly");
        const store = transaction.objectStore("atividades");
        const request = store.openCursor();

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                const atividade = cursor.value;

                if (atividade.tipo === tipo &&
                    atividade.usuario === usuario &&
                    (!excludeId || atividade.id !== excludeId)) {
                    totalHoras += atividade.horasValidadas;
                }
                cursor.continue();
            } else {
                resolve(totalHoras);
            }
        };

        request.onerror = function () {
            reject("Erro ao consultar horas cadastradas globalmente");
        };
    });
}

/**
 * Consulta horas cadastradas por grupo
 * @param {string} grupo Grupo de atividades
 * @param {number} excludeId ID a ser excluído
 * @param {string} usuario Usuário dono das atividades
 * @returns {Promise} Promise com o total de horas
 */
async function consultarHorasCadastradasGrupo(grupo, excludeId = null, usuario) {
    return new Promise((resolve, reject) => {
        let totalHoras = 0;

        const transaction = db.transaction(["atividades"], "readonly");
        const store = transaction.objectStore("atividades");
        const request = store.openCursor();

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                const atividade = cursor.value;
                const atividadeGrupo = obterGrupoPorTipo(atividade.tipo);

                if (atividadeGrupo === grupo &&
                    atividade.usuario === usuario &&
                    (!excludeId || atividade.id !== excludeId)) {
                    totalHoras += atividade.horasValidadas;
                }
                cursor.continue();
            } else {
                resolve(totalHoras);
            }
        };

        request.onerror = function () {
            reject("Erro ao consultar horas cadastradas do grupo");
        };
    });
}

/**
 * Consulta horas por tipo e período
 * @param {string} tipo Tipo de atividade
 * @param {string} periodo Período da atividade
 * @param {number} excludeId ID a ser excluído
 * @param {string} usuario Usuário dono das atividades
 * @returns {Promise} Promise com objeto contendo totalHoras e totalValidadas
 */
async function consultarHorasPorTipo(tipo, periodo = null, excludeId = null, usuario) {
    return new Promise((resolve, reject) => {
        let totalHoras = 0;
        let totalValidadas = 0;

        const transaction = db.transaction(["atividades"], "readonly");
        const store = transaction.objectStore("atividades");
        const request = store.openCursor();

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                const atividade = cursor.value;

                const mesmoTipo = atividade.tipo === tipo;
                const mesmoPeriodo = periodo ? atividade.periodo === periodo : true;
                const mesmoUsuario = atividade.usuario === usuario;
                const naoExcluida = !excludeId || atividade.id !== excludeId;

                if (mesmoTipo && mesmoPeriodo && mesmoUsuario && naoExcluida) {
                    totalHoras += atividade.horasRegistradas;
                    totalValidadas += atividade.horasValidadas;
                }
                cursor.continue();
            } else {
                resolve({ totalHoras, totalValidadas });
            }
        };

        request.onerror = function () {
            reject("Erro ao consultar horas por tipo");
        };
    });
}

// Função para carregar as estatísticas do estudante selecionado
async function carregarEstatisticasEstudante(usuarioEstudante) {
    if (!usuarioEstudante) return;

    try {
        // Buscar dados do estudante
        const estudante = await new Promise((resolve, reject) => {
            const transaction = db.transaction(["estudantes"], "readonly");
            const store = transaction.objectStore("estudantes");
            const request = store.get(usuarioEstudante);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao buscar estudante");
        });

        if (!estudante) return;

        // Atualizar nome do estudante
        const elementosNome = document.querySelectorAll('#estatisticas-estudante #nomeEstudanteSelecionado');
        elementosNome.forEach(el => {
            el.textContent = estudante.nome;
        });

        // Carregar atividades e atualizar estatísticas
        const atividades = await getAtividadesPorUsuario(usuarioEstudante);
        atualizarEstatisticasEstudante(atividades);

    } catch (error) {
        console.error("Erro ao carregar estatísticas do estudante:", error);
        showSystemMessage("Erro ao carregar estatísticas do estudante", "error");
    }
}

// Função para atualizar as estatísticas na interface
function atualizarEstatisticasEstudante(atividades) {
    let totalHorasRegistradas = 0;
    let totalHorasValidadas = 0;

    atividades.forEach(atividade => {
        totalHorasRegistradas += atividade.horasRegistradas;
        if (atividade.status === 'Aprovado') {
            totalHorasValidadas += atividade.horasValidadas;
        }
    });

    // Atualizar resumo de horas
    document.getElementById('resumoHorasRegistradasEstudante').textContent = totalHorasRegistradas.toFixed(1);
    document.getElementById('resumoHorasValidadasEstudante').textContent = totalHorasValidadas.toFixed(1);

    // Calcular e atualizar progresso
    const progressoTotal = Math.min(100, (totalHorasValidadas / HORAS_NECESSARIAS) * 100);
    document.getElementById('progressoTotalEstudante').textContent = progressoTotal.toFixed(1) + '%';

    // Atualizar a barra de progresso total - COM ATRASO PARA GARANTIR QUE O DOM ESTÁ PRONTO
    setTimeout(() => {
        const progressoTotalFill = document.getElementById('progressoTotalFillEstudante');
        if (progressoTotalFill) {
            progressoTotalFill.style.width = progressoTotal + '%';
        }
    }, 100);

    document.getElementById('horasValidadasEstudante').textContent = `${totalHorasValidadas.toFixed(1)}/225`;

    // Atualizar a barra de horas validadas - COM ATRASO PARA GARANTIR QUE O DOM ESTÁ PRONTO
    setTimeout(() => {
        const horasValidadasFill = document.getElementById('horasValidadasFillEstudante');
        if (horasValidadasFill) {
            horasValidadasFill.style.width = progressoTotal + '%';
        }
    }, 100);

    // Atualizar gráfico
    atualizarGraficoEstatisticas(atividades);
}

// Função para atualizar o gráfico de estatísticas
async function atualizarGraficoEstatisticas(atividades) {
    const ctx = document.getElementById('hoursChartCoordinator');
    if (!ctx) return;

    // Destruir gráfico existente se houver
    if (window.horasChartCoordinator) {
        window.horasChartCoordinator.destroy();
    }

    // Inicializa horas por grupo
    const horasPorGrupo = {};
    gruposAtividades.forEach(grupo => {
        horasPorGrupo[grupo] = 0;
    });

    // Calcular horas por grupo
    atividades.forEach(atividade => {
        if (atividade.status === 'Aprovado') {
            for (const grupo in AtividadesPorGrupo) {
                if (AtividadesPorGrupo[grupo].includes(atividade.tipo)) {
                    horasPorGrupo[grupo] += atividade.horasValidadas;
                    break;
                }
            }
        }
    });

    const totalHorasValidadas = Object.values(horasPorGrupo).reduce((a, b) => a + b, 0);
    const horasRestantes = Math.max(0, HORAS_NECESSARIAS - totalHorasValidadas);

    const labels = [];
    const data = [];

    // Adiciona grupos com horas (>0)
    for (const grupo in horasPorGrupo) {
        if (horasPorGrupo[grupo] > 0) {
            labels.push(grupo.split(' - ')[0]);
            data.push(horasPorGrupo[grupo]);
        }
    }

    // Sempre inclui a fatia "Horas Restantes" (pode ser 0)
    labels.push('Horas Restantes');
    data.push(horasRestantes);

    // Cores base para os grupos
    const baseColors = [
        '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#858796'
    ];
    const backgroundColors = [];

    for (let i = 0; i < data.length; i++) {
        if (i < baseColors.length) {
            backgroundColors.push(baseColors[i]);
        } else {
            backgroundColors.push('#d1d3e2');
        }
    }

    // Forçar cor cinza para 'Horas Restantes' (último elemento)
    backgroundColors[backgroundColors.length - 1] = '#e9ecef';

    // Criar o gráfico
    window.horasChartCoordinator = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { size: 10 },
                        boxWidth: 12
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value} horas`;
                        }
                    }
                }
            }
        }
    });
}

// =============================================
// FUNÇÕES DE ESTUDANTE
// =============================================

/**
 * Manipula o cadastro de uma nova atividade
 * @param {Event} e Evento de submit
 */
async function handleCadastroSubmit(e) {
    e.preventDefault();

    const nomeInput = getElementSafe("nome");
    const tipoInput = getElementSafe("tipo");
    const horasInput = getElementSafe("horas");
    const periodoInput = getElementSafe("periodo");
    const comprovanteInput = getElementSafe("comprovante");

    if (!nomeInput || !tipoInput || !horasInput || !periodoInput || !comprovanteInput) {
        showSystemMessage("Elementos do formulário não encontrados", "error");
        return;
    }

    const nome = nomeInput.value.trim();
    const tipo = tipoInput.value;
    const horas = parseFloat(horasInput.value);
    const periodo = periodoInput.value.trim();
    const comprovanteFile = comprovanteInput.files[0];

    if (!nome || !tipo || isNaN(horas) || horas < 0 || !periodo) {
        showSystemMessage("Preencha todos os campos obrigatórios", "error");
        return;
    }

    // VALIDAÇÃO DO PERÍODO
    if (!validarPeriodo(periodo, currentUserData.matricula)) {
        const anoAtual = new Date().getFullYear();
        const anoIngresso = parseInt(currentUserData.matricula.substring(0, 4), 10);
        showSystemMessage(`Período inválido. Formato esperado: AAAA.S (ex: 2025.1) com ano entre ${anoIngresso}-${anoAtual}`, "error");
        return;
    }

    try {
        let comprovanteArrayBuffer = null;
        if (comprovanteFile) {
            comprovanteArrayBuffer = await fileToArrayBuffer(comprovanteFile);
        }

        // SEMPRE definir status como Pendente para estudantes
        const status = 'Pendente';
        const horasValidadasEfetivas = 0; // Até que seja aprovado pelo coordenador

        const novaAtividade = {
            usuario: currentUser,
            nome,
            tipo,
            horasRegistradas: horas,
            horasValidadas: horasValidadasEfetivas,
            periodo,
            status: status,
            comprovante: comprovanteArrayBuffer
        };

        const transaction = db.transaction("atividades", "readwrite");
        const store = transaction.objectStore("atividades");
        const request = store.add(novaAtividade);

        request.onsuccess = function () {
            showSystemMessage("Atividade cadastrada com sucesso! Aguarde avaliação do coordenador.", "success");
            const form = getElementSafe("formCadastro");
            if (form) form.reset();
            atualizarTabela();
            atualizarResumo();
        };
    } catch (error) {
        showSystemMessage("Erro ao cadastrar atividade: " + error, "error");
    }
}

/**
 * Converte um arquivo para ArrayBuffer
 * @param {File} file Arquivo a ser convertido
 * @returns {Promise} Promise com o ArrayBuffer
 */
function fileToArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}

/**
 * Manipula a edição de uma atividade existente
 * @param {Event} e Evento de submit
 */
async function handleEdicaoSubmit(e) {
    e.preventDefault();

    const idEdicaoInput = getElementSafe("idEdicao");
    const nomeEdicaoInput = getElementSafe("nomeEdicao");
    const tipoEdicaoInput = getElementSafe("tipoEdicao");
    const horasEdicaoInput = getElementSafe("horasEdicao");
    const periodoEdicaoInput = getElementSafe("periodoEdicao");
    const comprovanteEdicaoInput = getElementSafe("comprovanteEdicao");

    if (!idEdicaoInput || !nomeEdicaoInput || !tipoEdicaoInput || !horasEdicaoInput || !periodoEdicaoInput || !comprovanteEdicaoInput) {
        showSystemMessage("Elementos do formulário não encontrados", "error");
        return;
    }

    const id = parseInt(idEdicaoInput.value);
    const nome = nomeEdicaoInput.value.trim();
    const tipoNovo = tipoEdicaoInput.value;
    const horasNovas = parseFloat(horasEdicaoInput.value);
    const periodoNovo = periodoEdicaoInput.value.trim();
    const comprovanteFile = comprovanteEdicaoInput.files[0];

    if (!nome || !tipoNovo || isNaN(horasNovas) || horasNovas < 0 || !periodoNovo) {
        showSystemMessage("Preencha todos os campos obrigatórios", "error");
        return;
    }

    // VALIDAÇÃO DO PERÍODO
    if (!validarPeriodo(periodoNovo, currentUserData.matricula)) {
        const anoAtual = new Date().getFullYear();
        const anoIngresso = parseInt(currentUserData.matricula.substring(0, 4), 10);
        showSystemMessage(`Período inválido. Formato esperado: AAAA.S (ex: 2025.1) com ano entre ${anoIngresso}-${anoAtual}`, "error");
        return;
    }

    try {
        const atividadeOriginal = await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao obter atividade");
        });

        if (!atividadeOriginal) {
            showSystemMessage("Atividade não encontrada", "error");
            return;
        }

        const tipoAntigo = atividadeOriginal.tipo;

        // PROCESSAR NOVO COMPROVANTE SE HOUVER
        let novoComprovante = atividadeOriginal.comprovante;
        if (comprovanteFile) {
            novoComprovante = await fileToArrayBuffer(comprovanteFile);
        }

        // Se a atividade já foi avaliada, voltar para status Pendente
        const novoStatus = (atividadeOriginal.status === 'Pendente') ? 'Pendente' : 'Pendente';
        const novasHorasValidadas = 0; // Zerar até nova avaliação

        const atividadeAtualizada = {
            ...atividadeOriginal,
            nome,
            tipo: tipoNovo,
            horasRegistradas: horasNovas,
            horasValidadas: novasHorasValidadas,
            periodo: periodoNovo,
            comprovante: novoComprovante,
            status: novoStatus
        };

        await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readwrite");
            const store = transaction.objectStore("atividades");
            const request = store.put(atividadeAtualizada);

            request.onsuccess = resolve;
            request.onerror = () => reject("Erro ao atualizar atividade");
        });

        showSystemMessage("Atividade atualizada com sucesso! Aguarde reavaliação do coordenador.", "success");
        const form = getElementSafe("formEdicao");
        if (form) form.reset();
        atualizarTabela();
        atualizarResumo();

    } catch (error) {
        showSystemMessage("Erro ao atualizar atividade: " + error, "error");
    }
}

/**
 * Popula os selects de tipo de atividade
 */
function popularSelects() {
    const selects = [
        getElementSafe("tipo"),
        getElementSafe("tipoEdicao")
    ];

    selects.forEach(select => {
        if (select) {
            select.innerHTML = '<option value="">Selecione um tipo</option>';
        }
    });

    const filtroSelect = getElementSafe("filtroTipo");
    if (filtroSelect) {
        filtroSelect.innerHTML = '<option value="Todos">Todos os tipos</option>';
    }

    opcoesAtividades.forEach(opt => {
        selects.forEach(select => {
            if (select) {
                const option = document.createElement("option");
                option.value = opt;
                option.textContent = opt;
                select.appendChild(option);
            }
        });

        if (filtroSelect) {
            const filtroOption = document.createElement("option");
            filtroOption.value = opt;
            filtroOption.textContent = opt;
            filtroSelect.appendChild(filtroOption);
        }
    });

    // Adiciona o select para grupos
    const filtroGrupo = getElementSafe("filtroGrupo");
    if (filtroGrupo) {
        filtroGrupo.innerHTML = '<option value="Todos">Todos os grupos</option>';
        gruposAtividades.forEach(grupo => {
            const option = document.createElement("option");
            option.value = grupo;
            option.textContent = grupo;
            filtroGrupo.appendChild(option);
        });

        // Adiciona o event listener para o filtro de grupo
        filtroGrupo.addEventListener("change", atualizarFiltroTipoPorGrupo);
    }
}

/**
 * Atualiza o filtro de tipos baseado no grupo selecionado
 */
function atualizarFiltroTipoPorGrupo() {
    const grupoSelect = getElementSafe("filtroGrupo");
    const tipoSelect = getElementSafe("filtroTipo");

    if (!grupoSelect || !tipoSelect) return;

    const grupoSelecionado = grupoSelect.value;

    // Salva o tipo selecionado atual (se houver)
    const tipoSelecionado = tipoSelect.value;

    // Limpa o select de tipo
    tipoSelect.innerHTML = '<option value="Todos">Todos os tipos</option>';

    // Se um grupo específico foi selecionado, filtra os tipos
    if (grupoSelecionado !== "Todos") {
        // Obtém os tipos do grupo selecionado
        const tiposDoGrupo = AtividadesPorGrupo[grupoSelecionado] || [];

        // Adiciona cada tipo do grupo ao select
        tiposDoGrupo.forEach(tipo => {
            const option = document.createElement("option");
            option.value = tipo;
            option.textContent = tipo;
            tipoSelect.appendChild(option);
        });
    } else {
        // Se "Todos" foi selecionado, mostra todos os tipos
        opcoesAtividades.forEach(tipo => {
            const option = document.createElement("option");
            option.value = tipo;
            option.textContent = tipo;
            tipoSelect.appendChild(option);
        });
    }

    // Tenta restaurar a seleção anterior, se ainda estiver disponível
    if (tipoSelecionado && Array.from(tipoSelect.options).some(opt => opt.value === tipoSelecionado)) {
        tipoSelect.value = tipoSelecionado;
    }
}

/**
 * Atualiza a tabela de atividades do estudante
 */
function atualizarTabela() {
    const tbody = getElementSafe("tabelaAtividades");
    if (!tbody) return;

    const filtroTipoInput = getElementSafe("filtroTipo");
    const filtroPeriodoInput = getElementSafe("filtroPeriodo");
    const filtroGrupoInput = getElementSafe("filtroGrupo");

    if (!filtroTipoInput || !filtroPeriodoInput || !filtroGrupoInput) return;

    const filtroTipo = filtroTipoInput.value;
    const filtroPeriodo = filtroPeriodoInput.value.trim().toLowerCase();
    const filtroGrupo = filtroGrupoInput.value;

    tbody.innerHTML = "";

    const transaction = db.transaction("atividades", "readonly");
    const store = transaction.objectStore("atividades");
    const request = store.openCursor();

    let index = 1;
    let totalHorasRegistradas = 0;
    let totalHorasValidadas = 0;

    request.onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
            const atividade = cursor.value;

            // Verificar filtro de grupo
            let pertenceAoGrupo = true;
            if (filtroGrupo !== "Todos") {
                const tiposDoGrupo = AtividadesPorGrupo[filtroGrupo];
                pertenceAoGrupo = tiposDoGrupo && tiposDoGrupo.includes(atividade.tipo);
            }

            const aplicarFiltro =
                (filtroTipo === "Todos" || atividade.tipo === filtroTipo) &&
                (filtroPeriodo === "" || atividade.periodo.toLowerCase().includes(filtroPeriodo)) &&
                pertenceAoGrupo &&
                atividade.usuario === currentUser;

            if (aplicarFiltro) {
                const row = document.createElement("tr");

                let statusClass = "";
                let statusText = "";

                if (atividade.status === 'Aprovado') {
                    statusClass = "approved";
                    statusText = "Aprovado";
                } else if (atividade.status === 'Rejeitado') {
                    statusClass = "rejected";
                    statusText = "Rejeitado";
                } else if (atividade.status === 'Pendente') {
                    statusClass = "pending";
                    statusText = "Pendente";
                } else {
                    statusClass = "pending";
                    statusText = "Pendente";
                }

                row.innerHTML = `
                    <td>${atividade.nome}</td>
                    <td>${atividade.tipo}</td>
                    <td>${atividade.horasRegistradas}</td>
                    <td>${atividade.horasValidadas}</td>
                    <td>${atividade.periodo}</td>
                    <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                    <td style="text-align: center; vertical-align: middle;">
                        <button class="action-btn download" onclick="baixarComprovante(${atividade.id})" ${!atividade.comprovante ? 'disabled' : ''}>
                            <i class="fas fa-download"></i>
                        </button>
                    </td>
                    <td style="vertical-align: middle;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <button class="action-btn edit" onclick="carregarEdicao(${atividade.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="action-btn delete" onclick="confirmarExclusao(${atividade.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                `;

                tbody.appendChild(row);
                index++;
                totalHorasRegistradas += atividade.horasRegistradas;
                totalHorasValidadas += atividade.horasValidadas;
            }

            cursor.continue();
        } else {
            const totalHorasRegistradasElem = getElementSafe("totalHorasRegistradas");
            const totalHorasValidadasElem = getElementSafe("totalHorasValidadas");

            if (totalHorasRegistradasElem) totalHorasRegistradasElem.textContent = totalHorasRegistradas;
            if (totalHorasValidadasElem) totalHorasValidadasElem.textContent = totalHorasValidadas;
        }
    };

    request.onerror = function () {
        showSystemMessage("Erro ao carregar atividades", "error");
    };
}

/**
 * Atualiza o resumo de horas do estudante
 */
async function atualizarResumo() {
    let totalHorasRegistradas = 0;
    let totalHorasValidadas = 0;

    const transaction = db.transaction("atividades", "readonly");
    const store = transaction.objectStore("atividades");
    const request = store.openCursor();

    request.onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
            const atividade = cursor.value;
            if (atividade.usuario === currentUser) {
                totalHorasRegistradas += atividade.horasRegistradas;
                totalHorasValidadas += atividade.horasValidadas;
            }
            cursor.continue();
        } else {
            const progressoTotal = Math.min(100, Math.round((totalHorasValidadas / HORAS_NECESSARIAS) * 100));

            const resumoHorasRegistradas = getElementSafe("resumoHorasRegistradas");
            const resumoHorasValidadas = getElementSafe("resumoHorasValidadas");
            const totalHorasRegistradasElem = getElementSafe("totalHorasRegistradas");
            const totalHorasValidadasElem = getElementSafe("totalHorasValidadas");
            const progressoTotalPercent = getElementSafe("progressoTotalPercent");
            const progressoTotalFill = getElementSafe("progressoTotalFill");
            const horasValidadasPercent = getElementSafe("horasValidadasPercent");
            const horasValidadasFill = getElementSafe("horasValidadasFill");

            if (resumoHorasRegistradas) resumoHorasRegistradas.textContent = totalHorasRegistradas;
            if (resumoHorasValidadas) resumoHorasValidadas.textContent = totalHorasValidadas;
            if (totalHorasRegistradasElem) totalHorasRegistradasElem.textContent = totalHorasRegistradas;
            if (totalHorasValidadasElem) totalHorasValidadasElem.textContent = totalHorasValidadas;
            if (progressoTotalPercent) progressoTotalPercent.textContent = `${progressoTotal}%`;
            if (progressoTotalFill) progressoTotalFill.style.width = `${progressoTotal}%`;
            if (horasValidadasPercent) horasValidadasPercent.textContent = `${totalHorasValidadas}/${HORAS_NECESSARIAS}`;
            if (horasValidadasFill) horasValidadasFill.style.width = `${progressoTotal}%`;

            if (document.getElementById("resumo").classList.contains("active")) {
                atualizarGraficoResumo();
            }
        }
    };
}

/**
 * Atualiza o gráfico de resumo de horas
 */
async function atualizarGraficoResumo() {
    const ctx = document.getElementById('hoursChart');
    if (!ctx) return;

    const ctx2d = ctx.getContext('2d');
    if (!ctx2d) return;

    if (horasChart) {
        horasChart.destroy();
    }

    // Inicializa horas por grupo
    const horasPorGrupo = {};
    gruposAtividades.forEach(grupo => {
        horasPorGrupo[grupo] = 0;
    });

    const transaction = db.transaction("atividades", "readonly");
    const store = transaction.objectStore("atividades");
    const request = store.openCursor();

    request.onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
            const atividade = cursor.value;
            if (atividade.usuario === currentUser) {
                for (const grupo in AtividadesPorGrupo) {
                    if (AtividadesPorGrupo[grupo].includes(atividade.tipo)) {
                        horasPorGrupo[grupo] += Number(atividade.horasValidadas || 0);
                        break;
                    }
                }
            }
            cursor.continue();
        } else {
            const totalHorasValidadas = Object.values(horasPorGrupo).reduce((a, b) => a + b, 0);
            const horasRestantes = Math.max(0, HORAS_NECESSARIAS - totalHorasValidadas);

            const labels = [];
            const data = [];

            // Adiciona grupos com horas (>0)
            for (const grupo in horasPorGrupo) {
                if (horasPorGrupo[grupo] > 0) {
                    labels.push(grupo.split(' - ')[0]);
                    data.push(horasPorGrupo[grupo]);
                }
            }

            // Sempre inclui a fatia "Horas Restantes" (pode ser 0)
            labels.push('Horas Restantes');
            data.push(horasRestantes);

            // Cores base para os grupos; última cor será usada para "Horas Restantes"
            const baseColors = [
                '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b', '#858796'
            ];
            const backgroundColors = [];
            for (let i = 0; i < data.length; i++) {
                if (i < baseColors.length) {
                    backgroundColors.push(baseColors[i]);
                } else {
                    backgroundColors.push('#d1d3e2');
                }
            }
            // Forçar cor cinza para 'Horas Restantes' (último elemento)
            backgroundColors[backgroundColors.length - 1] = '#e9ecef';

            horasChart = new Chart(ctx2d, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: backgroundColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { font: { size: 10 } } },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    return `${label}: ${value} horas`;
                                }
                            }
                        }
                    }
                }
            });
        }
    };
}

/**
 * Limpa o formulário de cadastro
 */
function limparCadastro() {
    const form = getElementSafe("formCadastro");
    if (form) form.reset();
}

/**
 * Manipula o submit do formulário de filtro
 * @param {Event} e Evento de submit
 */
function handleFiltroSubmit(e) {
    e.preventDefault();
    atualizarTabela();
}

/**
 * Limpa os filtros aplicados
 */
function limparFiltros() {
    const filtroGrupo = getElementSafe("filtroGrupo");
    const filtroPeriodo = getElementSafe("filtroPeriodo");

    if (filtroGrupo) filtroGrupo.value = "Todos";
    if (filtroPeriodo) filtroPeriodo.value = "";

    // Atualiza o select de tipos para mostrar todos
    atualizarFiltroTipoPorGrupo();

    atualizarTabela();
}

/**
 * Baixa o comprovante de uma atividade
 * @param {number} id ID da atividade
 */
async function baixarComprovante(id) {
    try {
        const atividade = await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao buscar atividade");
        });

        if (atividade && atividade.comprovante) {
            const blob = new Blob([atividade.comprovante], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `comprovante_${id}.pdf`;
            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);
        } else {
            showSystemMessage("Nenhum comprovante disponível para esta atividade", "info");
        }
    } catch (error) {
        showSystemMessage("Erro ao baixar comprovante: " + error, "error");
    }
}

/**
 * Exporta os dados do estudante para um arquivo ZIP
 */
async function exportarDados() {
    try {
        // Primeiro, buscar os dados do estudante
        const estudante = await new Promise((resolve, reject) => {
            const transaction = db.transaction(["estudantes"], "readonly");
            const store = transaction.objectStore("estudantes");
            const request = store.get(currentUser);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao buscar dados do estudante");
        });

        if (!estudante) {
            showSystemMessage("Dados do estudante não encontrados", "error");
            return;
        }

        const atividades = await new Promise((resolve) => {
            const atividadesDoUsuario = [];

            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const index = store.index("usuario");
            const request = index.openCursor(IDBKeyRange.only(currentUser));

            request.onsuccess = (e) => {
                const cursor = e.target.result;
                if (cursor) {
                    atividadesDoUsuario.push(cursor.value);
                    cursor.continue();
                } else {
                    resolve(atividadesDoUsuario);
                }
            };
        });

        const zip = new JSZip();

        // 1. Criar arquivo CSV com proteção de curso
        let csvContent = `Curso�${CURSO_DE_GRADUACAO}\n`; // Linha de proteção
        // Adicionar linha com dados do usuário
        csvContent += `Dados do usuário�${estudante.nome}�${estudante.usuario}�${estudante.matricula}�${estudante.senha}\n`;
        csvContent += "ID�Nome�Tipo�Horas Registradas�Horas Validadas�Período�Status�\n";
        atividades.forEach(atividade => {
            csvContent += `${atividade.id}�${atividade.nome}�${atividade.tipo}�${atividade.horasRegistradas}�${atividade.horasValidadas}�${atividade.periodo}�${atividade.status}\n`;
        });
        zip.file("atividades.csv", csvContent);

        // 2. Adicionar comprovantes PDF
        const comprovantesFolder = zip.folder("comprovantes");
        for (const atividade of atividades) {
            if (atividade.comprovante) {
                comprovantesFolder.file(`comprovante_${atividade.id}.pdf`, atividade.comprovante);
            }
        }

        // 3. Gerar e baixar ZIP
        const content = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(content);
        const a = document.createElement("a");
        a.href = url;
        a.download = `atividades_${currentUser}_${new Date().toISOString().slice(0, 10)}.zip`;
        document.body.appendChild(a);
        a.click();

        // Limpeza
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);

        showSystemMessage("Dados exportados com sucesso!", "success");
    } catch (error) {
        showSystemMessage("Erro na exportação: " + error.message, "error");
    }
}

/**
 * Importa dados de um arquivo ZIP
 */
async function importarDados() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.zip';
    fileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const zip = new JSZip();
            const content = await zip.loadAsync(file);
            // 1. Processar CSV e verificar compatibilidade do curso
            const csvFiles = Object.values(content.files).filter(f => f.name.endsWith('.csv'));
            if (csvFiles.length === 0) throw new Error("Arquivo CSV não encontrado no ZIP");
            const csvFile = csvFiles[0];
            const csvContent = await csvFile.async('string');
            const linhas = csvContent.split('\n').filter(linha => linha.trim() !== '');
            // Verificação de compatibilidade do curso
            if (linhas.length === 0 || !linhas[0].startsWith('Curso�')) {
                throw new Error("Arquivo inválido: Formato não reconhecido");
            }
            const cursoImportado = linhas[0].split('�')[1];
            if (cursoImportado !== CURSO_DE_GRADUACAO) {
                throw new Error(`Arquivo incompatível! Este arquivo pertence ao curso: ${cursoImportado}. O sistema atual é configurado para: ${CURSO_DE_GRADUACAO}.`);
            }

            // Obter matrícula do estudante logado
            const matriculaEstudante = currentUserData.matricula;

            // 2. Mapear comprovantes
            const comprovantes = {};
            for (const relativePath in content.files) {
                if (relativePath.startsWith('comprovantes/') && relativePath.endsWith('.pdf')) {
                    const match = relativePath.match(/comprovante_(\d+)\.pdf$/);
                    if (match) {
                        const id = match[1];
                        comprovantes[id] = await content.files[relativePath].async('arraybuffer');
                    }
                }
            }
            // 3. Importar atividades (ignorando a primeira linha do curso)
            let importadas = 0;
            for (let i = 3; i < linhas.length; i++) {
                try {
                    const campos = linhas[i].split('�');
                    if (campos.length < 7) continue;

                    // VALIDAÇÃO DO PERÍODO DA ATIVIDADE (igual à do coordenador)
                    const periodoAtividade = campos[5];
                    if (!validarPeriodo(periodoAtividade, matriculaEstudante)) {
                        console.warn(`Atividade na linha ${i} ignorada: período inválido`);
                        continue; // Pula esta atividade, mas continua com as demais
                    }

                    const novaAtividade = {
                        usuario: currentUser,
                        nome: campos[1],
                        tipo: campos[2],
                        horasRegistradas: parseFloat(campos[3]),
                        horasValidadas: parseFloat(0),
                        periodo: periodoAtividade,
                        status: 'Pendent',
                        comprovante: comprovantes[campos[0]] || null
                    };
                    await new Promise((resolve, reject) => {
                        const transaction = db.transaction("atividades", "readwrite");
                        const store = transaction.objectStore("atividades");
                        const request = store.add(novaAtividade);
                        request.onsuccess = resolve;
                        request.onerror = () => reject("Erro ao salvar atividade");
                    });
                    importadas++;
                } catch (error) {
                    console.error(`Erro na linha ${i}:`, error);
                }
            }
            // 4. Atualizar UI
            recalcularHorasGlobal();
            atualizarTabela();
            atualizarResumo();
            showSystemMessage(`${importadas} atividades importadas com sucesso!`, "success");
        } catch (error) {
            // Tratamento especial para erro de compatibilidade
            if (error.message.includes("incompatível")) {
                showSystemMessage(error.message, "error", 10000); // Mostra por 10 segundos
            } else {
                showSystemMessage("Erro na importação: " + error.message, "error");
            }
        }
    };
    fileInput.click();
}

/**
 * Gera um relatório em PDF das atividades
 */
async function handleImprimir() {
    const btn = getElementSafe("imprimirBtn");
    if (!btn) return;

    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando PDF...';
    btn.disabled = true;

    try {
        const nomeAluno = currentUser;
        const matricula = await obterMatriculaAluno();
        const atividades = await obterAtividadesParaRelatorio();

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Configurações de estilo
        const primaryColor = [13, 27, 71];
        const secondaryColor = [243, 115, 33];

        // Cabeçalho institucional
        doc.setFillColor(...primaryColor);
        doc.rect(0, 0, 210, 30, 'F');
        doc.setFontSize(16);
        doc.setTextColor(255, 255, 255);
        doc.text("UEMA", 20, 20);
        doc.setFontSize(10);
        doc.text("Universidade Estadual do Maranhão", 105, 10, null, null, 'center');
        doc.text("Centro de Ciências Tecnológicas - CCT", 105, 15, null, null, 'center');
        doc.text("Curso Engenharia de Produção Bacharelado", 105, 20, null, null, 'center');
        doc.text("Sistema Integrado de Gestão de Atividades Acadêmicas", 105, 30, null, null, 'center');

        // Informações do aluno
        const yStart = 40;
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`Aluno: ${nomeAluno}`, 20, yStart);
        doc.text(`Matrícula: ${matricula}`, 20, yStart + 7);
        doc.text(`Data de emissão: ${new Date().toLocaleDateString('pt-BR')}`, 120, yStart + 7);

        // Título do relatório
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("RELATÓRIO DE ATIVIDADES COMPLEMENTARES", 105, yStart + 20, null, null, 'center');

        // Texto introdutório
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        const textoIntro = [
            "Declaro para os devidos fins que o(a) aluno(a) acima identificado(a) realizou as atividades",
            "complementares relacionadas abaixo durante o curso de Engenharia de Produção, conforme registro",
            "no sistema de gestão desenvolvido por Diego Bezerra Reinaldo e em atendimento à Resolução CEPE 037/2024."
        ];

        textoIntro.forEach((linha, i) => {
            doc.text(linha, 20, yStart + 35 + (i * 6));
        });

        // Preparar dados da tabela
        const headers = [["Nome da Atividade", "Tipo", "Horas Registradas", "Horas Validadas", "Período", "Status"]];
        const data = atividades.map(atividade => [
            atividade.nome,
            atividade.tipo,
            atividade.horasRegistradas.toString(),
            atividade.horasValidadas.toString(),
            atividade.periodo,
            atividade.status
        ]);

        // Gerar tabela estilizada
        doc.autoTable({
            startY: yStart + 60,
            head: headers,
            body: data,
            theme: 'grid',
            styles: {
                fontSize: 9,
                cellPadding: 2,
                textColor: [0, 0, 0],
                font: 'helvetica',
                lineWidth: 0.1
            },
            headStyles: {
                fillColor: primaryColor,
                textColor: [255, 255, 255],
                fontStyle: 'bold',
                halign: 'center',
                lineWidth: 0.1
            },
            bodyStyles: {
                lineWidth: 0.1
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245]
            },
            columnStyles: {
                0: { cellWidth: 55, halign: 'left' },
                1: { cellWidth: 45, halign: 'left' },
                2: { halign: 'center', cellWidth: 20 },
                3: { halign: 'center', cellWidth: 20 },
                4: { halign: 'center', cellWidth: 20 },
                5: { halign: 'center', cellWidth: 20 }
            },
            margin: { left: 15, right: 15 }
        });

        const finalY = doc.autoTable.previous.finalY;

        // Totais
        const totalHorasRegistradas = atividades.reduce((sum, a) => sum + a.horasRegistradas, 0);
        const totalHorasValidadas = atividades.reduce((sum, a) => sum + a.horasValidadas, 0);
        const progresso = (totalHorasValidadas / 225) * 100;

        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text("RESUMO DE HORAS", 20, finalY + 15);

        doc.setFont("helvetica", "normal");
        doc.text(`Total de Horas Registradas: ${totalHorasRegistradas}`, 30, finalY + 25);
        doc.text(`Total de Horas Validadas: ${totalHorasValidadas}`, 30, finalY + 32);
        doc.text(`Horas Necessárias: 225`, 30, finalY + 39);

        // Barra de progresso
        const barWidth = 80;
        const barHeight = 8;
        const barX = 130;
        const barY = finalY + 25;

        // Fundo da barra
        doc.setFillColor(200, 200, 200);
        doc.rect(barX, barY, barWidth, barHeight, 'F');

        // Barra de progresso
        doc.setFillColor(...secondaryColor);
        doc.rect(barX, barY, barWidth * (progresso / 100), barHeight, 'F');

        // Texto da barra
        doc.setFontSize(9);
        doc.text(`Progresso: ${progresso.toFixed(1)}%`, barX, barY - 2);
        doc.text(`${totalHorasValidadas} / 225 horas`, barX + barWidth + 5, barY + barHeight / 2 + 1);

        // Rodapé institucional
        doc.setDrawColor(...primaryColor);
        doc.setLineWidth(0.5);
        const footerY = 285;
        doc.line(15, footerY, 195, footerY);

        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text("Centro de Ciências Tecnológicas - CCT/UEMA, Cidade Universitária Paulo VI, São Luís - MA", 105, footerY + 5, null, null, 'center');
        doc.text("Contato: diego.dbr811@gmail.com | Instagram: @eaidih", 105, footerY + 10, null, null, 'center');
        doc.text("SIGUEMA Acadêmico - Sistema Integrado de Gestão de Atividades Acadêmicas", 105, footerY + 15, null, null, 'center');

        // Salvar PDF
        doc.save(`Relatorio_Atividades_Complementares_${nomeAluno.replace(/\s+/g, '_')}.pdf`);

    } catch (error) {
        showSystemMessage("Erro ao gerar relatório: " + error.message, "error");
        console.error(error);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

/**
 * Obtém a matrícula do aluno logado
 * @returns {Promise} Promise com a matrícula
 */
async function obterMatriculaAluno() {
    return new Promise((resolve, reject) => {
        if (currentUserType === "student") {
            const transaction = db.transaction("estudantes", "readonly");
            const store = transaction.objectStore("estudantes");
            const request = store.get(currentUser);

            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result.matricula);
                } else {
                    reject(new Error("Estudante não encontrado"));
                }
            };

            request.onerror = () => reject(new Error("Erro ao acessar banco de dados"));
        } else {
            resolve(currentUserData.matricula || "N/A");
        }
    });
}

/**
 * Obtém atividades para relatório
 * @returns {Promise} Promise com as atividades formatadas
 */
async function obterAtividadesParaRelatorio() {
    return new Promise((resolve, reject) => {
        const atividades = [];

        const transaction = db.transaction("atividades", "readonly");
        const store = transaction.objectStore("atividades");
        const index = store.index("usuario");
        const request = index.openCursor(IDBKeyRange.only(currentUser));

        request.onsuccess = function (e) {
            const cursor = e.target.result;
            if (cursor) {
                atividades.push({
                    nome: cursor.value.nome,
                    tipo: cursor.value.tipo,
                    horasRegistradas: cursor.value.horasRegistradas,
                    horasValidadas: cursor.value.horasValidadas,
                    periodo: cursor.value.periodo,
                    status: cursor.value.status
                });
                cursor.continue();
            } else {
                atividades.sort((a, b) => b.periodo.localeCompare(a.periodo));
                resolve(atividades);
            }
        };

        request.onerror = () => reject(new Error("Erro ao carregar atividades"));
    });
}

/**
 * Carrega os dados de uma atividade para edição
 * @param {number} id ID da atividade
 */
function carregarEdicao(id) {
    const tab = document.querySelector('[data-tab="editar"]');
    if (tab) {
        tab.click();
    }

    const transaction = db.transaction("atividades", "readonly");
    const store = transaction.objectStore("atividades");
    const request = store.get(id);

    request.onsuccess = function (e) {
        const atividade = e.target.result;

        if (atividade) {
            const idEdicao = getElementSafe("idEdicao");
            const nomeEdicao = getElementSafe("nomeEdicao");
            const tipoEdicao = getElementSafe("tipoEdicao");
            const horasEdicao = getElementSafe("horasEdicao");
            const periodoEdicao = getElementSafe("periodoEdicao");

            if (idEdicao) idEdicao.value = atividade.id;
            if (nomeEdicao) nomeEdicao.value = atividade.nome;
            if (tipoEdicao) tipoEdicao.value = atividade.tipo;
            if (horasEdicao) horasEdicao.value = atividade.horasRegistradas;
            if (periodoEdicao) periodoEdicao.value = atividade.periodo;

            // Mostrar info do comprovante atual
            const comprovanteInfo = getElementSafe("comprovanteAtualInfo");
            if (comprovanteInfo) {
                if (atividade.comprovante) {
                    const size = atividade.comprovante.byteLength;
                    comprovanteInfo.innerHTML = `
                        Comprovante atual: 
                        <a href="#" onclick="baixarComprovante(${atividade.id}); return false;">
                            comprovante_${atividade.id}.pdf
                        </a> 
                        (${formatFileSize(size)})
                    `;
                } else {
                    comprovanteInfo.textContent = "Nenhum comprovante cadastrado";
                }
            }
        }
    };

    request.onerror = function () {
        showSystemMessage("Erro ao carregar atividade para edição", "error");
    };
}

/**
 * Formata o tamanho de arquivo para leitura humana
 * @param {number} bytes Tamanho em bytes
 * @returns {string} Tamanho formatado
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Confirma a exclusão de uma atividade
 * @param {number} id ID da atividade
 */
function confirmarExclusao(id) {
    if (confirm("Tem certeza que deseja excluir esta atividade?")) {
        deletarAtividade(id);
    }
}

/**
 * Exclui uma atividade
 * @param {number} id ID da atividade
 */
async function deletarAtividade(id) {
    let idParaExcluir = id;

    if (!idParaExcluir && idParaExcluir !== 0) {
        const idInput = getElementSafe("idEdicao");
        if (idInput && idInput.value) {
            idParaExcluir = parseInt(idInput.value);
        }
    }

    if (idParaExcluir === undefined || idParaExcluir === null || isNaN(idParaExcluir)) {
        showSystemMessage("ID inválido para exclusão. Selecione uma atividade primeiro.", "error");
        return;
    }

    try {
        const atividade = await new Promise((resolve, reject) => {
            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.get(idParaExcluir);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao buscar atividade");
        });

        if (!atividade) {
            showSystemMessage("Atividade não encontrada no banco de dados", "error");
            return;
        }

        const tipo = atividade.tipo;

        await new Promise(
            (resolve, reject) => {
                const transaction = db.transaction("atividades", "readwrite");
                const store = transaction.objectStore("atividades");
                const request = store.delete(idParaExcluir);

                request.onsuccess = resolve;
                request.onerror = (e) => {
                    console.error("Erro na transação de exclusão:", e);
                    reject("Erro ao excluir atividade");
                };
            });

        const grupo = obterGrupoPorTipo(tipo);
        if (grupo) {
            await recalcularHorasGrupo(grupo);
        }

        showSystemMessage("Atividade excluída com sucesso!", "success");
        const form = getElementSafe("formEdicao");
        if (form) form.reset();
        atualizarTabela();
        atualizarResumo();

    } catch (error) {
        showSystemMessage(`Erro ao excluir atividade: ${error}`, "error");
    }
}

/**
 * Recalcula horas para um grupo específico
 * @param {string} grupo Grupo de atividades
 * @returns {Promise} Promise indicando sucesso ou falha
 */
async function recalcularHorasGrupo(grupo) {
    try {
        const atividades = await new Promise((resolve, reject) => {
            const atividadesDoGrupo = [];

            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.openCursor();

            request.onsuccess = function (e) {
                const cursor = e.target.result;
                if (cursor) {
                    const atividade = cursor.value;
                    const atividadeGrupo = obterGrupoPorTipo(atividade.tipo);

                    if (atividadeGrupo === grupo && atividade.usuario === currentUser) {
                        atividadesDoGrupo.push(atividade);
                    }
                    cursor.continue();
                } else {
                    resolve(atividadesDoGrupo);
                }
            };

            request.onerror = (e) => {
                reject("Erro ao buscar atividades do grupo");
            };
        });

        atividades.sort((a, b) => a.id - b.id);

        const limiteGrupo = maxHorasGruposAtividades[grupo] || 0;
        let acumuladoGrupo = 0;
        const horasPorPeriodoPorTipo = {};

        const atualizacoes = [];

        for (const atividade of atividades) {
            if (atividade.comprovante != null) {
                const tipo = atividade.tipo;
                const configTipo = configAtividades[tipo];

                // Calcular disponibilidade do grupo
                const disponivelGrupo = Math.max(0, limiteGrupo - acumuladoGrupo);

                // Calcular disponibilidade global do tipo
                const horasCadastradasGlobalTipo = await consultarHorasCadastradasGlobal(tipo, atividade.id, atividade.usuario);
                const disponivelGlobalTipo = Math.max(0, configTipo.maxHoras - horasCadastradasGlobalTipo);

                // Calcular disponibilidade específica
                let disponivelEspecifico;
                if (configTipo.restricao === 'periodo') {
                    if (!horasPorPeriodoPorTipo[tipo]) {
                        horasPorPeriodoPorTipo[tipo] = {};
                    }
                    if (!horasPorPeriodoPorTipo[tipo][atividade.periodo]) {
                        horasPorPeriodoPorTipo[tipo][atividade.periodo] = 0;
                    }

                    disponivelEspecifico = Math.max(
                        0,
                        configTipo.maxHorasValidadas - horasPorPeriodoPorTipo[tipo][atividade.periodo]
                    );
                } else {
                    disponivelEspecifico = configTipo.maxHorasValidadas;
                }

                const novasHorasValidadas = Math.min(
                    atividade.horasRegistradas,
                    disponivelGrupo,
                    disponivelGlobalTipo,
                    disponivelEspecifico
                );

                acumuladoGrupo += novasHorasValidadas;
                if (configTipo.restricao === 'periodo') {
                    horasPorPeriodoPorTipo[tipo][atividade.periodo] += novasHorasValidadas;
                }

                const novoStatus = novasHorasValidadas > 0 ? 'Aprovado' : 'Rejeitado';

                if (atividade.horasValidadas !== novasHorasValidadas || atividade.status !== novoStatus) {
                    const atividadeAtualizada = {
                        ...atividade,
                        horasValidadas: novasHorasValidadas,
                        status: novoStatus
                    };
                    atualizacoes.push(atividadeAtualizada);
                }
            } else {
                if (atividade.horasValidadas !== 0 || atividade.status !== 'Pendente') {
                    const atividadeAtualizada = {
                        ...atividade,
                        horasValidadas: 0,
                        status: 'Pendente'
                    };
                    atualizacoes.push(atividadeAtualizada);
                }
            }
        }

        if (atualizacoes.length > 0) {
            await new Promise((resolve, reject) => {
                const transaction = db.transaction("atividades", "readwrite");
                const store = transaction.objectStore("atividades");

                transaction.oncomplete = resolve;
                transaction.onerror = (e) => {
                    reject("Erro ao atualizar atividades do grupo");
                };

                for (const atividade of atualizacoes) {
                    store.put(atividade);
                }
            });
        }

        return true;

    } catch (error) {
        console.error("Erro no recálculo do grupo", grupo, ":", error);
        throw error;
    }
}

/**
 * Recalcula horas globalmente para todas as atividades
 */
async function recalcularHorasGlobal() {
    try {
        const tiposCadastrados = new Set();
        const atividades = await new Promise((resolve, reject) => {
            const todasAtividades = [];

            const transaction = db.transaction("atividades", "readonly");
            const store = transaction.objectStore("atividades");
            const request = store.openCursor();

            request.onsuccess = function (e) {
                const cursor = e.target.result;
                if (cursor) {
                    if (cursor.value.usuario === currentUser) {
                        tiposCadastrados.add(cursor.value.tipo);
                        todasAtividades.push(cursor.value);
                    }
                    cursor.continue();
                } else {
                    resolve(todasAtividades);
                }
            };

            request.onerror = () => reject("Erro ao coletar tipos de atividades");
        });

        for (const tipo of tiposCadastrados) {
            if (!opcoesAtividades.includes(tipo)) {
                for (const atividade of atividades.filter(a => a.tipo === tipo)) {
                    const atividadeAtualizada = {
                        ...atividade,
                        horasValidadas: 0,
                        status: 'Rejeitado'
                    };

                    await new Promise((resolve) => {
                        const transaction = db.transaction("atividades", "readwrite");
                        const store = transaction.objectStore("atividades");
                        store.put(atividadeAtualizada);
                        transaction.oncomplete = resolve;
                    });
                }
            }
        }

        for (const grupo of gruposAtividades) {
            await recalcularHorasGrupo(grupo);
        }

        atualizarTabela();
        atualizarResumo();
    } catch (error) {
        console.error("Erro no recálculo global:", error);
    }
}

/**
 * Atualiza um estudante específico na tabela de turma
 * @param {string} usuarioEstudante Usuário do estudante
 */
async function atualizarEstudanteNaTurma(usuarioEstudante) {
    const tabela = getElementSafe("tabelaTurma");
    if (!tabela) return;

    try {
        // Buscar o estudante
        const estudante = await new Promise((resolve, reject) => {
            const transaction = db.transaction(["estudantes"], "readonly");
            const store = transaction.objectStore("estudantes");
            const request = store.get(usuarioEstudante);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Erro ao buscar estudante");
        });

        if (!estudante) return;

        // Buscar atividades do estudante
        const atividades = await getAtividadesPorUsuario(usuarioEstudante);
        let horasRegistradas = 0;
        let horasValidadas = 0;

        atividades.forEach(atividade => {
            horasRegistradas += atividade.horasRegistradas;
            if (atividade.status === 'Aprovado') {
                horasValidadas += atividade.horasValidadas;
            }
        });

        const progresso = Math.min(100, (horasValidadas / HORAS_NECESSARIAS) * 100);

        // Procurar a linha do estudante na tabela
        const linhas = tabela.getElementsByTagName("tr");
        let linhaEncontrada = null;

        for (let i = 0; i < linhas.length; i++) {
            const cells = linhas[i].getElementsByTagName("td");
            if (cells.length > 0 && cells[0].textContent === estudante.nome) {
                linhaEncontrada = linhas[i];
                break;
            }
        }

        // Se encontrou a linha, atualizar, senão adicionar nova linha
        if (linhaEncontrada) {
            linhaEncontrada.cells[2].textContent = horasRegistradas.toFixed(1);
            linhaEncontrada.cells[3].textContent = horasValidadas.toFixed(1);
            linhaEncontrada.cells[4].innerHTML = `
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${progresso}%"></div>
                </div>
                <small>${progresso.toFixed(1)}%</small>
            `;
        } else {
            // Adicionar nova linha se o estudante não estava na tabela
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${estudante.nome}</td>
                <td>${estudante.matricula}</td>
                <td>${horasRegistradas.toFixed(1)}</td>
                <td>${horasValidadas.toFixed(1)}</td>
                <td>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${progresso}%"></div>
                    </div>
                    <small>${progresso.toFixed(1)}%</small>
                </td>
                <td>
                    <button class="btn-icon btn-view" onclick="visualizarAtividades('${estudante.usuario}')">
                        <i class="fas fa-eye"></i> Acessar Atividades
                    </button>
                </td>
            `;
            tabela.appendChild(row);
        }

        // Recalcular e atualizar o KPI do coordenador
        await updateCoordinatorKPI(totalHorasValidadas);

    } catch (error) {
        console.error("Erro ao atualizar estudante na turma:", error);
    }
}

/**
 * Atualiza a tabela de turma do coordenador
 */
async function atualizarTurma() {
    const tabela = getElementSafe("tabelaTurma");
    if (!tabela) return;

    try {
        const estudantes = await getAllFromStore("estudantes");
        // Filtrar apenas estudantes do coordenador logado
        const estudantesDoCoordenador = estudantes.filter(estudante => estudante.coordenador === currentUser);

        // Limpar tabela completamente antes de popular
        tabela.innerHTML = "";

        if (estudantesDoCoordenador.length === 0) {
            tabela.innerHTML = '<tr><td colspan="6" style="text-align: center;">Nenhum estudante cadastrado.</td></tr>';

            // Atualizar o KPI do coordenador para 0%
            updateCoordinatorKPI(0);
            return;
        }

        let totalHorasValidadasTurma = 0;
        let totalEstudantesComHoras = 0;

        // Para cada estudante, calcular totais de horas
        for (const estudante of estudantesDoCoordenador) {
            const atividades = await getAtividadesPorUsuario(estudante.usuario);
            let horasRegistradas = 0;
            let horasValidadas = 0;

            atividades.forEach(atividade => {
                horasRegistradas += atividade.horasRegistradas;
                if (atividade.status === 'Aprovado') {
                    horasValidadas += atividade.horasValidadas;
                }
            });

            // Acumular totais para o KPI
            totalHorasValidadasTurma += horasValidadas;
            if (horasValidadas > 0) totalEstudantesComHoras++;

            const progresso = Math.min(100, (horasValidadas / HORAS_NECESSARIAS) * 100);

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${estudante.nome}</td>
                <td>${estudante.matricula}</td>
                <td>${horasRegistradas.toFixed(1)}</td>
                <td>${horasValidadas.toFixed(1)}</td>
                <td>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${progresso}%"></div>
                    </div>
                    <small>${progresso.toFixed(1)}%</small>
                </td>
                <td>
                    <button class="btn-icon btn-view" onclick="visualizarAtividades('${estudante.usuario}')">
                        <i class="fas fa-eye"></i> Acessar Atividades
                    </button>
                </td>
            `;

            tabela.appendChild(row);
        }

        // Calcular e atualizar o KPI do coordenador (média de progresso da turma)
        const mediaProgressoTurma = estudantesDoCoordenador.length > 0 ?
            (totalHorasValidadasTurma / (HORAS_NECESSARIAS * estudantesDoCoordenador.length)) * 100 : 0;

        updateCoordinatorKPI(mediaProgressoTurma);

    } catch (error) {
        console.error("Erro ao atualizar turma:", error);
        showSystemMessage("Erro ao atualizar turma", "error");
    }
}

/**
 * Atualiza o KPI do coordenador com o progresso médio da turma
 */
async function atualizarKpiCoordenador() {
    try {
        const estudantes = await getAllFromStore("estudantes");
        const estudantesDoCoordenador = estudantes.filter(estudante => estudante.coordenador === currentUser);
        let totalHorasValidadas = 0;

        for (const estudante of estudantesDoCoordenador) {
            const atividades = await getAtividadesPorUsuario(estudante.usuario);
            totalHorasValidadas += atividades.reduce((total, atividade) => total + (atividade.status === 'Aprovado' ? atividade.horasValidadas : 0), 0);
        }

        updateCoordinatorKPI(totalHorasValidadas);
    } catch (error) {
        console.error("Erro ao atualizar KPI do coordenador:", error);
    }
}

/**
 * Volta para a visualização de turma
 */
function voltarParaTurma() {
    const tab = document.querySelector('[data-tab="visualizar-turma"]');
    if (tab) {
        tab.click();
    }
}

/**
 * Mostra informações sobre o sistema
 */
function mostrarSobre() {
    alert(`SIGACC - Sistema Integrado de Gestão de Atividades Complementares Curriculares - Versão 1.0\n\nDesenvolvido por Diego Bezerra Reinaldo para auxiliar os estudantes do curso ${CURSO_DE_GRADUACAO}, no gerenciamento de atividades complementares.\n\nPara esclarecimentos de dúvidas ou recuperação de login e senhas, entrar em contato com os através dos contatos:\n\nEmail: diego.dbr811@gmail.com\nInstagram: @eaidih\nCentro de Ciências Tecnológicas - CCT/UEMA, Cidade Universitária Paulo VI.`);
}

// =============================================
// FECHAR MODAIS AO CLICAR FORA DELES
// =============================================
window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});