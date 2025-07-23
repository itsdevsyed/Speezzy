import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
// Import your PrismaService if you created it
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module'; // <-- Corrected path to users module
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // For code-first approach
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Path to generated schema file
      sortSchema: true, // Optional: Sorts the schema alphabetically
      playground: true, // Enable GraphQL Playground for easy testing in dev
      // For production, set playground to false or a secure path
    }),
    PrismaModule, // Add PrismaModule
    AuthModule, // Add AuthModule
    UsersModule, // Add UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
