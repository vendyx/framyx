import { graphql } from './codegen';

export const SYNCHRONIZE_QUERY = graphql(`
  query SynchronizeProductsQuery {
    products {
      items {
        id
        name
        slug
        enabled
        description
        assets(input: { take: 1 }) {
          items {
            id
            source
          }
        }
        options {
          id
          name
          values {
            id
            name
          }
        }
        variants {
          items {
            stock
            optionValues {
              id
              name
            }
          }
        }
      }
    }
  }
`);

export const CHECK_QUERY = graphql(`
  query Check {
    products {
      count
    }
  }
`);
