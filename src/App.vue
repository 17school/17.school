<template>
  <div id="app" class="h-full">
    <div
      v-if="modalVisible"
      class="absolute w-full h-full left-0 top-0 z-10 flex justify-center items-center"
      style="background: rgba(0, 0, 0, 0.8)"
      @click="modalVisible=false"
    >
      <div class="clipped bg-gray-100 text-black font-light p-6 m-6 max-w-sm">
        <p>
          Thanks for signing up. We’ll reach out as soon as we start putting
          together the next batch.
        </p>
        <p class="mt-4">Have you checked out our <a href="./blog" class="underline">./blog</a> yet?</p>
      </div>
    </div>


    <div
      class="m-auto w-full h-full flex flex-col justify-between md:justify-center p-6 md:max-w-lg"
    >
      <form ref="form" class="flex flex-col items-center" @submit.prevent="submitForm" name="signups" netlify>
        <input type="hidden" name="form-name" value="signups">

        <div>
          <img alt="17.school logo" src="./assets/17.svg" class="w-16 m-10" />
        </div>

        <p>
          We'll turn you into a developer in 6 months. Pay us nothing till
          you're hired.
        </p>

        <div class="w-full mt-12">
          <input
            name="email"
            type="email"
            placeholder="elon@spacex.com"
            class="w-full placeholder-gray-100 gradient font-light pt-3 pb-3 pl-6 rounded-none border-0 outline-none"
          />
        </div>

        <div class="w-full mt-4">
          <select
            name="country"
            class="w-full gradient font-light pt-3 pb-3 pl-6 rounded-none border-0 outline-none"
          >
            <option value="bh">Bahrain</option>
            <option value="sa">Saudi Arabia</option>
            <option value="ae">UAE</option>
          </select>
        </div>

        <input
          type="submit"
          value="Sign me up"
          class="clipped mt-4 w-full bg-gray-100 rounded-none border-0 uppercase pt-3 pb-3 text-black cursor-pointer"
        />
      </form>

      <div class="md:mt-20 flex flex-col">
        <!-- <a href="/faq">./faq</a> -->
        <div><a href="/blog">./blog</a> <span class="text-gray-100">(soon)</span></div>
        <a href="mailto:hello@17.school">./contact-us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      modalVisible: false,
    };
  },
  components: {},
  methods: {
    submitForm: function() {
       const vm = this
       const form = this.$refs.form
       const params = new URLSearchParams(new FormData(form)).toString()

       fetch(form.action, {
         method: 'POST', 
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: params
       }).then(data => {
         console.log(data)
         vm.modalVisible = true
       })
    }
  },
};
</script>

<style>
.gradient {
  background: linear-gradient(90.95deg, #333333 0%, #1a1a1a 99.48%);
}
.clipped {
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
}
</style>
