/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      title
      description
      body
      tags {
        items {
          id
          noteId
          tagId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      title
      description
      body
      tags {
        items {
          id
          noteId
          tagId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      title
      description
      body
      tags {
        items {
          id
          noteId
          tagId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      label
      notes {
        items {
          id
          noteId
          tagId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      label
      notes {
        items {
          id
          noteId
          tagId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      label
      notes {
        items {
          id
          noteId
          tagId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createNoteTag = /* GraphQL */ `
  mutation CreateNoteTag(
    $input: CreateNoteTagInput!
    $condition: ModelNoteTagConditionInput
  ) {
    createNoteTag(input: $input, condition: $condition) {
      id
      noteId
      tagId
      note {
        id
        title
        description
        body
        tags {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      tag {
        id
        label
        notes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateNoteTag = /* GraphQL */ `
  mutation UpdateNoteTag(
    $input: UpdateNoteTagInput!
    $condition: ModelNoteTagConditionInput
  ) {
    updateNoteTag(input: $input, condition: $condition) {
      id
      noteId
      tagId
      note {
        id
        title
        description
        body
        tags {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      tag {
        id
        label
        notes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteNoteTag = /* GraphQL */ `
  mutation DeleteNoteTag(
    $input: DeleteNoteTagInput!
    $condition: ModelNoteTagConditionInput
  ) {
    deleteNoteTag(input: $input, condition: $condition) {
      id
      noteId
      tagId
      note {
        id
        title
        description
        body
        tags {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      tag {
        id
        label
        notes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
