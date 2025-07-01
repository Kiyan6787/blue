import {openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {

    const codeAgent = createAgent({
      name: "codeAgent",
      system: "You are an expert developer.  You write readable, maintainable code.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(
      `Write the following code snippets: ${event.data.value}`
    );

    return { output };
  },
);
