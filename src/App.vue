<template>
  <div
    id="app"
    class="m-auto w-full h-full flex flex-col justify-between md:justify-center p-6 md:max-w-lg"
  >
    <form class="flex flex-col items-center">
      <div>
        <img alt="17.school logo" src="./assets/17.svg" class="w-16 m-10" />
      </div>

      <p>
        We'll turn you into a developer in 6 months. Pay us nothing till you're
        hired.
      </p>

      <div class="w-full mt-12">
        <input
          type="email"
          placeholder="elon@spacex.com"
          class="w-full placeholder-gray-100 gradient font-light pt-3 pb-3 pl-6 outline-none"
        />
      </div>

      <div class="w-full mt-4">
        <select
          name="country"
          class="w-full gradient font-light pt-3 pb-3 pl-6 outline-none"
        >
          <option value="bh">Bahrain</option>
          <option value="sa">Saudi Arabia</option>
          <option value="ae">UAE</option>
        </select>
      </div>

      <input
        type="submit"
        value="Count me in"
        class="mt-4 w-full bg-gray-100 rounded-none border-0 uppercase pt-3 pb-3 text-black cursor-pointer"
      />
    </form>

    <div class="md:mt-20 flex flex-col">
      <a href="/faq">./faq</a>
      <a href="/blog">./blog</a>
      <a href="/contact-us">./contact-us</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
};
</script>

<style>
.gradient {
  background: linear-gradient(90.95deg, #333333 0%, #1a1a1a 99.48%);
}
input[type="submit"] {
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
}
</style>
