<template>
  <div>
    <h1>Create Note</h1>
    
    <label for="title">Title:</label>
    <input v-model="note.title" id="title" />

    <label for="description">Description:</label>
    <input v-model="note.description" id="description" />

    <label for="body">Body:</label>
    <textarea v-model="note.body" id="body"></textarea>

    <label for="tags">Tags (separated by commas):</label>
    <input v-model="tagsInput" id="tags" />

    <button @click="submitNote">Submit</button>
    
    <p v-if="error">{{ error }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { API, graphqlOperation } from 'aws-amplify';
import { createNote, createTag, createNoteTag } from '~/src/graphql/mutations'; 
import { listTags } from '~/src/graphql/queries';

const note = ref({ title: '', description: '', body: '' });
const tagsInput = ref('');
const error = ref(null);

const submitNote = async () => {
  try {
    const createdNote = await API.graphql(graphqlOperation(createNote, { input: note.value }));
    const tagsArray = tagsInput.value.split(',').map(tag => tag.trim());

    for (const tagLabel of tagsArray) {
      let tag;
      console.log({tagLabel});
      const existingTags = await API.graphql(graphqlOperation(listTags, { filter: { label: { eq: tagLabel } } }));
      console.log({existingTags});

      if (existingTags.data.listTags.items.length > 0) {
        tag = existingTags.data.listTags.items[0];
      } else {
        tag = await API.graphql(graphqlOperation(createTag, { input: { label: tagLabel } }));
        tag = tag.data.createTag;
      }
      console.log({tag});

      const res  = await API.graphql(graphqlOperation(createNoteTag, { input: { noteId: createdNote.data.createNote.id, tagId: tag.id } }));
      console.log({res});
    }

    note.value = { title: '', description: '', body: '' };
    tagsInput.value = '';
  } catch (err) {
    error.value = err.message || 'An error occurred';
  }
};
</script>