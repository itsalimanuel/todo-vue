<script>
import addTask from "./components/addTask.vue";
import editTask from "./components/editTask.vue";

export default {
  components: {
    addTask,
    editTask,
  },
  data() {
    return {
      searchKey: "",
      showActions: false,
      items: this.$store.state.tasks.tasks
        ? this.$store.state.tasks.tasks.map((item) => ({
            ...item,
            showActions: false,
          }))
        : [],
      showAddTask: false,
      showTaskById: false,
      task: {},
    };
  },
  computed: {
    filteredList() {
      return this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.searchKey.toLowerCase());
      });
    },
  },
  methods: {
    showAddCop() {
      this.showAddTask = true;
    },
    closeAdd() {
      this.showAddTask = false;
    },
    closeEdit() {
      this.showTaskById = false;
    },
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
      window.location.reload();
    },
    editTask(id) {
      this.task = this.items.find((item) => item.id === id);
      this.showTaskById = true;
    },
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
      @click="closeAdd"
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
        <div
          :style="{ background: item.color }"
          @mouseover="item.showActions = true"
          @mouseleave="item.showActions = false"
          class="hover:bg-light-blue-500
           relative 
           hover:border-transparent
           hover:shadow-lg group block rounded-lg p-8 border border-gray-200"
        >
          <button
            v-show="item.showActions"
            @click="deleteTask(item.id)"
            class="absolute bottom-5 right-5 bg-white px-1.5 py-1 rounded z-2"
          >
            delete
          </button>
          <button
            @click="editTask(item.id)"
            v-show="item.showActions"
            class="absolute bottom-5 right-20 bg-white px-1.5 py-1 rounded z-2"
          >
            edit
          </button>
          <dl
            class="block sm:block lg:grid xl:block  grid-cols-1 md:grid-rows-2 md:grid-cols-2 items-center"
          >
            <div class="flex justify-between">
              <dt class="sr-only">Title</dt>
              <dd
                class="group-hover:text-black leading-6 font-medium text-black"
              >
                {{ item.name }}
              </dd>
              <dd>{{ item.data }}</dd>
            </div>
            <div>
              <dt class="sr-only">Level</dt>
              <dd
                :class="[
                  { 'bg-pink-800': item.level == 'urgent' },
                  { 'bg-teal-500': item.level == 'normal' },
                  { 'bg-lime-400': item.level == 'slow' },
                ]"
                class="text-white text-sm leading-6 font-medium py-1 px-3 mt-4 rounded-lg w-fit group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4"
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
        </div>
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
    :closeAdd="closeAdd"
  />

  <editTask :closeEdit="closeEdit" v-if="showTaskById" :task="task"></editTask>
</template>
