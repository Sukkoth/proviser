import { proviserSchema } from "../../utils/validation/proviser-file-schema";
import { formatError, safeParse } from "zod";

export async function readProviserYaml(filePath?: string) {
  try {
    const { default: proviserFileContent } = await import(
      `${process.cwd()}/${filePath || "proviser.yaml"}`
    );

    const validation = safeParse(proviserSchema, proviserFileContent);
    if (!validation.success) {
      console.error("Invalid proviser.yaml file:");
      console.dir(formatError(validation.error), { depth: null });
      process.exit(1);
    }

    return validation.data;
  } catch (error) {
    console.error(
      `Error reading proviser.yaml file, make sure the file exists and is valid`,
    );
    process.exit(1);
  }
}
