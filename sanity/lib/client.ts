import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  apiVersion: "2023-11-21",
  dataset: "production",
  projectId: "pg2tlmhw",
  useCdn: false,
};

const client = createClient(config);

export default client;
