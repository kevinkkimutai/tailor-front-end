<template>
   <!-- Section: Design Block -->
<section class="text-center lg:text-left">

  <!-- Jumbotron -->
  <div class="container text-center lg:text-left xl:px-32">
    <div class="grid items-center lg:grid-cols-2">
      <div class="me- lg:mb-2 ">
        <h2 class="text-center pt-6 mb-16 text-4xl font-bolder text-blue-900 headtitle" data-text="KimsTailor's">KimsTailor's</h2>
        <div
          class="relative z-[1]  block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
          <h2 class="mb-6 text-4xl font-bold text-black">Why is it so great?</h2>
          <p class="mb-12 text-neutral-500 dark:text-neutral-300">
            KimsTailor's is one of the best tailor and boutique management app in kenya and in the near 
            future probably diverse across africa. This is a sysyem that hekps you manage all you stocks and orders.
          </p>

          <div class="grid gap-x-6 md:grid-cols-3">
            <div class="mb-1 md:mb-0">
              <h2 class="text-green-500 mb-4 text-3xl font-bold">10%</h2>
              <h5 class="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Less sugar
              </h5>
            </div>

            <div class="mb-12 md:mb-0">
              <h2 class="text-green-500 mb-4 text-3xl font-bold">70%</h2>
              <h5 class="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                More flavor
              </h5>
            </div>

            <div class="">
              <h2 class="text-green-500 mb-4 text-3xl font-bold">0%</h2>
              <h5 class="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Gluten
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/088.jpg"
          class="fancy-border-radius rotate-lg-6 w-full shadow-lg dark:shadow-black/20" alt="" />
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</section>
<!-- Section: Design Block -->
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
@media (min-width: 992px) {
      .rotate-lg-6 {
        transform: rotate(6deg);
      }

    }

    /* These are the KEY styles - you can add them directly to any object you want in your project */
    .fancy-border-radius {
      border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;
    }
    .headtitle {
      font-size: 55px;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      color: transparent;
      color: rgb(35, 35, 234);
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgb(0, 255, 13);
      text-align: center;
      position: relative;
      font-family:'Monotype Corsiva','Apple Chancery','ITC Zapf Chancery','URW Chancery L',cursive;
    
     
    }


</style>