<template>
  <div>
    <h1>Notes List</h1>
    <ul v-if="notes">
      <li v-for="note in notes" :key="note.id">
        <h2>{{ note.title }}</h2>
        <p>{{ note.description }}</p>
        <!-- You can add other fields like note.body or display tags here -->
      </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { API, graphqlOperation } from 'aws-amplify';
import { listNotes } from '~/src/graphql/queries'; 

const notes = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchNotes = async () => {
  try {
    const result = await API.graphql(graphqlOperation(listNotes));
    if (result.data && result.data.listNotes) {
      notes.value = result.data.listNotes.items;
    }
  } catch (err) {
    error.value = err.message || 'An error occurred';
  } finally {
    loading.value = false;
  }
};

fetchNotes();
</script>
