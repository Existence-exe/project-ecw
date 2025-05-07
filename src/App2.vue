<script setup>
import { ref, onMounted } from "vue";

const name_list = ref(["hello", "hi", "hello bye"]);
const status = ref(true);
const newItem = ref("");

const toggleStatus = () => {
  status.value = !status.value;
};

const addItem = () => {
  if (newItem.value.trim() !== "") {
    name_list.value.push(newItem.value);
    newItem.value = "";
  }
};

const eraseItem = (index) => {
  name_list.value.pop(index.value);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    name_list.value = data.map((item) => item.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})
</script>

<template>
  <h1 v-if="status">testing</h1>
  <form @submit.prevent="addItem">
    <label for="newItem">Add Item</label>
    <input type="text" id="newItem" name="newItem" v-model="newItem" />
    <button type="submit">Submit</button>
  </form>
  <h3>LIST :</h3>
  <ul>
    <li v-for="(name, index) in name_list" :key="name">
      <span>
        {{ name }}
      </span>
      <button @click="eraseItem(index)">🗑️</button>
    </li>
  </ul>
  <button @click="toggleStatus">Change status</button>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
