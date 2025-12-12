import z from "zod";

// normal service entry
const needCommandSchema = z.object({
  command: z.string(),
  cwd: z.string().optional().default(process.env.HOME!),
});

// external reference entry
const externalSchema = z.object({
  external: z.literal(true),
});

// needs entry: either a normal command or external reference
const needEntrySchema = z.union([needCommandSchema, externalSchema]);

// needs object: arbitrary keys, each key must match needEntrySchema
const needsSchema = z.record(z.string(), needEntrySchema);

// app schema
const appSchema = z.object({
  cwd: z.string().optional().default(process.env.HOME!),
  command: z.string(),
  "with-editor": z.boolean().optional(),
  needs: needsSchema.optional(),
});

// root schema
export const proviserSchema = z.object({
  apps: z.record(z.string(), appSchema),
});

// infer TypeScript type

export type ProviserYAML = z.infer<typeof proviserSchema>;
