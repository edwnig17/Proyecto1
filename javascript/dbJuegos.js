const juegos = [
    {   id:1,
        imagen: "halo.jpg",
        nombre: "Halo Infinite",
        precio: "$35.00",
        genero: "Aventura"
    },

    {   id:2,
        imagen: "forza.jpg",
        nombre: "Forza Horizon 5",
        precio: "$80.99",
        genero: "Carreras"
    },

    {
        id:3,
        imagen: "odisey.jpg",
        nombre: "Assassin's Creed Odisey",
        precio: "$120.00",
        genero: "Aventura"
    },

    {   id:4,
        imagen: "AC KINGDOM PREORDER_STANDARD EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.jpg",
        nombre: "Assassin's Creed Vallhalla",
        precio: "$134.00",
        genero: "Aventura"
    },

    {   id:5,
        imagen: "riders.jpg",
        nombre: "Riders Republic",
        precio: "$75.99",
        genero: "Carreras"
    },

    {   id:6,
        imagen:"WatchDogs_Legion_Store_Portrait_1200x1600-1200x1600-a6b2d4cce489aeeb87bad4a6db168bed.jpg",
        nombre: "Watch Dogs: Legion",
        precio: "$120.00",
        genero: "Aventura"

    },

    {   id:7,
        imagen: "pcBuild.jpg",
        nombre: "PC Building Simulator 2",
        precio: "$15.99",
        genero: "Simulacion"

    },

    {
        id:8,
        imagen: "GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg",
        nombre: "Grand Theft Auto V",
        precio: "$50.99",
        genero: "Accion"

    },

    {
        id:9,
        imagen:"amogusportrait_1200x1600-66ad0e4d363e1c92f9f8aae67a96dd31.jpg",
        nombre: "Among US",
        precio: "$25.00",
        genero: "Simulacion"
    },

    {   id:10,
        imagen:"bordelands.jpg",
        nombre: "Borderlands 3",
        precio: "$80.23",
        genero: "Accion"

    },

    {
        id:11,
        imagen:"fifa.jpg",
        nombre: "FIFA 23 Standard Edition",
        precio: "$55.00",
        genero: "Simulacion"

    },

    {   id:12,
        imagen:"wildhearts.jpg",
        nombre: "Wild Hearts",
        precio: "$45.00",
        genero: "Accion"

    },

    {
        id:13,
        imagen:"rainbow.jpg",
        nombre: "RAINBOWSIX SIEGE",
        precio: "$45.00",
        genero: "Accion"

    },

    {
        id:14,
        imagen:"rainbowX.jpg",
        nombre: "Rainbow Six Extraction ",
        precio: "$99.00",
        genero: "Accion"

    },

    {
        id:15,
        imagen:"deadByDaylight.jpg",
        nombre: "Dead by Daylight",
        precio: "$45.00",
        genero: "Accion"
    },

    {
        id:16,
        imagen:"hogwarts.jpg",
        nombre: "Hogwarts Legacy",
        precio: "$75.00",
        genero: "Aventura"

    },
]


//Accesorios

const accesoriosMouse = [
    {
        imagen: "mouse2.jpg.png",
        nombre: "STORM PRO",
        precio: "$85.00",
        conectividad:"2.4Ghz Wireless, USB-C",
        botones:"7",
        descripcion:"Modo inalámbrico de 2.4 GHz: mouse Redragon M808 para juegos de panal diseñado en modo dual, que es M808 Storm Pro. El modo inalámbrico de 2.4 GHz deja 0 límites de tu puntería, nada en el camino a la victoria.",
        sensor:"Sensor óptico de 16,000 DPI, 7 botones programables"
    },

    {
        imagen: "mouse3.jpg.webp",
        nombre: "Logitech g304",
        precio: "$60.00",
        conectividad:"2.4Ghz Wireless, USB-C",
        botones:"7",
        descripcion:"Modo inalámbrico de 2.4 GHz: mouse Redragon M808 para juegos de panal diseñado en modo dual, que es M808 Storm Pro. El modo inalámbrico de 2.4 GHz deja 0 límites de tu puntería, nada en el camino a la victoria.",
        sensor:"Sensor óptico de 16,000 DPI, 7 botones programables"
    },

    {
        imagen: "mouse4.jpg.webp",
        nombre: "Logitech g502",
        precio: "$45.00",
          conectividad:"2.4Ghz Wireless, USB-C",
        botones:"7",
        descripcion:"Modo inalámbrico de 2.4 GHz: mouse Redragon M808 para juegos de panal diseñado en modo dual, que es M808 Storm Pro. El modo inalámbrico de 2.4 GHz deja 0 límites de tu puntería, nada en el camino a la victoria.",
        sensor:"Sensor óptico de 16,000 DPI, 7 botones programables"
    },

    {
        imagen: "mouse5.jpg.webp",
        nombre: "Logitech g903",
        precio: "$120.00",
          conectividad:"2.4Ghz Wireless, USB-C",
        botones:"7",
        descripcion:"Modo inalámbrico de 2.4 GHz: mouse Redragon M808 para juegos de panal diseñado en modo dual, que es M808 Storm Pro. El modo inalámbrico de 2.4 GHz deja 0 límites de tu puntería, nada en el camino a la victoria.",
        sensor:"Sensor óptico de 16,000 DPI, 7 botones programables"
    },

    {
        imagen: "mouse6.jpg.png",
        nombre: "Razer DeathAdder V2",
        precio: "$139.99",
          conectividad:"2.4Ghz Wireless, USB-C",
        botones:"7",
        descripcion:"Modo inalámbrico de 2.4 GHz: mouse Redragon M808 para juegos de panal diseñado en modo dual, que es M808 Storm Pro. El modo inalámbrico de 2.4 GHz deja 0 límites de tu puntería, nada en el camino a la victoria.",
        sensor:"Sensor óptico de 16,000 DPI, 7 botones programables"
    },
]

const accesoriosAudio =[
    {
        imagen: "logitecnegros.jpg.webp",
        nombre: "Logitech G535",
        precio: "$65.00",
        descripcion:"Disfruta del ultrarrápido rendimiento inalámbrico de LIGHTSPEED. Juega libre de cables y con toda comodidad durante sesiones de gaming prolongadas. Completamente equipados, con transductores de 40 mm, certificación Discord y mucho más.",
        frecuencia:"Respuesta de frecuencia: 20 Hz - 20 kHz",
        compatibilidad:"Windows 10 macOS X 10.14 o posterior",
        garantia:"Dos años de garantía de hardware limitada"
    },

    {
        imagen: "logitecpro.jpg.webp",
        nombre: "Logitech Pro X",
        precio: "$80.00",
        descripcion:"Disfruta del ultrarrápido rendimiento inalámbrico de LIGHTSPEED. Juega libre de cables y con toda comodidad durante sesiones de gaming prolongadas. Completamente equipados, con transductores de 40 mm, certificación Discord y mucho más.",
        frecuencia:"Respuesta de frecuencia: 20 Hz - 20 kHz",
        compatibilidad:"Windows 10 macOS X 10.14 o posterior",
        garantia:"Dos años de garantía de hardware limitada"
    },

    {
        imagen: "logitec.jpg.webp",
        nombre: "Logitech G733 KD",
        precio: "$45.00",
        descripcion:"Disfruta del ultrarrápido rendimiento inalámbrico de LIGHTSPEED. Juega libre de cables y con toda comodidad durante sesiones de gaming prolongadas. Completamente equipados, con transductores de 40 mm, certificación Discord y mucho más.",
        frecuencia:"Respuesta de frecuencia: 20 Hz - 20 kHz",
        compatibilidad:"Windows 10 macOS X 10.14 o posterior",
        garantia:"Dos años de garantía de hardware limitada"
    },

    {
        imagen: "Razerblack.jpg.png",
        nombre: "Razer BlackShark V2",
        precio: "$120.00",
        descripcion:"Disfruta del ultrarrápido rendimiento inalámbrico de LIGHTSPEED. Juega libre de cables y con toda comodidad durante sesiones de gaming prolongadas. Completamente equipados, con transductores de 40 mm, certificación Discord y mucho más.",
        compatibilidad:"Windows 10 macOS X 10.14 o posterior",
        garantia:"Dos años de garantía de hardware limitada"
    },

    {
        imagen: "Razerblackover.jpg.png",
        nombre: "Razer BlackShark V2",
        precio: "$100.00",
        descripcion:"Disfruta del ultrarrápido rendimiento inalámbrico de LIGHTSPEED. Juega libre de cables y con toda comodidad durante sesiones de gaming prolongadas. Completamente equipados, con transductores de 40 mm, certificación Discord y mucho más.",
        frecuencia:"Respuesta de frecuencia: 20 Hz - 20 kHz",
        compatibilidad:"Windows 10 macOS X 10.14 o posterior",
        garantia:"Dos años de garantía de hardware limitada"
    },
]

const accesoriosKeyboard = [
    {
        imagen: "teclado2.jpg.webp",
        marca: "Logitech G513",
        precio: "$65.00",
        descripcion: "Gaming, Práctico puerto USB de paso hace que sea fácil conectar tu mouse, unidad flash o teléfono para transmisión directa de datos o carga",
        numeroTeclas:"104",
        material:"Aluminio",
        caracteristica:"Retroiluminado, Teclas ROG PBT de doble disparo Estabilizador de interruptor ROG Panel táctil interactivo INTERRUPTOR MECÁNICO ROG NX Retroiluminada"
    },

    {
        imagen: "teclado3.jpg.webp",
        marca: "G513 CARBON",
        precio: "$75.00",
        descripcion: "Gaming, Práctico puerto USB de paso hace que sea fácil conectar tu mouse, unidad flash o teléfono para transmisión directa de datos o carga",
        numeroTeclas:"104",
        material:"Aluminio"
    },

    {
        imagen: "teclado4.jpg.png",
        marca: "EVISU BlackWidow V3",
        precio: "$55.00",
        descripcion: "Gaming, Práctico puerto USB de paso hace que sea fácil conectar tu mouse, unidad flash o teléfono para transmisión directa de datos o carga",
        numeroTeclas:"104",
        material:"Aluminio"
    },

    {
        imagen: "teclado5.jpg.png",
        marca: "REDRGON HORUS",
        precio: "$80.00",
        descripcion: "Gaming, Práctico puerto USB de paso hace que sea fácil conectar tu mouse, unidad flash o teléfono para transmisión directa de datos o carga",
        numeroTeclas:"104",
        material:"Aluminio"
    },

    {
        imagen: "teclado6.jpg.webp",
        marca: "LOGITECH PRO X",
        precio: "$150.00",
        descripcion: "Gaming, Práctico puerto USB de paso hace que sea fácil conectar tu mouse, unidad flash o teléfono para transmisión directa de datos o carga",
        numeroTeclas:"104",
        material:"Aluminio"
    },
]



//Computadoras

const computadoras = [
    {
        imagen: "img6/300 (1).webp",
        nombre: "Torre cpu gamer 5 5600g",
        precio: "$2.200.200",
        marca: "CyberpowerPC",
        sistema: "Windows 11 Home",
        descripcion:"ofrece la mejor computadora de juegos construida hasta la fecha para ejecutar rápidamente juegos populares como Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PlayerunKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New Mundo, Minecraft, Elden Ring, Rocket League, The Division 2 y más en ajustes Ultra, resolución 4K Ultra HD detallada y juego suave de 60+ FPS.",
        refrigeracion:"9 ventiladores ARGB para un máximo rendimiento de refrigeración"
    },

    {
        imagen: "img6/300 (2).webp",
        nombre: "Torre cpu gamer 3000g",
        precio: "$1.350.000",
        marca: "CyberpowerPC",
        sistema: "Windows 11 Home",
        descripcion:"ofrece la mejor computadora de juegos construida hasta la fecha para ejecutar rápidamente juegos populares como Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PlayerunKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New Mundo, Minecraft, Elden Ring, Rocket League, The Division 2 y más en ajustes Ultra, resolución 4K Ultra HD detallada y juego suave de 60+ FPS.",
        refrigeracion:"9 ventiladores ARGB para un máximo rendimiento de refrigeración"
    },

    {
        imagen: "img6/300 (3).webp",
        nombre: "Torre cpu gamer  5600g",
        precio: "$2.200.200",
        marca: "CyberpowerPC",
        sistema: "Windows 11 Home",
        descripcion:"ofrece la mejor computadora de juegos construida hasta la fecha para ejecutar rápidamente juegos populares como Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PlayerunKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New Mundo, Minecraft, Elden Ring, Rocket League, The Division 2 y más en ajustes Ultra, resolución 4K Ultra HD detallada y juego suave de 60+ FPS.",
        refrigeracion:"9 ventiladores ARGB para un máximo rendimiento de refrigeración"
    },

    {
        imagen: "img6/300 (4).webp",
        nombre: "Torre cpu gamer 5700g",
        precio: "$2.850.000",
        marca: "CyberpowerPC",
        sistema: "Windows 11 Home",
        descripcion:"ofrece la mejor computadora de juegos construida hasta la fecha para ejecutar rápidamente juegos populares como Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PlayerunKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New Mundo, Minecraft, Elden Ring, Rocket League, The Division 2 y más en ajustes Ultra, resolución 4K Ultra HD detallada y juego suave de 60+ FPS.",
        refrigeracion:"9 ventiladores ARGB para un máximo rendimiento de refrigeración"
    },

    {
        imagen: "img6/300 (5).webp",
        nombre: "Torre cpu gamer I5 10100",
        precio: "$3.800.000",
        marca: "CyberpowerPC",
        sistema: "Windows 11 Home",
        descripcion:"ofrece la mejor computadora de juegos construida hasta la fecha para ejecutar rápidamente juegos populares como Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PlayerunKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New Mundo, Minecraft, Elden Ring, Rocket League, The Division 2 y más en ajustes Ultra, resolución 4K Ultra HD detallada y juego suave de 60+ FPS.",
        refrigeracion:"9 ventiladores ARGB para un máximo rendimiento de refrigeración"
    },
    {
        imagen: "img6/300 (6).png",
        nombre: "Torre cpu gamer 9 5900",
        precio: "$4.489.900",
        marca: "CyberpowerPC",
        sistema: "Windows 11 Home",
        descripcion:"ofrece la mejor computadora de juegos construida hasta la fecha para ejecutar rápidamente juegos populares como Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PlayerunKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New Mundo, Minecraft, Elden Ring, Rocket League, The Division 2 y más en ajustes Ultra, resolución 4K Ultra HD detallada y juego suave de 60+ FPS.",
        refrigeracion:"9 ventiladores ARGB para un máximo rendimiento de refrigeración"
    },

    {
        imagen: "img6/300 (7).jpg",
        nombre: "Torre cpu gamer 9 5950 ",
        precio: "$5.800.800",
        marca: "CyberpowerPC",
        sistema: "Windows 11 Home",
        descripcion:"ofrece la mejor computadora de juegos construida hasta la fecha para ejecutar rápidamente juegos populares como Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PlayerunKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New Mundo, Minecraft, Elden Ring, Rocket League, The Division 2 y más en ajustes Ultra, resolución 4K Ultra HD detallada y juego suave de 60+ FPS.",
        refrigeracion:"9 ventiladores ARGB para un máximo rendimiento de refrigeración"
    },

    {
        imagen: "img6/300 (8).jpeg",
        nombre: "Torre cpu gamer I7 12700",
        precio: "$4.200.000",
        marca: "CyberpowerPC",
        sistema: "Windows 11 Home",
        descripcion:"ofrece la mejor computadora de juegos construida hasta la fecha para ejecutar rápidamente juegos populares como Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, Valorant, World of Warcraft, League of Legends, Apex Legends, Roblox, PlayerunKNOWN's Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, New Mundo, Minecraft, Elden Ring, Rocket League, The Division 2 y más en ajustes Ultra, resolución 4K Ultra HD detallada y juego suave de 60+ FPS.",
        refrigeracion:"9 ventiladores ARGB para un máximo rendimiento de refrigeración"
    },

]

//ropa

const ropaCamisetas = [
    {
        imagen: "camisa1.jpg",
        nombre: "Controlador de neón",
        precio: "$19.07",
        material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:" Colores lisos: 80 % algodón, 20 % poliéster. Gris jaspeado: 70 % algodón y 30 % poliéster. Antracita jaspeado: 60 % algodón y 40 % poliéster. Puños, cuello y bajo de canaléfabricada en condiciones de trabajo dignas según los estándares de la WRAPsi prefieres la ropa ancha, puedes pedir dos tallas más",
        garantia:"Garantia de tres año"
        
    },

    {
        imagen: "camisa2.jpg",
        nombre: "Camiseta de Jugador",
        precio: "$18.31",
        material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:" Colores lisos: 80 % algodón, 20 % poliéster. Gris jaspeado: 70 % algodón y 30 % poliéster. Antracita jaspeado: 60 % algodón y 40 % poliéster. Puños, cuello y bajo de canaléfabricada en condiciones de trabajo dignas según los estándares de la WRAPsi prefieres la ropa ancha, puedes pedir dos tallas más",
        garantia:"Garantia de  año"
        
    },

    {
        imagen: "camisa3.jpg",
        nombre: "Handy Game Machine",
        precio: "$17.55",
        material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:" Colores lisos: 80 % algodón, 20 % poliéster. Gris jaspeado: 70 % algodón y 30 % poliéster. Antracita jaspeado: 60 % algodón y 40 % poliéster. Puños, cuello y bajo de canaléfabricada en condiciones de trabajo dignas según los estándares de la WRAPsi prefieres la ropa ancha, puedes pedir dos tallas más",
        garantia:"Garantia de  año"
        
    },

    {
        imagen: "imagen4.jpg",
        nombre: "Dota 2 Left Crest Logo",
        precio: "$18.31",
         material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:" Colores lisos: 80 % algodón, 20 % poliéster. Gris jaspeado: 70 % algodón y 30 % poliéster. Antracita jaspeado: 60 % algodón y 40 % poliéster. Puños, cuello y bajo de canaléfabricada en condiciones de trabajo dignas según los estándares de la WRAPsi prefieres la ropa ancha, puedes pedir dos tallas más",
        garantia:"Garantia de  año"
        
    },

    {
        imagen: "imagen5.jpg",
        nombre: "Simbolos camisa mujer",
        precio: "$18.31",
        material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:" Colores lisos: 80 % algodón, 20 % poliéster. Gris jaspeado: 70 % algodón y 30 % poliéster. Antracita jaspeado: 60 % algodón y 40 % poliéster. Puños, cuello y bajo de canaléfabricada en condiciones de trabajo dignas según los estándares de la WRAPsi prefieres la ropa ancha, puedes pedir dos tallas más",
        garantia:"Garantia de 1 año"
        
    },
]

const ropaSudaderas = [
    {
        imagen: "sudadera1.jpg",
        nombre: "Sudadera sin capucha",
        precio: "$39.26",
        material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"
        
    },

    {
        imagen: "sudadera2.jpg",
        nombre: "gamers never quit game",
        precio: "$40.80",
        material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"
        
    },

    {
        imagen: "sudadera3.jpg",
        nombre: "Game Over",
        precio: "$69.99",
        material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"
        
    },

    {
        imagen: "sudadera4.jpg",
        nombre: "gamers never quit game",
        precio: "$44.80",
        material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"
        
    },

    {
        imagen: "sudadera5.jpg",
        nombre: "Engranaje Baiken negro",
        precio: "$49.31",
        material:"Tela de gramaje alto rica en algodón",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"
        
    },
]

const ropaMedias = [
    {
        imagen: "medias1.jpg",
        nombre: "V Is for Valentines Video Games",
        precio: "$12.28",
        material:" Medias en punto fino de mezcla de algodón suave con borde superior elástico.",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"

    },

    {
        imagen: "medias2.jpg",
        nombre: "día de san valentín para jugadores",
        precio: "$12.98",
         material:" Medias en punto fino de mezcla de algodón suave con borde superior elástico.",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"
    },

    {
        imagen: "medias3.jpg",
        nombre: "Introverted Video Games Lovers",
        precio: "$12.98",
         material:" Medias en punto fino de mezcla de algodón suave con borde superior elástico.",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"
    },

    {
        imagen: "medias4.jpg",
        nombre: "My Perfect Day Play Video Games",
        precio: "$12.98",
        material:" Medias en punto fino de mezcla de algodón suave con borde superior elástico.",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"
    },

    {
        imagen: "media5.jpg",
        nombre: "Keep It Classic Video Games",
        precio: "$12.98",
        material:" Medias en punto fino de mezcla de algodón suave con borde superior elástico.",
        talla :"XS, S, M , L , XXL , XXXL ",
        descripcion:"Camiseta cómoda y suave, un básico en tu armario  Corte ajustado. Pide una talla más si prefieres un corte más holgado o ve a por una camiseta clásica. el modelo mide 1,83 m (60) y lleva la talla LLa modelo mide 1,73 m (5'8) y lleva una S tela de gramaje medio: 145 g/m² (4.2 oz). Colores lisos: 100 % algodón gris jaspeado: 90 % algodón, 10 % poliéster antracita jaspeado: 52 % algodón 48 % poliéster",
        garantia:"Garantia de 1 año"
    },
]


//CONSOLAS
const consolaXbox = [
    {
        id:1,
        imagen: "seriesx.png",
        nombre: "XBOX SERIES X",
        precio: "$600.00",
        detalle:"La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 más 32 MB de ESRAM, con una velocidad de hasta 204 GB/s",
        dimensiones:"Un 40% más pequeña (295 x 230 x 63 mm)",
        peso:"2,9 kg",
        almacenamiento:"500 GB / 1 TB / 2 TB"
    },

    {
        id:2,
        imagen: "seriesS.png",
        nombre: "XBOX SERIES S",
        precio: "$400.00",
        detalle:"La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 más 32 MB de ESRAM, con una velocidad de hasta 204 GB/s",
        dimensiones:"Un 40% más pequeña (295 x 230 x 63 mm)",
        peso:"2,9 kg",
        almacenamiento:"500 GB / 1 TB / 2 TB"
        
    },

    {
        id:3,
        imagen: "oneScorpio.png",
        nombre: "XBOX ONE PROJECT SCORPIO",
        precio: "$300.00",
        detalle:"La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 más 32 MB de ESRAM, con una velocidad de hasta 204 GB/s",
        dimensiones:"Un 40% más pequeña (295 x 230 x 63 mm)",
        peso:"2,9 kg",
        almacenamiento:"500 GB / 1 TB / 2 TB"
    },

    {
        id:4,
        imagen: "xboxOne.png",
        nombre: "XBOX ONE",
        precio: "$550.00",
        detalle:"La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 más 32 MB de ESRAM, con una velocidad de hasta 204 GB/s",
        dimensiones:"Un 40% más pequeña (295 x 230 x 63 mm)",
        peso:"2,9 kg",
        almacenamiento:"500 GB / 1 TB / 2 TB"
    },

    {
        id:5,
        imagen: "xbox360.png",
        nombre: "XBOX 360",
        precio: "$630.00",
        detalle:"La consola está formada por un procesador AMD de 8 núcleos Custom de 64 bits basado en microarquitectura Jaguar y una velocidad estimada en 1,75 Ghz, 8 GB de memoria RAM DDR3 más 32 MB de ESRAM, con una velocidad de hasta 204 GB/s",
        dimensiones:"Un 40% más pequeña (295 x 230 x 63 mm)",
        peso:"2,9 kg",
        almacenamiento:"500 GB / 1 TB / 2 TB"
    },
    
]

const consolaPlay =[
    {
        imagen: "plsy_5-removebg-preview.png",
        nombre: "PlayStation® 5",
        precio: "$650.00",
        detalle:"La PlayStation funciona con un sistema personalizado en un chip (SoC) diseñado en conjunto por AMD y Sony,30​ que integra una CPU AMD Zen 2 personalizada de 7 nm con ocho núcleos funcionando a una frecuencia variable limitada a 3,5 GHz.",
        dimensiones: "18 x 6 x 17.9 pulgadas",
        peso:"	Base: 4,5 kilogramos (9,9 libras) Digital: 3,9 kilogramos (8,6 libras)",
        almacenamiento:	"SSD personalizado de 825 GB"
    },
    
    {
        imagen: "Play4-removebg-preview.png",
        nombre: "PlayStation® 4",
        precio: "$430.00",
        detalle:"La PlayStation funciona con un sistema personalizado en un chip (SoC) diseñado en conjunto por AMD y Sony,30​ que integra una CPU AMD Zen 2 personalizada de 7 nm con ocho núcleos funcionando a una frecuencia variable limitada a 3,5 GHz.",
        dimensiones: "18 x 6 x 17.9 pulgadas",
        peso:"	Base: 4,5 kilogramos (9,9 libras) Digital: 3,9 kilogramos (8,6 libras)",
        almacenamiento:	"SSD personalizado de 825 GB"
    },
    
    {
        imagen: "play3.png",
        nombre: "PlayStation® 3",
        precio: "$215.00",
        detalle:"La PlayStation funciona con un sistema personalizado en un chip (SoC) diseñado en conjunto por AMD y Sony,30​ que integra una CPU AMD Zen 2 personalizada de 7 nm con ocho núcleos funcionando a una frecuencia variable limitada a 3,5 GHz.",
        dimensiones: "18 x 6 x 17.9 pulgadas",
        peso:"	Base: 4,5 kilogramos (9,9 libras) Digital: 3,9 kilogramos (8,6 libras)",
        almacenamiento:	"SSD personalizado de 825 GB"
    },
    
    {
        imagen: "play2.png",
        nombre: "PLAYSTATION 2",
        precio: "$60.00",
        detalle:"La PlayStation funciona con un sistema personalizado en un chip (SoC) diseñado en conjunto por AMD y Sony,30​ que integra una CPU AMD Zen 2 personalizada de 7 nm con ocho núcleos funcionando a una frecuencia variable limitada a 3,5 GHz.",
        dimensiones: "18 x 6 x 17.9 pulgadas",
        peso:"	Base: 4,5 kilogramos (9,9 libras) Digital: 3,9 kilogramos (8,6 libras)",
        almacenamiento:	"SSD personalizado de 825 GB"
    },
    
    {
        imagen: "vr2.webp",
        nombre: "PlayStation® VR2",
        precio: "$550.00",
        detalle:"La PlayStation funciona con un sistema personalizado en un chip (SoC) diseñado en conjunto por AMD y Sony,30​ que integra una CPU AMD Zen 2 personalizada de 7 nm con ocho núcleos funcionando a una frecuencia variable limitada a 3,5 GHz.",
        dimensiones: "18 x 6 x 17.9 pulgadas",
        peso:"	Base: 4,5 kilogramos (9,9 libras) Digital: 3,9 kilogramos (8,6 libras)",
        almacenamiento:	"SSD personalizado de 825 GB"
    },
    
]

const consolaNintendo = [
    {
        imagen: "nintendoSwitch.png",
        nombre: "Nintendo Switch",
        precio: "$650.00",
        detalle:"La consola se diseñó exclusivamente para su uso portátil, siendo más compacta que la Nintendo Switch original. Fue diseñada por Nintendo para facilitar el transporte de su nueva generación de consolas. A diferencia de la anterior consola, viene con los controles integrados sin los Joy-Cons.Este dispositivo reproduce solamente los juegos disponibles en modo portátil para la Nintendo Switch.",
        dimensiones:"10,16 cm (6 pulgadas) de alto 23,88 cm (8,2 pulgadas) de ancho 1,4 cm (0,55 pulgadas) de grosor",
        peso:"299 gramos, con los dos controles 399 g",
        almacenamiento:"Interno memoria flash: 32 GB (64GB modelo OLED)Externo microSDXC 4 GB RAM LPDDR4"
    },
    
    {
        imagen: "wii U.png",
        nombre: "Nintendo Wii U",
        precio: "$320.00",
        detalle:"La consola se diseñó exclusivamente para su uso portátil, siendo más compacta que la Nintendo Switch original. Fue diseñada por Nintendo para facilitar el transporte de su nueva generación de consolas. A diferencia de la anterior consola, viene con los controles integrados sin los Joy-Cons.Este dispositivo reproduce solamente los juegos disponibles en modo portátil para la Nintendo Switch.",
        dimensiones:"10,16 cm (6 pulgadas) de alto 23,88 cm (8,2 pulgadas) de ancho 1,4 cm (0,55 pulgadas) de grosor",
        peso:"299 gramos, con los dos controles 399 g",
        almacenamiento:"Interno memoria flash: 32 GB (64GB modelo OLED)Externo microSDXC 4 GB RAM LPDDR4"
    },
    
    {
        imagen: "wii-removebg-preview.png",
        nombre: "Nintendo Wii",
        precio: "$45.00",
        detalle:"La consola se diseñó exclusivamente para su uso portátil, siendo más compacta que la Nintendo Switch original. Fue diseñada por Nintendo para facilitar el transporte de su nueva generación de consolas. A diferencia de la anterior consola, viene con los controles integrados sin los Joy-Cons.Este dispositivo reproduce solamente los juegos disponibles en modo portátil para la Nintendo Switch.",
        dimensiones:"10,16 cm (6 pulgadas) de alto 23,88 cm (8,2 pulgadas) de ancho 1,4 cm (0,55 pulgadas) de grosor",
        peso:"299 gramos, con los dos controles 399 g",
        almacenamiento:"Interno memoria flash: 32 GB (64GB modelo OLED)Externo microSDXC 4 GB RAM LPDDR4"
    },
    
    {
        imagen: "Nintendo-3DS-AquaOpen.png",
        nombre: "Nintendo 3DS",
        precio: "$35.00",
        detalle:"La consola se diseñó exclusivamente para su uso portátil, siendo más compacta que la Nintendo Switch original. Fue diseñada por Nintendo para facilitar el transporte de su nueva generación de consolas. A diferencia de la anterior consola, viene con los controles integrados sin los Joy-Cons.Este dispositivo reproduce solamente los juegos disponibles en modo portátil para la Nintendo Switch.",
        dimensiones:"10,16 cm (6 pulgadas) de alto 23,88 cm (8,2 pulgadas) de ancho 1,4 cm (0,55 pulgadas) de grosor",
        peso:"299 gramos, con los dos controles 399 g",
        almacenamiento:"Interno memoria flash: 32 GB (64GB modelo OLED)Externo microSDXC 4 GB RAM LPDDR4"
    },
]