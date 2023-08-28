/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $id: ID
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNotes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $id: ID
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTags(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getNoteTag = /* GraphQL */ `
  query GetNoteTag($id: ID!) {
    getNoteTag(id: $id) {
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
export const listNoteTags = /* GraphQL */ `
  query ListNoteTags(
    $id: ID
    $filter: ModelNoteTagFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNoteTags(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        noteId
        tagId
        note {
          id
          title
          description
          body
          createdAt
          updatedAt
          owner
          __typename
        }
        tag {
          id
          label
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
      nextToken
      __typename
    }
  }
`;
export const noteTagsByNoteId = /* GraphQL */ `
  query NoteTagsByNoteId(
    $noteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    noteTagsByNoteId(
      noteId: $noteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        noteId
        tagId
        note {
          id
          title
          description
          body
          createdAt
          updatedAt
          owner
          __typename
        }
        tag {
          id
          label
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
      nextToken
      __typename
    }
  }
`;
export const noteTagsByTagId = /* GraphQL */ `
  query NoteTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    noteTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        noteId
        tagId
        note {
          id
          title
          description
          body
          createdAt
          updatedAt
          owner
          __typename
        }
        tag {
          id
          label
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
      nextToken
      __typename
    }
  }
`;
