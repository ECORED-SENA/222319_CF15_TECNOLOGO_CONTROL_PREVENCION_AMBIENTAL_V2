<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Técnicas LNC: tipos, recursos y materiales
    p(data-aos="fade-down").mb-5 Reconocido el hecho de que la estrategia empresarial exige el planteamiento de un programa de capacitación, el primer paso a seguir es identificar las necesidades de capacitación, para elaborar programas de entrenamiento y formación profesional, es decir, identificar las discrepancias entre lo que es y lo que debería ser (Aguilar, 2010). El LCN, Levantamiento de Necesidades de Capacitación, constituye la primera fase del ciclo de formación y determina todas las fases subsecuentes del proceso de capacitación (Barros, 2009). 
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/46.png')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .row.justify-content-between.mx-0.bg13.mb-3(data-aos="flip-down")
          .col-lg-auto.p-0
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')
          .col
            .p-3.my-4.me-2
              .row.justify-content-center.align-items-center          
                .col.my-3            
                  h5(data-aos="fade-down") ¡Atención! 
                  p(data-aos="fade-down").mb-0 Para conocer a profundidad este tema y sus especificidades, se le invita a explorar el anexo Técnicas LNC: tipos, recursos y materiales. El estudio de este apartado es de suma importancia para la asimilación de los elementos vistos con anterioridad y los que vienen a continuación en este componente formativo.  
                .col-lg-auto.my-3
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=10_0nVuXZqo" target="_blank" type="application/pdf")
                    span Ver video
                    i.fab.fa-youtube      

</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
