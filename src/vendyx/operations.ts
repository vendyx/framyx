export const SYNCHRONIZE_QUERY = `
  query GetAllProducts {
    products {
      items {
        id
        name
        slug
        enabled
        description
        assets(input: {take: 1}) {
          items {
            id
            source
          }
        }
      }
    }
  }
`;
