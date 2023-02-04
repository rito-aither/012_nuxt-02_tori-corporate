<template>
  <nav class="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
    <div class="flex items-center">
      <nuxt-link to="/" class="font-medium text-gray-900">
        Your logo or brand name
      </nuxt-link>
    </div>
    <div class="block md:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500"
        @click="toggleNav"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            :class="{'hidden': open, 'inline': !open}"
            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
          />
        </svg>
      </button>
    </div>
    <div
      :class="{'block': open, 'hidden': !open}"
      class="w-full lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <nuxt-link
          to="/about"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-teal-900 mr-4"
        >
          About
        </nuxt-link>
        <nuxt-link
          to="/contact"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-teal-900"
        >
          Contact
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggleNav() {
      this.open = !this.open;
    }
  }
};
</script>
