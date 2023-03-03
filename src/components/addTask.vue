<!-- eslint-disable vue/valid-v-model -->
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      colors: {
        "red-100": "#fff5f5",
        "red-200": "#fed7d7",
        "red-300": "#feb2b2",
        "red-400": "#fc8181",
        "red-500": "#f56565",
        "red-600": "#e53e3e",
        "red-700": "#c53030",
        "red-800": "#9b2c2c",
        "red-900": "#742a2a",
      },
      task: {
        name: "",
        description: "",
        level: "",
        color: "",
        data: new Date(),
      },
    };
  },
  computed: {
    ...mapGetters(["task"]),
  },
  methods: {
    add() {
      // e.preventDefault();
      if (
        this.task.name == "" ||
        this.task.description == "" ||
        this.task.level == "" ||
        this.task.color == ""
      ) {
        return false;
      } else {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        this.task.data = `${day}/${month}/${year}`;
        this.$store.commit("ADD_TASK", this.task);
      }
    },
  },
  watch: {
    task() {
      console.log(this.$store.state.tasks.tasks);
    },
  },
};
</script>

<template>
  <div
    class="addTask font-black drop-shadow-xl fixed top-0 left-0 overflow-hidden z-30 bg-blue-800 lg:w-1/3 lg:h-screen rounded-r-lg"
  >
    <div
      class="p-4 text-slate-50 font-black border-b-2 justify-between flex"
      @click="close"
    >
      <h3>Add Task</h3>
      <dd>X</dd>
    </div>

    <div class="block">
      <form class="p-4 flex flex-col">
        <label class="block">
          <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 text-slate-50 block text-sm font-medium"
          >
            Task's name
          </span>
          <input
            required
            type="text"
            name="name"
            v-model="task.name"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Task Name"
          />
        </label>
        <label class="block mt-4">
          <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 text-slate-50 block text-sm font-medium"
          >
            Task's name
          </span>
          <textarea
            required
            v-model="task.description"
            name="textarea"
            class="mt-1 px-3 resize-none rounded-md py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Task Name"
          />
        </label>
        <label class="block mt-4">
          <span
            class="after:content-['*'] after:ml-0.5 after:text-red-500 text-slate-50 block text-sm font-medium"
          >
            Task's name
          </span>
          <select
            v-model="task.level"
            required
            class="w-full p-2 rounded"
            name="Priority"
            id="Priority"
          >
            <option value="urgent">urgent</option>
            <option value="normal">normal</option>
            <option value="slow">slow</option>
          </select>
        </label>
        <label class="block mt-4">
          <span
            class="after:content-['*'] pink-400 after:ml-0.5 after:text-red-500 text-slate-50 block text-sm font-medium"
          >
            Color
          </span>
          <select
            required
            v-model="task.color"
            class="w-full pink-400 p-2 rounded"
            name="color"
            id="color"
          >
            <template v-for="(name, value) in colors" :key="value">
              <option :class="'bg-' + value" :value="name">
                {{ value }}
              </option>
            </template>
          </select>
        </label>
        <button
          class="h-10 mt-12 px-6 font-semibold rounded-md bg-black text-white"
          @click="add"
        >
          add
        </button>
      </form>
    </div>
  </div>
</template>
