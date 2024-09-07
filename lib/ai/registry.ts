import { createOpenAI } from "@ai-sdk/openai";
import { experimental_createProviderRegistry as createProviderRegistry } from "ai";
import { env } from "@/lib/env.mjs";

export const registry = createProviderRegistry({
  // register provider with prefix and custom setup:
  openai: createOpenAI({
    project: env.OPENAI_API_PROJECT,
    compatibility: "strict", // strict mode, enable when using the OpenAI API
  }),
});
