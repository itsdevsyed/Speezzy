// packages/types/codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';

// The configuration is a plain object that adheres to the CodegenConfig type.
// You don't call CodegenConfig as a function.
const config: CodegenConfig = {
  schema: './src/schema.graphql', // Your GraphQL schema source
  documents: [
    '../apps/web/src/**/*.graphql', // GraphQL operations from web app
    '../apps/mobile/lib/**/*.graphql', // GraphQL operations from mobile app
    // You might place backend operations in apps/api/src/**/*.graphql
  ],
  generates: {
    // TypeScript types for NestJS Backend (resolvers and general types)
    './src/generated/backend-types.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        {
          add: {
            content: '/* eslint-disable */', // Add this to disable ESLint for generated file
          },
        },
      ],
      config: {
        useIndexSignature: true,
        enumsAsTypes: true, // Generate enums as TypeScript types
        scalars: {
          ID: 'string',
          DateTime: 'Date', // Assuming you'll use Date objects for DateTime
          // Add more custom scalar mappings if needed
        },
        // Maps your GraphQL types to your Prisma models (optional, but good practice)
        mappers: {
          User: '@prisma/client/runtime/library#User',
          Shop: '@prisma/client/runtime/library#Shop',
          Product: '@prisma/client/runtime/library#Product',
          Order: '@prisma/client/runtime/library#Order',
          OrderItem: '@prisma/client/runtime/library#OrderItem',
          Address: '@prisma/client/runtime/library#Address',
        },
      },
    },

    // TypeScript types for Web Frontend (specific operations)
    './src/generated/web-types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        useIndexSignature: true,
        enumsAsTypes: true,
        scalars: {
          ID: 'string',
          DateTime: 'string', // Frontend often handles DateTime as string
        },
      },
    },

    // Dart types for Flutter Mobile Frontend (specific operations + Freezed)
    './src/generated/mobile-types.graphql.dart': { // Output file name for Flutter
      plugins: [
        'flutter-freezed',
        // Make sure your flutter-freezed config maps correctly.
        // You might need to adjust based on actual Flutter setup and graphql_flutter package
      ],
      config: {
        scalars: {
          ID: 'String',
          DateTime: 'String',
          // Add more custom scalar mappings for Dart if needed
        },
        // These are examples, check flutter_graphql_codegen docs for precise mapping
        // generateFragments: true,
        // classes: [ { path: 'apps/mobile/lib/graphql_schema.dart' } ],
      },
    },
  },
  overwrite: true,
  ignoreNoDocuments: true,
};

export default config;
