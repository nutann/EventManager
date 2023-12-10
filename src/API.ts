/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  name: string,
  location: string,
  description: string,
  image?: string | null,
};

export type ModelPostConditionInput = {
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
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

export type Post = {
  __typename: "Post",
  id: string,
  name: string,
  location: string,
  description: string,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePostInput = {
  id: string,
  name?: string | null,
  location?: string | null,
  description?: string | null,
  image?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  type: string,
  userName: string,
  email: string,
  image?: string | null,
  location?: string | null,
  bio?: string | null,
  phone?: string | null,
};

export type ModelUserConditionInput = {
  type?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  location?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  type: string,
  userName: string,
  email: string,
  image?: string | null,
  location?: string | null,
  bio?: string | null,
  phone?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  type?: string | null,
  userName?: string | null,
  email?: string | null,
  image?: string | null,
  location?: string | null,
  bio?: string | null,
  phone?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateVendorInput = {
  id?: string | null,
  userID: string,
  vendorID: string,
  longitude?: string | null,
  latitude?: string | null,
  vendorUserId?: string | null,
  vendorVendorCategoryId?: string | null,
};

export type ModelVendorConditionInput = {
  userID?: ModelIDInput | null,
  vendorID?: ModelIDInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  and?: Array< ModelVendorConditionInput | null > | null,
  or?: Array< ModelVendorConditionInput | null > | null,
  not?: ModelVendorConditionInput | null,
  vendorUserId?: ModelIDInput | null,
  vendorVendorCategoryId?: ModelIDInput | null,
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

export type Vendor = {
  __typename: "Vendor",
  id: string,
  userID: string,
  vendorID: string,
  user?: User | null,
  vendorCategory?: VendorCategory | null,
  longitude?: string | null,
  latitude?: string | null,
  createdAt: string,
  updatedAt: string,
  vendorUserId?: string | null,
  vendorVendorCategoryId?: string | null,
};

export type VendorCategory = {
  __typename: "VendorCategory",
  id: string,
  vendorType: string,
  vendorSubCategory?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVendorInput = {
  id: string,
  userID?: string | null,
  vendorID?: string | null,
  longitude?: string | null,
  latitude?: string | null,
  vendorUserId?: string | null,
  vendorVendorCategoryId?: string | null,
};

export type DeleteVendorInput = {
  id: string,
};

export type CreateVendorCategoryInput = {
  id?: string | null,
  vendorType: string,
  vendorSubCategory?: Array< string | null > | null,
};

export type ModelVendorCategoryConditionInput = {
  vendorType?: ModelStringInput | null,
  vendorSubCategory?: ModelStringInput | null,
  and?: Array< ModelVendorCategoryConditionInput | null > | null,
  or?: Array< ModelVendorCategoryConditionInput | null > | null,
  not?: ModelVendorCategoryConditionInput | null,
};

export type UpdateVendorCategoryInput = {
  id: string,
  vendorType?: string | null,
  vendorSubCategory?: Array< string | null > | null,
};

export type DeleteVendorCategoryInput = {
  id: string,
};

export type CreatePasscodeInput = {
  id?: string | null,
  pass_code?: number | null,
};

export type ModelPasscodeConditionInput = {
  pass_code?: ModelIntInput | null,
  and?: Array< ModelPasscodeConditionInput | null > | null,
  or?: Array< ModelPasscodeConditionInput | null > | null,
  not?: ModelPasscodeConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Passcode = {
  __typename: "Passcode",
  id: string,
  pass_code?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePasscodeInput = {
  id: string,
  pass_code?: number | null,
};

export type DeletePasscodeInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  location?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelVendorFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  vendorID?: ModelIDInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  and?: Array< ModelVendorFilterInput | null > | null,
  or?: Array< ModelVendorFilterInput | null > | null,
  not?: ModelVendorFilterInput | null,
  vendorUserId?: ModelIDInput | null,
  vendorVendorCategoryId?: ModelIDInput | null,
};

export type ModelVendorConnection = {
  __typename: "ModelVendorConnection",
  items:  Array<Vendor | null >,
  nextToken?: string | null,
};

export type ModelVendorCategoryFilterInput = {
  id?: ModelIDInput | null,
  vendorType?: ModelStringInput | null,
  vendorSubCategory?: ModelStringInput | null,
  and?: Array< ModelVendorCategoryFilterInput | null > | null,
  or?: Array< ModelVendorCategoryFilterInput | null > | null,
  not?: ModelVendorCategoryFilterInput | null,
};

export type ModelVendorCategoryConnection = {
  __typename: "ModelVendorCategoryConnection",
  items:  Array<VendorCategory | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPasscodeFilterInput = {
  id?: ModelIDInput | null,
  pass_code?: ModelIntInput | null,
  and?: Array< ModelPasscodeFilterInput | null > | null,
  or?: Array< ModelPasscodeFilterInput | null > | null,
  not?: ModelPasscodeFilterInput | null,
};

export type ModelPasscodeConnection = {
  __typename: "ModelPasscodeConnection",
  items:  Array<Passcode | null >,
  nextToken?: string | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    name: string,
    location: string,
    description: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    location: string,
    description: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    location: string,
    description: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    type: string,
    userName: string,
    email: string,
    image?: string | null,
    location?: string | null,
    bio?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    type: string,
    userName: string,
    email: string,
    image?: string | null,
    location?: string | null,
    bio?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    type: string,
    userName: string,
    email: string,
    image?: string | null,
    location?: string | null,
    bio?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVendorMutationVariables = {
  input: CreateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type CreateVendorMutation = {
  createVendor?:  {
    __typename: "Vendor",
    id: string,
    userID: string,
    vendorID: string,
    user?:  {
      __typename: "User",
      id: string,
      type: string,
      userName: string,
      email: string,
      image?: string | null,
      location?: string | null,
      bio?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    vendorCategory?:  {
      __typename: "VendorCategory",
      id: string,
      vendorType: string,
      vendorSubCategory?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    longitude?: string | null,
    latitude?: string | null,
    createdAt: string,
    updatedAt: string,
    vendorUserId?: string | null,
    vendorVendorCategoryId?: string | null,
  } | null,
};

export type UpdateVendorMutationVariables = {
  input: UpdateVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type UpdateVendorMutation = {
  updateVendor?:  {
    __typename: "Vendor",
    id: string,
    userID: string,
    vendorID: string,
    user?:  {
      __typename: "User",
      id: string,
      type: string,
      userName: string,
      email: string,
      image?: string | null,
      location?: string | null,
      bio?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    vendorCategory?:  {
      __typename: "VendorCategory",
      id: string,
      vendorType: string,
      vendorSubCategory?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    longitude?: string | null,
    latitude?: string | null,
    createdAt: string,
    updatedAt: string,
    vendorUserId?: string | null,
    vendorVendorCategoryId?: string | null,
  } | null,
};

export type DeleteVendorMutationVariables = {
  input: DeleteVendorInput,
  condition?: ModelVendorConditionInput | null,
};

export type DeleteVendorMutation = {
  deleteVendor?:  {
    __typename: "Vendor",
    id: string,
    userID: string,
    vendorID: string,
    user?:  {
      __typename: "User",
      id: string,
      type: string,
      userName: string,
      email: string,
      image?: string | null,
      location?: string | null,
      bio?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    vendorCategory?:  {
      __typename: "VendorCategory",
      id: string,
      vendorType: string,
      vendorSubCategory?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    longitude?: string | null,
    latitude?: string | null,
    createdAt: string,
    updatedAt: string,
    vendorUserId?: string | null,
    vendorVendorCategoryId?: string | null,
  } | null,
};

export type CreateVendorCategoryMutationVariables = {
  input: CreateVendorCategoryInput,
  condition?: ModelVendorCategoryConditionInput | null,
};

export type CreateVendorCategoryMutation = {
  createVendorCategory?:  {
    __typename: "VendorCategory",
    id: string,
    vendorType: string,
    vendorSubCategory?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVendorCategoryMutationVariables = {
  input: UpdateVendorCategoryInput,
  condition?: ModelVendorCategoryConditionInput | null,
};

export type UpdateVendorCategoryMutation = {
  updateVendorCategory?:  {
    __typename: "VendorCategory",
    id: string,
    vendorType: string,
    vendorSubCategory?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVendorCategoryMutationVariables = {
  input: DeleteVendorCategoryInput,
  condition?: ModelVendorCategoryConditionInput | null,
};

export type DeleteVendorCategoryMutation = {
  deleteVendorCategory?:  {
    __typename: "VendorCategory",
    id: string,
    vendorType: string,
    vendorSubCategory?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePasscodeMutationVariables = {
  input: CreatePasscodeInput,
  condition?: ModelPasscodeConditionInput | null,
};

export type CreatePasscodeMutation = {
  createPasscode?:  {
    __typename: "Passcode",
    id: string,
    pass_code?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePasscodeMutationVariables = {
  input: UpdatePasscodeInput,
  condition?: ModelPasscodeConditionInput | null,
};

export type UpdatePasscodeMutation = {
  updatePasscode?:  {
    __typename: "Passcode",
    id: string,
    pass_code?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePasscodeMutationVariables = {
  input: DeletePasscodeInput,
  condition?: ModelPasscodeConditionInput | null,
};

export type DeletePasscodeMutation = {
  deletePasscode?:  {
    __typename: "Passcode",
    id: string,
    pass_code?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    name: string,
    location: string,
    description: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      name: string,
      location: string,
      description: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    type: string,
    userName: string,
    email: string,
    image?: string | null,
    location?: string | null,
    bio?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      type: string,
      userName: string,
      email: string,
      image?: string | null,
      location?: string | null,
      bio?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVendorQueryVariables = {
  id: string,
};

export type GetVendorQuery = {
  getVendor?:  {
    __typename: "Vendor",
    id: string,
    userID: string,
    vendorID: string,
    user?:  {
      __typename: "User",
      id: string,
      type: string,
      userName: string,
      email: string,
      image?: string | null,
      location?: string | null,
      bio?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    vendorCategory?:  {
      __typename: "VendorCategory",
      id: string,
      vendorType: string,
      vendorSubCategory?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    longitude?: string | null,
    latitude?: string | null,
    createdAt: string,
    updatedAt: string,
    vendorUserId?: string | null,
    vendorVendorCategoryId?: string | null,
  } | null,
};

export type ListVendorsQueryVariables = {
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVendorsQuery = {
  listVendors?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      userID: string,
      vendorID: string,
      longitude?: string | null,
      latitude?: string | null,
      createdAt: string,
      updatedAt: string,
      vendorUserId?: string | null,
      vendorVendorCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVendorCategoryQueryVariables = {
  id: string,
};

export type GetVendorCategoryQuery = {
  getVendorCategory?:  {
    __typename: "VendorCategory",
    id: string,
    vendorType: string,
    vendorSubCategory?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVendorCategoriesQueryVariables = {
  filter?: ModelVendorCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVendorCategoriesQuery = {
  listVendorCategories?:  {
    __typename: "ModelVendorCategoryConnection",
    items:  Array< {
      __typename: "VendorCategory",
      id: string,
      vendorType: string,
      vendorSubCategory?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserbyEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserbyEmailQuery = {
  userbyEmail?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      type: string,
      userName: string,
      email: string,
      image?: string | null,
      location?: string | null,
      bio?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VendorbyUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVendorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VendorbyUserIDQuery = {
  vendorbyUserID?:  {
    __typename: "ModelVendorConnection",
    items:  Array< {
      __typename: "Vendor",
      id: string,
      userID: string,
      vendorID: string,
      longitude?: string | null,
      latitude?: string | null,
      createdAt: string,
      updatedAt: string,
      vendorUserId?: string | null,
      vendorVendorCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPasscodeQueryVariables = {
  id: string,
};

export type GetPasscodeQuery = {
  getPasscode?:  {
    __typename: "Passcode",
    id: string,
    pass_code?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPasscodesQueryVariables = {
  filter?: ModelPasscodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPasscodesQuery = {
  listPasscodes?:  {
    __typename: "ModelPasscodeConnection",
    items:  Array< {
      __typename: "Passcode",
      id: string,
      pass_code?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    location: string,
    description: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    location: string,
    description: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    name: string,
    location: string,
    description: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    type: string,
    userName: string,
    email: string,
    image?: string | null,
    location?: string | null,
    bio?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    type: string,
    userName: string,
    email: string,
    image?: string | null,
    location?: string | null,
    bio?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    type: string,
    userName: string,
    email: string,
    image?: string | null,
    location?: string | null,
    bio?: string | null,
    phone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVendorSubscription = {
  onCreateVendor?:  {
    __typename: "Vendor",
    id: string,
    userID: string,
    vendorID: string,
    user?:  {
      __typename: "User",
      id: string,
      type: string,
      userName: string,
      email: string,
      image?: string | null,
      location?: string | null,
      bio?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    vendorCategory?:  {
      __typename: "VendorCategory",
      id: string,
      vendorType: string,
      vendorSubCategory?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    longitude?: string | null,
    latitude?: string | null,
    createdAt: string,
    updatedAt: string,
    vendorUserId?: string | null,
    vendorVendorCategoryId?: string | null,
  } | null,
};

export type OnUpdateVendorSubscription = {
  onUpdateVendor?:  {
    __typename: "Vendor",
    id: string,
    userID: string,
    vendorID: string,
    user?:  {
      __typename: "User",
      id: string,
      type: string,
      userName: string,
      email: string,
      image?: string | null,
      location?: string | null,
      bio?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    vendorCategory?:  {
      __typename: "VendorCategory",
      id: string,
      vendorType: string,
      vendorSubCategory?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    longitude?: string | null,
    latitude?: string | null,
    createdAt: string,
    updatedAt: string,
    vendorUserId?: string | null,
    vendorVendorCategoryId?: string | null,
  } | null,
};

export type OnDeleteVendorSubscription = {
  onDeleteVendor?:  {
    __typename: "Vendor",
    id: string,
    userID: string,
    vendorID: string,
    user?:  {
      __typename: "User",
      id: string,
      type: string,
      userName: string,
      email: string,
      image?: string | null,
      location?: string | null,
      bio?: string | null,
      phone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    vendorCategory?:  {
      __typename: "VendorCategory",
      id: string,
      vendorType: string,
      vendorSubCategory?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    longitude?: string | null,
    latitude?: string | null,
    createdAt: string,
    updatedAt: string,
    vendorUserId?: string | null,
    vendorVendorCategoryId?: string | null,
  } | null,
};

export type OnCreateVendorCategorySubscription = {
  onCreateVendorCategory?:  {
    __typename: "VendorCategory",
    id: string,
    vendorType: string,
    vendorSubCategory?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVendorCategorySubscription = {
  onUpdateVendorCategory?:  {
    __typename: "VendorCategory",
    id: string,
    vendorType: string,
    vendorSubCategory?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVendorCategorySubscription = {
  onDeleteVendorCategory?:  {
    __typename: "VendorCategory",
    id: string,
    vendorType: string,
    vendorSubCategory?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePasscodeSubscription = {
  onCreatePasscode?:  {
    __typename: "Passcode",
    id: string,
    pass_code?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePasscodeSubscription = {
  onUpdatePasscode?:  {
    __typename: "Passcode",
    id: string,
    pass_code?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePasscodeSubscription = {
  onDeletePasscode?:  {
    __typename: "Passcode",
    id: string,
    pass_code?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
