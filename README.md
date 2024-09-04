# AI SDK RAG Template

A [Next.js](https://nextjs.org/) application, powered by the Vercel AI SDK, that uses retrieval-augmented generation (RAG) to reason and respond with information outside of the model's training data.

## Features

- Information retrieval and addition through tool calls using the [`streamText`](https://sdk.vercel.ai/docs/reference/ai-sdk-core/stream-text) function
- Real-time streaming of model responses to the frontend using the [`useChat`](https://sdk.vercel.ai/docs/reference/ai-sdk-ui/use-chat) hook
- Vector embedding storage with [DrizzleORM](https://orm.drizzle.team/) and [PostgreSQL](https://www.postgresql.org/)
- Animated UI with [Framer Motion](https://www.framer.com/motion/)

## Getting Started

To get the project up and running, follow these steps:

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

3. Add your OpenAI API key and PostgreSQL connection string to the `.env` file:

   ```
   OPENAI_API_KEY=your_api_key_here
   DATABASE_URL=your_postgres_connection_string_here
   ```

4. Migrate the database schema:

   ```bash
   pnpm turbo db:migrate
   ```

5. Start the development server:
   ```bash
   pnpm turbo dev
   ```

Your project should now be running on [http://localhost:3000](http://localhost:3000).
