/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNoteInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  body: string,
};

export type ModelNoteConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  body?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  title: string,
  description?: string | null,
  body: string,
  tags?: ModelNoteTagConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelNoteTagConnection = {
  __typename: "ModelNoteTagConnection",
  items:  Array<NoteTag | null >,
  nextToken?: string | null,
};

export type NoteTag = {
  __typename: "NoteTag",
  id: string,
  noteId: string,
  tagId: string,
  note: Note,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  label: string,
  notes?: ModelNoteTagConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateNoteInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  body?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  label: string,
};

export type ModelTagConditionInput = {
  label?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  label?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateNoteTagInput = {
  id?: string | null,
  noteId: string,
  tagId: string,
};

export type ModelNoteTagConditionInput = {
  noteId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelNoteTagConditionInput | null > | null,
  or?: Array< ModelNoteTagConditionInput | null > | null,
  not?: ModelNoteTagConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateNoteTagInput = {
  id: string,
  noteId?: string | null,
  tagId?: string | null,
};

export type DeleteNoteTagInput = {
  id: string,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  body?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelNoteTagFilterInput = {
  id?: ModelIDInput | null,
  noteId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelNoteTagFilterInput | null > | null,
  or?: Array< ModelNoteTagFilterInput | null > | null,
  not?: ModelNoteTagFilterInput | null,
};

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  label?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionNoteTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  noteId?: ModelSubscriptionIDInput | null,
  tagId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionNoteTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteTagFilterInput | null > | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    title: string,
    description?: string | null,
    body: string,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    title: string,
    description?: string | null,
    body: string,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    title: string,
    description?: string | null,
    body: string,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateNoteTagMutationVariables = {
  input: CreateNoteTagInput,
  condition?: ModelNoteTagConditionInput | null,
};

export type CreateNoteTagMutation = {
  createNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteId: string,
    tagId: string,
    note:  {
      __typename: "Note",
      id: string,
      title: string,
      description?: string | null,
      body: string,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNoteTagMutationVariables = {
  input: UpdateNoteTagInput,
  condition?: ModelNoteTagConditionInput | null,
};

export type UpdateNoteTagMutation = {
  updateNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteId: string,
    tagId: string,
    note:  {
      __typename: "Note",
      id: string,
      title: string,
      description?: string | null,
      body: string,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNoteTagMutationVariables = {
  input: DeleteNoteTagInput,
  condition?: ModelNoteTagConditionInput | null,
};

export type DeleteNoteTagMutation = {
  deleteNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteId: string,
    tagId: string,
    note:  {
      __typename: "Note",
      id: string,
      title: string,
      description?: string | null,
      body: string,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    title: string,
    description?: string | null,
    body: string,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  id?: string | null,
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      title: string,
      description?: string | null,
      body: string,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTagsQueryVariables = {
  id?: string | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      label: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteTagQueryVariables = {
  id: string,
};

export type GetNoteTagQuery = {
  getNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteId: string,
    tagId: string,
    note:  {
      __typename: "Note",
      id: string,
      title: string,
      description?: string | null,
      body: string,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNoteTagsQueryVariables = {
  id?: string | null,
  filter?: ModelNoteTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListNoteTagsQuery = {
  listNoteTags?:  {
    __typename: "ModelNoteTagConnection",
    items:  Array< {
      __typename: "NoteTag",
      id: string,
      noteId: string,
      tagId: string,
      note:  {
        __typename: "Note",
        id: string,
        title: string,
        description?: string | null,
        body: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NoteTagsByNoteIdQueryVariables = {
  noteId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNoteTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NoteTagsByNoteIdQuery = {
  noteTagsByNoteId?:  {
    __typename: "ModelNoteTagConnection",
    items:  Array< {
      __typename: "NoteTag",
      id: string,
      noteId: string,
      tagId: string,
      note:  {
        __typename: "Note",
        id: string,
        title: string,
        description?: string | null,
        body: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NoteTagsByTagIdQueryVariables = {
  tagId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNoteTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NoteTagsByTagIdQuery = {
  noteTagsByTagId?:  {
    __typename: "ModelNoteTagConnection",
    items:  Array< {
      __typename: "NoteTag",
      id: string,
      noteId: string,
      tagId: string,
      note:  {
        __typename: "Note",
        id: string,
        title: string,
        description?: string | null,
        body: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      tag:  {
        __typename: "Tag",
        id: string,
        label: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    title: string,
    description?: string | null,
    body: string,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    title: string,
    description?: string | null,
    body: string,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    title: string,
    description?: string | null,
    body: string,
    tags?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
  owner?: string | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    label: string,
    notes?:  {
      __typename: "ModelNoteTagConnection",
      items:  Array< {
        __typename: "NoteTag",
        id: string,
        noteId: string,
        tagId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNoteTagSubscriptionVariables = {
  filter?: ModelSubscriptionNoteTagFilterInput | null,
  owner?: string | null,
};

export type OnCreateNoteTagSubscription = {
  onCreateNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteId: string,
    tagId: string,
    note:  {
      __typename: "Note",
      id: string,
      title: string,
      description?: string | null,
      body: string,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNoteTagSubscriptionVariables = {
  filter?: ModelSubscriptionNoteTagFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNoteTagSubscription = {
  onUpdateNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteId: string,
    tagId: string,
    note:  {
      __typename: "Note",
      id: string,
      title: string,
      description?: string | null,
      body: string,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNoteTagSubscriptionVariables = {
  filter?: ModelSubscriptionNoteTagFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNoteTagSubscription = {
  onDeleteNoteTag?:  {
    __typename: "NoteTag",
    id: string,
    noteId: string,
    tagId: string,
    note:  {
      __typename: "Note",
      id: string,
      title: string,
      description?: string | null,
      body: string,
      tags?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      id: string,
      label: string,
      notes?:  {
        __typename: "ModelNoteTagConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
