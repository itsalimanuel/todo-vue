<script>
import addTask from "./components/addTask.vue";
// eslint-disable-next-line no-unused-vars

export default {
  components: {
    addTask,
  },
  data() {
    return {
      searchKey: "",
      items: this.$store.state.tasks.tasks ? this.$store.state.tasks.tasks : [],
      showAddTask: false,
    };
  },
  computed: {
    filteredList() {
      return this.items.filter(item => {
        return item.name.toLowerCase().includes(this.searchKey.toLowerCase());
      });
    }
  },
  methods: {
    showAddCop() {
      this.showAddTask = true;
    },
    closeWindow() {
      this.showAddTask = false;
    },
    
  },
  created() {
  
  },
};
</script>

<template>
  <section
    data-modal-target="staticModal"
    data-modal-toggle="staticModal"
    class="px-4 sm:px-6 pink-400 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
  >
    <div
      @click="closeWindow"
      v-if="showAddTask"
      class="fixed cursor-pointer inset-0 backdrop-blur-xl z-20"
    ></div>
    <header class="flex items-center justify-between">
      <h2 class="text-lg leading-6 font-medium text-black">To-Do</h2>
      <button
        @click="showAddCop"
        class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-black text-white text-light-blue-600 text-sm font-medium px-4 py-2"
      >
        <svg
          class="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
          width="12"
          height="20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
          />
        </svg>
        Add
      </button>
    </header>
    <form class="relative">
      <svg
        width="20"
        height="20"
        fill="currentColor"
        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        />
      </svg>
      <input
        class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
        type="text"
        v-model="searchKey"
        aria-label="Filter projects"
        placeholder="Filter projects"
      />
    </form>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
    >
      <li v-for="item in filteredList" :key="item.id">
        <a
          :style="{ background: item.color }"
          href=""
          class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-8 border border-gray-200"
        >
          <dl
            class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center"
          >
            <div class="lg:flex lg:justify-between">
              <dt class="sr-only">Title</dt>
              <dd
                class="group-hover:text-black leading-6 font-medium text-black"
              >
                {{ item.name }}
              </dd>
              <dd>{{ item.data }}</dd>
            </div>
            <div>
              <dt class="sr-only">Priority</dt>
              <dd
                class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4"
              >
                {{ item.level }}
              </dd>
            </div>
            <div class="col-start-2 row-start-1 row-end-3">
              <dt class="sr-only">Description</dt>
              <dd
                class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2"
              >
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </a>
      </li>
      <li @click="showAddCop" class="hover:shadow-lg flex rounded-lg">
        <div
          class="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-8"
        >
          New Project
        </div>
      </li>
    </ul>
  </section>
  <addTask
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    v-if="showAddTask"
  />
</template>
