import "reflect-metadata";

import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { createConnection } from "typeorm";

const server = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [__dirname + "/modules/**/*.ts"],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, "127.0.0.1", () => {
    console.log("Server Start at url: http://localhost:4000/graphql");
  });
};

server();
