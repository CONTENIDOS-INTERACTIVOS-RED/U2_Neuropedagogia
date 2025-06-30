export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fisiología del sistema nervioso',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Funcionamiento del sistema nervioso, basado en el cerebro',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El cerebro',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistema nervioso central',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Áreas motoras, áreas del lenguaje, áreas de la visión, áreas de escritura, áreas cerebrales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Áreas motoras',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Áreas del lenguaje',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Áreas de la visión',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Áreas de escritura',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Predominancia cerebral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Preferencia manual y factores hereditarios',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Características, procesos de pensamiento y competencias de los cuadrantes cerebrales ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Revelador triádico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Revelador del cociente triádico',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Aplicación en la educación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Componentes y sistemas de representación del cerebro',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Componentes del cerebro',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Sistemas de representación',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Moros, E. Luisa Moro, M. & Moros, E. (2008). El cerebro: lo neurológico y lo trascendental: ( ed.). EUNSA.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/47063?page=14',
    },
    {
      referencia:
        'Carrillo, A. (2024, 15 enero). Sistema Nervioso Central (SNC): partes, funciones y enfermedades. Psicología y Mente. ',
      link:
        'https://psicologiaymente.com/neurociencias/sistema-nervioso-central',
    },
    {
      referencia:
        'Francia, G. (2021, 5 enero). Células gliales: qué son, tipos y funciones. psicologia-online.com. ',
      link:
        'https://www.psicologia-online.com/celulas-gliales-que-son-tipos-y-funciones-5396.html',
    },
    {
      referencia:
        'Aragort, M. (2009). El sistema nervioso central: ( ed.). El Cid Editor | apuntes.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/28486?page=8',
    },
    {
      referencia:
        'Velayos, J. L. & Diéguez, G. (2015). Anatomía y fisiología del sistema nervioso central: (ed.). CEU Ediciones.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/43244?page=30',
    },
    {
      referencia:
        'Velayos, J. L. & Diéguez, G. (2015). Anatomía y fisiología del sistema nervioso central: (ed.). CEU Ediciones.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/43244?page=30',
    },
    {
      referencia:
        'Guerri, M. (2023, 18 mayo). La corteza cerebral: áreas motoras, de asociación y del lenguaje. Psicoactiva. ',
      link:
        'https://www.psicoactiva.com/blog/la-corteza-cerebral-areas-motoras-asociacion-del-lenguaje/',
    },
    {
      referencia:
        'Guzmán Martínez, G. (2023, 24 diciembre). Áreas del cerebro especializadas en el lenguaje: su ubicación y funciones. Psicología y Mente. ',
      link:
        'https://psicologiaymente.com/neurociencias/areas-del-cerebro-lenguaje',
    },
    {
      referencia:
        'Castillero Mimenza, O. (2024, 5 agosto). Corteza visual del cerebro: estructura, partes y vías. Psicología y Mente. ',
      link: 'https://psicologiaymente.com/neurociencias/corteza-visual',
    },
    {
      referencia:
        'Lebrero Baena, P., Fernandez Perez, D., & García García, E. (2015). Neurociencia de la lectura y escritura. ',
      link:
        'https://docta.ucm.es/rest/api/core/bitstreams/de9006cb-d9f5-4a4f-a415-9741f1e052fd/content',
    },
    {
      referencia:
        'Rodríguez, R. C. (2017, 13 octubre). Sistema neuroescritural: El cerebro y la escritura.  ',
      link:
        'https://www.redem.org/sistema-neuroescritural-el-cerebro-y-la-escritura/',
    },
    {
      referencia:
        'Silva-Rodríguez, A., & Escobar-Izquierdo, A. (1996). La dominancia cerebral. Un estudio de zurdera en un grupo de población mexicana. Gac Méd Méx, 132(1), 29.  ',
      link: 'https://www.anmm.org.mx/bgmm/1864_2007/1996-132-1-29-35.pdf',
    },
    {
      referencia:
        'Alonso, M. R. M., & Mendieta, C. A. B. (2017). Dominancia cerebral y educación universitaria. Revista Humanismo y cambio social, 102-113.  ',
      link: 'https://camjol.info/index.php/HCS/article/download/8250/8405',
    },
    {
      referencia:
        'Test revelador del cociente tricerebral. (2020, 6 de junio). Blog estadisticando. ',
      link:
        'https://estadisticando.blogspot.com/2020/06/test-revelador-del-cociente-tricerebral.html#:~:text=El%20Cuestionario%20Revelador%20del%20Cociente%20Mental%20Tr%C3%ADadico%20(CT),y%20relacionadas%20con%20el%20pensar,%20sentir%20y%20actuar.',
    },
    {
      referencia:
        'Hernández Torres, E. P., Márquez Martínez, K. N., & Belandria Rondón, R. D. (2023). Ciclos tricerebrales para la mediación de conocimientos en ciencias naturales. Petroglifos. Revista Crítica Transdisciplinar.  ',
      link:
        'https://petroglifosrevistacritica.org.ve/wp-content/rep/2023_060103.pdf',
    },
    {
      referencia: 'Lifeder. (13 de enero de 2024). Cerebro humano. ',
      link: 'https://www.lifeder.com/funciones-partes-del-cerebro-humano/.',
    },
    {
      referencia:
        'Triglia, A. (2016, 24 de julio). Partes del cerebro humano (y funciones). Psicología y Mente. ',
      link: 'https://psicologiaymente.com/neurociencias/partes-cerebro-humano',
    },
    {
      referencia:
        'Castillero Mimenza, O. (2016, 16 de noviembre). Neocórtex (cerebro): estructura y funciones. Neocórtex (Cerebro): Estructura y Funciones.',
      link: 'https://psicologiaymente.com/neurociencias/neocortex',
    },
    {
      referencia:
        'Triglia, A. (2016b, 23 de agosto). Sistema límbico: la parte emocional del cerebro. Psicología y Mente. ',
      link:
        'https://psicologiaymente.com/neurociencias/sistema-limbico-cerebro',
    },
    {
      referencia:
        'Silván, C. M. (2024, 15 agosto). Cerebro reptiliano. Lifeder. ',
      link: 'https://www.lifeder.com/cerebro-reptiliano/',
    },
    {
      referencia:
        'Accresio. (2020, 24 junio). PNL: Sistemas Representativos - visual, auditivo y kinestésico | Accresio. Accresio.  ',
      link: 'https://accresio.com/pnl/sistemas-representativos/',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'proceso mediante el cual una persona adquiere conocimientos, habilidades y experiencias a través de la educación y la interacción con su entorno.',
    },
    {
      termino: 'Cerebro',
      significado:
        'órgano principal del sistema nervioso encargado de procesar la información, regular funciones vitales y coordinar el pensamiento, las emociones y el movimiento.',
    },
    {
      termino: 'Creatividad',
      significado:
        'habilidad para generar ideas nuevas, originales y útiles, vinculada a la actividad del cerebro derecho y al procesamiento intuitivo.',
    },
    {
      termino: 'Dominancia cerebral',
      significado:
        'concepto que describe cómo ciertas áreas del cerebro tienen mayor influencia en la manera en que una persona piensa y actúa.',
    },
    {
      termino: 'Educación',
      significado:
        'proceso de enseñanza y aprendizaje mediante el cual los individuos desarrollan habilidades, conocimientos y valores en distintos entornos.',
    },
    {
      termino: 'Estilo de aprendizaje',
      significado:
        'preferencia individual en la manera de procesar la información, basada en los sistemas visual, auditivo y kinestésico',
    },
    {
      termino: 'Lóbulos cerebrales',
      significado:
        'divisiones funcionales de la neocorteza que regulan diferentes aspectos del comportamiento humano, como el pensamiento, las emociones y la percepción sensorial.',
    },
    {
      termino: 'Neocorteza',
      significado:
        'parte del cerebro encargada del razonamiento lógico, la planificación y la toma de decisiones, vinculada al cerebro izquierdo racional',
    },
    {
      termino: 'Neuropedagogía',
      significado:
        'disciplina que estudia la relación entre el funcionamiento del cerebro y los procesos de aprendizaje, aplicando conocimientos de neurociencia en la educación',
    },
    {
      termino: 'Neurona',
      significado:
        'célula fundamental del sistema nervioso encargada de transmitir información a través de impulsos eléctricos y químicos. ',
    },
  ],
}
