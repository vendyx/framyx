import { type CodegenConfig } from '@graphql-codegen/cli';

const GQL_SCHEMA_URL = 'https://vendyx-api.up.railway.app/shop-api';

const config: CodegenConfig = {
  schema: GQL_SCHEMA_URL,
  documents: ['./src/vendyx/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/vendyx/codegen/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
      },
      config: {
        documentMode: 'string'
      }
    }
  }
};

export default config;
