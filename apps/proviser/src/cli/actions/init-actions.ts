import { readProviserYaml } from "../services/init-service";

export async function initActionHandler(options: { file?: string }) {
  const proviserFileContent = await readProviserYaml(options.file);
  console.dir(proviserFileContent.apps, { depth: null });
}
