/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onCreateNote(filter: $filter, owner: $owner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onUpdateNote(filter: $filter, owner: $owner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onDeleteNote(filter: $filter, owner: $owner) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag(
    $filter: ModelSubscriptionTagFilterInput
    $owner: String
  ) {
    onCreateTag(filter: $filter, owner: $owner) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag(
    $filter: ModelSubscriptionTagFilterInput
    $owner: String
  ) {
    onUpdateTag(filter: $filter, owner: $owner) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag(
    $filter: ModelSubscriptionTagFilterInput
    $owner: String
  ) {
    onDeleteTag(filter: $filter, owner: $owner) {
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
export const onCreateNoteTag = /* GraphQL */ `
  subscription OnCreateNoteTag(
    $filter: ModelSubscriptionNoteTagFilterInput
    $owner: String
  ) {
    onCreateNoteTag(filter: $filter, owner: $owner) {
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
export const onUpdateNoteTag = /* GraphQL */ `
  subscription OnUpdateNoteTag(
    $filter: ModelSubscriptionNoteTagFilterInput
    $owner: String
  ) {
    onUpdateNoteTag(filter: $filter, owner: $owner) {
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
export const onDeleteNoteTag = /* GraphQL */ `
  subscription OnDeleteNoteTag(
    $filter: ModelSubscriptionNoteTagFilterInput
    $owner: String
  ) {
    onDeleteNoteTag(filter: $filter, owner: $owner) {
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
