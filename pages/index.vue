<template>
  <div>
    <div class="grid grid-cols-2">
      <div class="p-0">
        <img
          src="../static/hero-1.svg"
          alt="esteem hero image"
          class="object-cover"
        />
      </div>

      <div class="flex items-end pb-8">
        <h1 class="text-white md:text-7xl lg:text-9xl -rotate-6">
          ESTEEM CLUB
        </h1>
      </div>
    </div>

    <div
      class="flex items-center bg-yellow-300 md:py-3 lg:py-3 -rotate-6 w-screen"
    >
      <marquee>
        <span
          v-for="(word, index) in ribbon"
          :key="index"
          class="md:text-3xl lg:text-5xl"
        >
          {{ word }}
        </span>
      </marquee>
    </div>

    <div class="grid grid-cols-2 bg-hero-2 bg-cover bg-center bg-fixed pt-10">
      <div class="p-0 flex flex-row items-end justify-start">
        <img src="../static/hero-2.svg" alt="esteem hero image" />
      </div>

      <div class="p-0 flex flex-row items-end justify-end">
        <img src="../static/hero-4.svg" alt="esteem hero image" />

        <img src="../static/hero-3.svg" alt="esteem hero image" />
      </div>
    </div>

    <!-- <div class="flex items-center bg-yellow-300 md:py-3 lg:py-3 w-screen">
      <marquee>
        <span
          v-for="(word, index) in ribbon"
          :key="index"
          class="md:text-3xl lg:text-5xl"
        >
          {{ word }}
        </span>
      </marquee>
    </div> -->

    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>
    <div>mantab</div>

    <div
      class="
        flex
        align-middle
        justify-center
        bg-hero-3 bg-cover bg-center
        py-20
      "
    >
      <h1 class="text-white md:text-5xl lg:text-7xl">
        More Features Coming Soon.
      </h1>
    </div>

    <footer>
      <div class="text-center p-6 bg-white">
        <span>Copyright &copy; 2022 Esteem Club. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      ribbon: ['★★', 'ESTEEM CLUB', '★★'],
    }
  },
}
</script>