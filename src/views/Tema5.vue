<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Promotoría ambiental

    .row.justify-content-center.mb-5           
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png')
      .col-lg-6.my-3
        .bg18.h-100.p-4.j
          p(data-aos="fade-down").mb-0 La promotoría ambiental se convierte en la herramienta básica e inclusiva para fortalecer la transferencia del conocimiento y la aplicación de las estrategias de comunicación y educación en el ámbito ambiental. 
            br
            br
            | Es, desde luego, un recurso de promoción social y comunitaria que potencia las oportunidades, tanto de crecimiento de las comunidades como de los entornos naturales donde estas habitan y se desarrollan.        

    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1 Importancia de la promotoría ambiental  

    p(data-aos="fade-down").mb-5 La promotoría ambiental se convierte en un aspecto básico y fundamental de participación de sociedad para interactuar con el medio ambiente, la sociedad y la cultura, así lo define la Dirección General de Educación, Ciudadanía e Información Ambiental. 

    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/48.png", alt="alt")
          .crd_hover_txt--body.bg19
            h4.mb-3 Participación ciudadana
            p.mb-0 “Es un mecanismo formal de participación ciudadana que las municipalidades promueven a nivel nacional para canalizar la intervención de las personas interesadas en el mejoramiento ambiental efectivo de sus localidades, fortaleciendo así el liderazgo comunitario para que las municipalidades puedan cumplir mejor con sus funciones ambientales, entre ellas, las de difundir información y educar a los vecinos, ejecutar actividades puntuales o pequeños proyectos de mejoramiento ambiental, participar en campañas preventivas o promocionales o, en general, hacer que las políticas o instrumentos de gestión municipales sean accesibles y aplicables a escala de los barrios, las familias y las personas”. 

      .col-xl-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-right")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/49.png", alt="alt")
          .crd_hover_txt--body.bg20
            h4.mb-3 Liderazgo comunitario
            p.mb-0 “La promotoría ambiental comunitaria contribuye a fortalecer el liderazgo comunitario e identidad colectiva para incidir en la mejora de las condiciones de vida de la comunidad, reforzando su sentido de pertenencia para motivarlos a la acción. Adicionalmente, también aporta al control público (de los ciudadanos, vecinos o comuneros) sobre la gestión ambiental local (pública o privada), sea vía alertas ambientales (preventivas de riesgos o problemas), denuncias ambientales (por posibles incumplimientos, faltas, infracciones o hasta posibles delitos) o, de modo proactivo, propone iniciativas o ideas de proyectos”.  

    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 La promotoría ambiental en Colombia 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/50.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 El liderazgo que abandera el Ministerio de Ambiente y Desarrollo Sostenible (MADS) desarrolla activamente el programa de promotores ambientales comunitarios, y define la promotoría ambiental como “una herramienta para el cumplimiento de la estrategia contenida en la Política Nacional de Educación Ambiental denominada ‘Formación de Educadores y Dinamizadores Ambientales’”, convirtiéndose en el procedimiento que permite implementar programas de capacitación y formación.      

    .bg4.p-4(data-aos="fade-right")  
      TabsA.color-acento-botones
        .tarjeta.color-acento-botones--borde.p-4(titulo="Desarrollo sostenible")
          .row.justify-content-center.align-items-start
            .col-lg-7
              p.mb-0 El objetivo principal de este procedimiento es promover y cualificar la participación ciudadana en los procesos de planificación, gestión y seguimiento de las políticas, planes, programas y proyectos que orientan el desarrollo sostenible y la educación ambiental, tanto en lo local como en lo regional, dentro de los lineamientos del Desarrollo Sostenible.
            .col-lg-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.png')   
        .tarjeta.color-acento-botones--borde.p-4(titulo="Sensibilización de<br> comunidades")
          .row.justify-content-center.align-items-start
            .col-lg-7
              p.mb-0 Para el Ministerio de Ambiente y Desarrollo Sostenible, los promotores ambientales comunitarios se convierten en ejes articuladores de las estrategias de educación ambiental, son líderes comunitarios y desarrollan proyectos y programas de apoyo a sus comunidades, generalmente, enmarcados por procesos de sensibilización y educación a sus comunidades. 
            .col-lg-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.png')  
        .tarjeta.color-acento-botones--borde.p-4(titulo="Participación ciudadana")
          .row.justify-content-center.align-items-start
            .col-lg-7
              p.mb-0 “Su quehacer se enmarca en la participación ciudadana, el control social a la gestión ambiental, la organización de sus comunidades en torno a la solución de las problemáticas ambientales, la preservación de las tradiciones culturales, la formulación de proyectos ciudadanos de educación ambiental, socio ambientales y de Educación Ambiental”. 
            .col-lg-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.png')

    Separador 
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.3 Perfil del promotor

    p(data-aos="fade-down").mb-5 El Programa Nacional de Promotoría Ambiental Comunitaria (MADS, 2020) establece el perfil del promotor como un líder con gran sensibilidad y responsabilidad social frente al desarrollo sostenible de su localidad y su región.  

    .row.justify-content-center.align-items-center.bg14.mb-5
      .col-lg-6.j(data-aos="fade-down")
        .p-4
          p.mb-0 #[b Es una persona cuyo interés por la comunidad y por la solución de sus problemas sociales lo han constituido en un sujeto respetado y reconocido por la localidad en la que habita.] Se destaca por su vocación de servicio, por su saber y conocimiento espontáneo, que le permiten dar respuestas y proponer fórmulas de encuentro para conciliar los intereses de distintos actores sociales. 
        
      .col-lg-6.p-0
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/54.png') 

    Separador 
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.4 Funciones

    p(data-aos="fade-down").mb-5 Dentro de las funciones que se establecen para quienes van a desempeñar como promotores ambientales, se destacan las siguientes características:

    .row.justify-content-center.align-items-start.bg4.mb-5
      .col-lg-4.p-0
        img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.png')      
      .col-lg-8(data-aos="fade-down")
        .p-4
          ol.lista-ol--cuadro(data-aos="fade-left")
            li.mb-4 
              .lista-ol--cuadro__vineta.c1
                span 1
              | Conocer y difundir la Política Nacional de Educación Ambiental y sus estrategias.
        
            li.mb-4 
              .lista-ol--cuadro__vineta.c1
                span 2
              | Desarrollar procesos de gestión para la sensibilización, educación y capacitación comunitaria. 
            li.mb-4 
              .lista-ol--cuadro__vineta.c1
                span 3
              | Articulación de organizaciones sociales a los procesos ambientales locales y regionales.
            li.mb-4 
              .lista-ol--cuadro__vineta.c1
                span 4
              | Estimular el fortalecimiento de la participación ciudadana y la capacidad organizativa de la comunidad.  
            li.mb-4 
              .lista-ol--cuadro__vineta.c1
                span 5
              | Ser intermediario de la comunidad ante las instituciones. 
            li.mb-4 
              .lista-ol--cuadro__vineta.c1
                span 6
              | Participar en los procesos de planeación de la gestión ambiental (PGAR, PGIR, PAT, SIGAM).  
            li 
              .lista-ol--cuadro__vineta.c1
                span 7
              | Participar en las diferentes instancias de participación ciudadana generadas por las entidades municipales.  
      .col-lg-10.my-4(data-aos="fade-down")
        ol.lista-ol--cuadro(data-aos="fade-left")
          li.mb-4 
            .lista-ol--cuadro__vineta.c1
              span 8
            | El Ministerio de Ambiente en Colombia posee una Red Nacional de Promotores Ambientales Comunitarios, la cual está integrada por todos los ciudadanos y ciudadanas que se han capacitado como promotores ambientales comunitarios en todo el país. 
          li 
            .lista-ol--cuadro__vineta.c1
              span 9
            | Pueden hacer parte, igualmente, los directores y coordinadores de Educación Ambiental y Promotoría Ambiental Comunitaria de las Corporaciones Autónomas Regionales, de las Autoridades Ambientales Urbanas y del Sistema Nacional de Parques Nacionales Naturales, los líderes comunitarios que se inscriban, las organizaciones que se han gestado como producto de los procesos de trabajo y desarrollo de las funciones de los promotores ambientales comunitarios. (MADS 2020).

    Separador 
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.5 Promotor comunitario 
    .bg5.p-4
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          p(data-aos="fade-down").mb-0 Según la formación de promotores y promotoras comunitarios en la cuenca del río Tabasará, la importancia del promotor o promotora ambiental radica, primordialmente, en el compromiso y la interacción que el líder ambiental genera intrínsecamente con la comunidad o población objetivo. 

    TabsB.color-secundario.mb-5
      .py-4.py-md-5.bg16(titulo="Significado")
        .px-5
          .row.justify-content-center.align-items-center    
            .col-lg-5.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/56.png')
            .col-lg-5.my-3
              .bgw.p-3.brad
                h4 Significado 
                p.mb-0 La guía para la promotoría y promotor comunitario ambiental establece el significado del promotor ambiental: “es aquella persona que acompaña a un grupo, a una comunidad, a una organización comunitaria, facilitando procesos de desarrollo integral individual y colectivo.  
      .py-4.py-md-5.bg16(titulo="Individuo capacitado")
        .px-5
          .row.justify-content-center.align-items-center    
            .col-lg-5.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/57.png')
            .col-lg-5.my-3
              .bgw.p-3.brad
                h4 Individuo capacitado
                p.mb-0 “El promotor tiene relaciones establecidas dentro de la comunidad y comprende a la gente de la comunidad y la situación en la que viven, porque es uno de ellos. Esto facilita la comunicación con la gente de la comunidad”, principio fundamental del proceso de transferencia en la formación ambiental en comunidad. (ODESCA, 2012, p. 6)   
      .py-4.py-md-5.bg16(titulo="Soporte y complemento")
        .px-5
          .row.justify-content-center.align-items-center    
            .col-lg-5.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/58.png')
            .col-lg-5.my-3
              .bgw.p-3.brad
                h4 Soporte y complemento
                p.mb-0 El promotor ambiental es un soporte o complemento del papel técnico que realizan profesionales en el área ambiental.
      .py-4.py-md-5.bg16(titulo="Es uno de ellos")
        .px-5
          .row.justify-content-center.align-items-center    
            .col-lg-5.my-3 
              img.img-a.img-t(src='@/assets/curso/temas/59.png')
            .col-lg-5.my-3
              .bgw.p-3.brad
                h4 Es uno de ellos
                p.mb-0 “El promotor tiene relaciones establecidas dentro de la comunidad y comprende a la gente de la comunidad y la situación en la que viven, porque es uno de ellos. Esto facilita la comunicación con la gente de la comunidad”, principio fundamental del proceso de transferencia en la formación ambiental en comunidad. (ODESCA, 2012, p. 6)  

    Separador 
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.6 Los roles del promotor ambiental
      
    p(data-aos="fade-down").mb-5 Para tener un compromiso con la formación que se imparte, acerca de los conocimientos ambientales que ejecuta el promotor ambiental, se inicia principalmente en su núcleo familiar, trascendiendo en la comunidad cercana y en la sociedad. La guía para la promotoría y promotor comunitario ambiental establece definidas responsabilidades que incorpora en su quehacer: 

    .tarjeta.tarjeta-verde.p-4(data-aos="fade-right") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Ser consejero del grupo 
            p “Deberá fortalecer el espíritu de iniciativa, las capacidades de organización y de planificación de su comunidad; gestionar acciones que permitan el mejoramiento socioeconómico de los miembros de la comunidad; promover que las organizaciones acuerden acciones de apoyo para la ejecución de obras de beneficio comunal; exponer y difundir opciones tecnológicas social y ambientalmente acordes con las necesidades y problemas de sus comunidades”. (ODESCA, 2012, p. 6-7).
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/60.png', alt='')  
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Formador participativo:  
            p Es un proceso por el cual se orienta el desarrollo del territorio y se encuentra “Deberá transferir los conocimientos y experiencias a las personas de las comunidades (de forma tal) que les permita ir ampliando sus conocimientos; propiciar la formación de los grupos que sean necesarios para la formulación y ejecución de proyectos; impulsar procesos de participación y capacitación comunitaria a partir de la difusión y promoción en sus comunidades”. (ODESCA, 2012, p. 6-7).fundamentado en tres principios, de acuerdo con la Ley 388 de 1997, así:
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/61.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Agente de enlace: 
            p “Deberá facilitar la comunicación entre los grupos y los servicios de desarrollo del Gobierno o de las organizaciones no gubernamentales (ONG), servicios de extensión y las agencias que suministran insumos; coordinar con líderes y autoridades locales, así como instituciones públicas, para motivar su participación y colaboración en los proyectos; manejar conflictos; velar por el buen uso y mantenimiento del ambiente donde se desempeña; mantenerse informado y compartir información relevante con la comunidad, directivas de organizaciones comunitarias y autoridades locales”. (ODESCA, 2012, p. 6-7).
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/62.png', alt='')                                                          
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
