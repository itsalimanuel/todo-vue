<script>
export default {
  props: {
    task: {},
    closeEdit: Function,
  },
  data() {
    return {
      data: {
        name: "",
        description: "",
        level: "",
        color: "",
      },
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
    };
  },

  methods: {
    getTask() {
      this.data = {
        name: this.task.name,
        description: this.task.description,
        level: this.task.level,
        color: this.task.color,
      };
    },
    getTaskById(id) {
      return this.$store.state.tasks.tasks.findIndex((task) => task.id === id);
    },
    updateTask(id) {
      const taskId = id;
      const taskIndex = this.getTaskById(taskId);
      if (taskIndex >= 0) {
        const updatedTask = {
          id: taskId,
          data: this.task.data,
          name: this.data.name,
          description: this.data.description,
          level: this.data.level,
          color: this.data.color,
        };
        this.$store.commit("EDIT_TASK", {
          index: taskIndex,
          task: updatedTask,
        });
      }
    },
  },

  created() {
    this.getTask();
    this.getTaskById(this.task.id);
  },
};
</script>

<template>
  <div
    class="drop-shadow-xl fixed top-0 left-0 overflow-hidden z-30 bg-blue-800 max-2xl:w-1/3 max-xl:w-1/2 max-md:w-1/2 max-sm:w-full lg:h-screen rounded-r-lg"
  >
    <div
      class="p-4 text-slate-50 font-black border-b-2 justify-between flex"
      @click="close"
    >
      <h3>Edit Task</h3>
      <dd @click="closeEdit">X</dd>
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
            v-model="data.name"
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
            v-model="data.description"
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
            v-model="data.level"
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
            v-model="data.color"
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
          @click="updateTask(task.id)"
        >
          update
        </button>
      </form>
    </div>
  </div>
</template>
