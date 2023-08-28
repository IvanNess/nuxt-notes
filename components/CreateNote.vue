<template>
  <div>
    <h2>Create a New Note</h2>
    <form @submit.prevent="createNote">
      <div>
        <label for="title">Title:</label>
        <input v-model="title" type="text" id="title" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <input v-model="description" type="text" id="description" />
      </div>
      <div>
        <label for="body">Body:</label>
        <textarea v-model="body" id="body" required></textarea>
      </div>
      <button type="submit">Create Note</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { API } from '@aws-amplify/api'
import { createNote as createNoteMutation } from '~/src/graphql/mutations'

const title = ref('')
const description = ref('')
const body = ref('')

async function createNote() {
  if (!title.value || !body.value) return

  const noteDetails = {
    title: title.value,
    description: description.value,
    body: body.value
  }

  try {
    await API.graphql({
      query: createNoteMutation,
      variables: { input: noteDetails }
    })
    title.value = ''
    description.value = ''
    body.value = ''
    alert('Note created successfully!')
  } catch (error) {
    console.error('Error creating note:', error)
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
