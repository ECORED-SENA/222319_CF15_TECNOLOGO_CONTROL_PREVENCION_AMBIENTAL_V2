export default {
  global: {
    componenteFormativo: 'Planificación de la campaña ambiental',
    descripcionCurso:
      'Mediante este componente, se estudian elementos de la educación ambiental, política nacional de educación ambiental, estrategias de acción en promotorías ambientales y fortalecimiento comunitario y social, en el marco del desarrollo medioambiental. Se insta, además, a la adopción de una mirada efectiva de inclusión, equidad y promoción de los individuos y colectivos, como protagonistas de estos procesos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Educación ambiental',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios de la educación ambiental',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Objetivos de la educación ambiental',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normativa asociada y Política Nacional de Educación Ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Caracterización de la población ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Comunidad y formas organizativas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'La organización comunitaria',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'El territorio y su ordenamiento',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Igualdad de género',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Equidad de género',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Inclusión social',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Tipos y necesidades de capacitación en las organizaciones',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas LNC: tipos, recursos y materiales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Promotoría ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Importancia de la promotoría ambiental ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'La promotoría ambiental en Colombia',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Perfil del promotor',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Funciones',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Promotor comunitario',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Los roles del promotor ambiental',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Diseño de un plan de promotoría ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Planificación de la promotoría',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Diseño del Plan',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Recolección de la información',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Las metas',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Plan de acción',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Seguimiento y evaluación',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Finalidad del plan de gestión ambiental',
            hash: 't_6_7',
          },
          {
            numero: '6.8',
            titulo: 'Ejes de investigación de la promotoría ambiental',
            hash: 't_6_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/222319_CF15_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Conceptos generales',
      referencia:
        'CENEAM OAPN. (2019). <i>La Educación Ambiental explicada en cinco minutos (2019)<i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hYOy6grpqoY',
    },
    {
      tema:
        '2. Normatividad asociada a la promotoría y política de educación ambiental',
      referencia:
        'Correa, E. (2020). <i>Introducción a la Normatividad ambiental en Colombia</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=C8WJtf3JspU',
    },
    {
      tema:
        '2. Normatividad asociada a la promotoría y política de educación ambiental',
      referencia:
        'Ministerio del Medio Ambiente y Ministerio de Educación Nacional. (2002). <i>Política Nacional de Educación Ambiental SINA</i>.',
      tipo: 'Manual',
      descarga: '/downloads/politica_educacion_amb.pdf',
    },
    {
      tema: '4. Técnicas LNC: tipos, recursos y materiales',
      referencia:
        'Compartir Palabra Maestra. (2015). <i>¿Qué es un recurso didáctico?</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=10_0nVuXZqo',
    },
    {
      tema: '5. Promotoría ambiental',
      referencia:
        'Brigadas Verdes. (2013). <i>Tutorial 3 "El Rol del promotor ambiental"</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Sm_ISgLI0l4',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente',
      significado:
        'región, alrededores y circunstancias en las que se encuentra un ser u objeto. El ambiente de un individuo comprende dos tipos de constituyentes: 1. El medio puramente físico o abiótico, en el cual él existe (aire, agua) y 2. El componente biótico, que comprende la materia orgánica no viviente y todos los organismos, plantas y animales de la región, incluida la población específica a la que pertenece el organismo (CRQ, s. f.).',
    },
    {
      termino: 'Calidad ambiental',
      significado:
        'los atributos mensurables de un producto o proceso que indican su contribución a la salud e integridad ecológica. Estado físico, biológico y ecológico de un área o zona determinada de la biosfera, en términos relativos a su unidad y a la salud presente y futura del hombre y las demás especies animales y vegetales (CRQ, s. f.). ',
    },
    {
      termino: 'Comunidad',
      significado:
        'conjunto de seres vivos que pueblan un territorio determinado caracterizado por las interrelaciones que estos organismos tienen entre sí y con su entorno. Grupo integrado de especies que habitan en determinada zona; los organismos de determinada comunidad se influyen mutuamente en materia de distribución, abundancia y evolución. (Una comunidad humana es un grupo social de cualquier tamaño cuyos miembros viven en determinada localidad.) (CRQ, s. f.). ',
    },
    {
      termino: 'Contaminación',
      significado:
        'liberación de sustancias que, de manera directa o indirecta, causan efectos adversos sobre el medio ambiente y los seres vivos. Existencia en el ambiente de contaminantes o agentes tóxicos o infecciosos que entorpecen o perjudican la vida, la salud y el bienestar del hombre, la fauna y la flora; que degradan la calidad del ambiente y, en general, el equilibrio ecológico y los bienes particulares y públicos. (CRQ, s. f.).',
    },
    {
      termino: 'Población',
      significado:
        'grupo de individuos con un ancestro común, que tienden en mucho mayor medida a formar parejas entre sí, más que con individuos de otro grupo del mismo género (CRQ, s. f.). ',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, J. (2010). Análisis de modos de falla, efectos y criticidad (AMFEC) para la planeación del mantenimiento empleando criterios de riesgo y confiabilidad. <i>Tecnología, Ciencia, Educación, 25</i>(1), p. 15-26.',
      link: 'https://www.redalyc.org/pdf/482/48215094003.pdf',
    },
    {
      referencia:
        'Barros, G. (2009). El ser humano y la biodiversidad en el ecosistema: validación de una experiencia de aula. <i>Enseñanza de las ciencias. Revista de investigación y experiencias didácticas</i>.',
      link: 'https://raco.cat/index.php/Ensenanza/article/view/294036/382567',
    },
    {
      referencia:
        'Cazzuffi, C. (2019). <i>Una nueva política para el desarrollo rural en América Latina</i>. México social.',
      link:
        'https://www.mexicosocial.org/una-nueva-politica-para-el-desarrollo-rural-en-america-latina/',
    },
    {
      referencia:
        'Cerda, H. (1991). <i>Los elementos de la investigación: Cómo reconocerlos, diseñarlos y construirlos</i>. Editorial El Búho.',
    },
    {
      referencia:
        'Chiavenato, I. (2004). <i>Comportamiento organizacional. La dinámica del éxito en las comunicaciones</i>. McGraw-Hill Educación.',
      link: '',
    },
    {
      referencia:
        'García, J. (1997). Los contenidos de la Educación Ambiental: una reflexión desde la perspectiva de la complejidad. <i>Investigación en la escuela</i>, (53), p. 31-51.',
      link: 'https://revistascientificas.us.es/index.php/IE/article/view/7531',
    },
    {
      referencia:
        'Ley 1549 de 2012. Por medio de la cual se fortalece la institucionalización de la política nacional de educación ambiental y su incorporación efectiva en el desarrollo territorial. Julio 05 de 2012.',
    },
    {
      referencia:
        'Maldonado, T. (2013). <i>Promotoría Ambiental</i>. Centro de educación y capacitación para el desarrollo sustentable.',
      link: '',
    },
    {
      referencia: 'Máxima, J. (2020). <i>Comunidad</i>. Características.',
      link: 'https://www.caracteristicas.co/comunidad/#ixzz6d9dpC3wQ',
    },
    {
      referencia:
        'Martínez, R. (2010). La importancia de la educación ambiental ante la problemática actual. <i>Revista Electrónica Educare, 14</i>(1), p. 97-111.',
      link: 'https://www.redalyc.org/pdf/1941/194114419010.pdf',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente. (2020). <i>Programa Nacional de promotoría ambiental comunitaria</i>. Minambiente.',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente y Ministerio de Educación Nacional. (2002). <i>Política Nacional de Educación Ambiental SINA</i>.',
      link:
        'https://drive.google.com/file/d/1kg0rLJhOf_1GI4fgfnT76OLT8dsb3Syy/view?usp=sharing',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura [UNESCO]. (2014). <i>Manual metodológico. Indicadores de cultura para el desarrollo</i>.',
      link:
        'https://es.unesco.org/creativity/sites/creativity/files/iucd_manual_metodologico_1.pdf',
    },
    {
      referencia:
        'ODESCA. (2012). <i>Guía para la promotora y el promotor comunitario ambiental</i>. Gobierno Nacional República de Panamá.',
      link:
        'https://www.sdgfund.org/sites/default/files/ENV_GUIA_Panam_Promotor%20Comunitario%20Ambiental.pdf',
    },
    {
      referencia:
        'Penzo, W. (2015). <i>Diseño y elaboración de actividades de aprendizaje</i>. Universitat de Barcelona.',
      link:
        'https://diposit.ub.edu/dspace/bitstream/2445/8448/6/Elaboracion-actividades-aprendizaje-4.pdf',
    },
    {
      referencia:
        'Pomachagua, J. (2010). <i>Educación para el desarrollo sostenible</i>. Universidad Nacional del Centro del Perú.',
    },
    {
      referencia:
        'Redacción PQS. (2012). <i>¿Qué debemos entender por inclusión social?</i>. PQS.',
      link:
        'https://www.pqs.pe/actualidad/noticias/que-debemos-entender-por-inclusion-social.',
    },
    {
      referencia:
        'Rengifo, B. (2012). <i>La educación ambiental una estrategia pedagógica Que contribuye a la solución de la problemática Ambiental en Colombia</i>. XII Coloquio Internacional de Geocrítica.',
      link: 'http://www.ub.edu/geocrit/coloquio2012/actas/06-B-Rengifo.pdf',
    },
    {
      referencia:
        'Resolución 444 de 2013. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se establecen los términos de referencia para la elaboración del Estudio Ambiental de Formulación (EAF), de los Macroproyectos de Interés Social Nacional y se adoptan otras disposiciones. Mayo 15 de 2013.',
    },
    {
      referencia:
        'Ruiz, C. (2017). <i>Diseño de proyectos de educación ambiental</i>. Junta de Andalucía.',
    },
    {
      referencia:
        'Pareja, D. (2019). <i>Lo que necesitas saber sobre planes de acción</i>. Pirani.',
      link: 'https://www.piranirisk.com/es/blog/que-es-un-plan-de-accion',
    },
    {
      referencia:
        'Zamalloa, E. y Diaz, J. (2005). <i>Guías Metodológicas para la Gestión Ambiental</i>. Foro Ciudades para la vida.',
      link:
        'https://www.academia.edu/25938537/Gu%C3%ADas_Metodol%C3%B3gicas_para_la_Gesti%C3%B3n_Ambiental',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructora',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Regional Distrito - Capital Centro de Gestión Industrial',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Evaluador y diseñador instruccional',
          centro: 'Regional Distrito - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima – Centro Agropecuario La Granja',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
