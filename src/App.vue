<template>
  <div id="app" class="w-full h-full flex flex-col items-center justify-center">
    <div>
      <img alt="17.school logo" src="./assets/17.svg" class="w-16 m-10" />
    </div>

    <form name="get-notified" method="post" data-netlify="true">
      <div class="mt-4 flex flex-row">
        <input
          type="email"
          class="bg-black border-0 outline-none placeholder-gray-600 pt-3 pl-8 pb-3 pr-8 text-gray-200 flex-1"
          placeholder="elon@spacex.com"
        />
        <input type="submit" value="Notify me" class="bg-white pl-10 pr-10 ml-4 border-0 uppercase" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
  }
};
</script>

<style>
input[type=submit] {
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
}
</style>
