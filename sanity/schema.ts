import { type SchemaTypeDefinition } from "sanity";
import { imageAssets } from "./schemas/imageAssets";
import { fileAssets } from "./schemas/fileAssets";
import { volunteerPage } from "./schemas/volunteerPage";
import { volunteerNav } from "./schemas/volunteerNav";
import { home } from "./schemas/home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [volunteerNav, volunteerPage, imageAssets, fileAssets, home],
};
