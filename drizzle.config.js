import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: 'postgresql://ai-mock_owner:ylpQGI0q8RYJ@ep-divine-darkness-a1z65xs1.ap-southeast-1.aws.neon.tech/ai-mock?sslmode=require',
  }
  
});
