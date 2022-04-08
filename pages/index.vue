<template>
  <div>
    <div class="h-screen bg-hero bg-no-repeat bg-contain bg-right-bottom">
      <div class="container mx-auto">
        <div class="py-7 flex justify-between items-center">
          <a href="#">
            <img
              src="../static/logo-horizontal.svg"
              alt="logo esteem club"
              class="h-10"
            />
          </a>

          <div class="flex flex-row items-center">
            
            <a
              href="https://opensea.io/collection/esteemclub"
              target="_blank"
              class="
                font-semibold
                text-white text-sm
                px-6
                py-3
                rounded-md
                bg-blue-500
                active:bg-blue-600
              "
              >OpenSea</a
            >
          </div>
        </div>
      </div>
      <div class="container mx-auto py-20">
        <div class="grid grid-cols-2 grid-flow-col">
          <div>
            <h1 class="font-semibold text-3xl md:text-6xl mb-11">100+ collectible NFTs</h1>
            <p class="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Labore
              et dolore magna aliqua.
            </p>

            <div class="pt-20 flex flex-row items-center">
              <a
                href="https://opensea.io/collection/esteemclub"
                target="_blank"
                class="
                  font-semibold
                  text-white text-sm
                  px-6
                  py-3
                  rounded-md
                  bg-blue-500
                  active:bg-blue-600
                  mr-9
                "
                >OpenSea</a
              >
              <a href="#" class="font-semibold text-sm">See Roadmap</a>
            </div>

            <div class="pt-48 flex flex-col">
              <span class="text-sm">Stay tuned</span>
              <div class="pt-3 flex flex-nowrap">
                <a
                  href="https://www.instagram.com/esteemclub/"
                  target="_blank"
                  class="mr-2"
                >
                  <img src="../static/instagram.svg" alt="instagram" />
                </a>
                <a
                  href="https://twitter.com/esteem_club"
                  target="_blank"
                  class="mr-2"
                >
                  <img src="../static/twitter.svg" alt="twitter" />
                </a>
                <a
                  href="https://discord.com/invite/KAhEWayP"
                  target="_blank"
                  class="mr-2"
                >
                  <img src="../static/discord.svg" alt="discord" />
                </a>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>

    <!-- <div class="container mx-auto">
      <div class="grid grid-cols-2">
        <div>
          <img src="../static/featured.png" alt="featured" />
        </div>
        <div>
          <h1 class="font-semibold text-4xl">Minting 30 NFTs (0/30)</h1>
          <div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="OpenSea Account" />
            <input type="text" placeholder="Kode Kartu Pelajar" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>