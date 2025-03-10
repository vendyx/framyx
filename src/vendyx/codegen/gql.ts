/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query SynchronizeProductsQuery {\n    products {\n      items {\n        id\n        name\n        slug\n        enabled\n        description\n        assets(input: { take: 1 }) {\n          items {\n            id\n            source\n          }\n        }\n        options {\n          id\n          name\n          values {\n            id\n            name\n          }\n        }\n        variants {\n          items {\n            stock\n            optionValues {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.SynchronizeProductsQueryDocument,
    "\n  query Check {\n    products {\n      count\n    }\n  }\n": typeof types.CheckDocument,
};
const documents: Documents = {
    "\n  query SynchronizeProductsQuery {\n    products {\n      items {\n        id\n        name\n        slug\n        enabled\n        description\n        assets(input: { take: 1 }) {\n          items {\n            id\n            source\n          }\n        }\n        options {\n          id\n          name\n          values {\n            id\n            name\n          }\n        }\n        variants {\n          items {\n            stock\n            optionValues {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n": types.SynchronizeProductsQueryDocument,
    "\n  query Check {\n    products {\n      count\n    }\n  }\n": types.CheckDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SynchronizeProductsQuery {\n    products {\n      items {\n        id\n        name\n        slug\n        enabled\n        description\n        assets(input: { take: 1 }) {\n          items {\n            id\n            source\n          }\n        }\n        options {\n          id\n          name\n          values {\n            id\n            name\n          }\n        }\n        variants {\n          items {\n            stock\n            optionValues {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').SynchronizeProductsQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Check {\n    products {\n      count\n    }\n  }\n"): typeof import('./graphql').CheckDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
