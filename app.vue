<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>
<template>
  <div>
    <Authenticator>
      <template v-slot="{ user, signOut }">
        <h1>Hello {{ user.username }}!</h1>
        <button @click="signOut">Sign Out</button>
        <CreateNoteWithTags/>
        <NoteList/>
      </template>
    </Authenticator>
  </div>
</template>
<style>
[data-amplify-router]{
  margin-top: 60px;
}
.amplify-authenticator__tabs{
  margin-top: 20px;
}
</style>