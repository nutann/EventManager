/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      name
      location
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      type
      userName
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        userName
        email
        phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
      id
      vendorCategory
      vendorSubCategory
      createdAt
      updatedAt
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vendorCategory
        vendorSubCategory
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendorCategory = /* GraphQL */ `
  query GetVendorCategory($id: ID!) {
    getVendorCategory(id: $id) {
      id
      vendorType
      vendorSubCategory
      createdAt
      updatedAt
    }
  }
`;
export const listVendorCategories = /* GraphQL */ `
  query ListVendorCategories(
    $filter: ModelVendorCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendorCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        vendorType
        vendorSubCategory
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPasscode = /* GraphQL */ `
  query GetPasscode($id: ID!) {
    getPasscode(id: $id) {
      id
      pass_code
      createdAt
      updatedAt
    }
  }
`;
export const listPasscodes = /* GraphQL */ `
  query ListPasscodes(
    $filter: ModelPasscodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPasscodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pass_code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
