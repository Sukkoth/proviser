export async function listAppsActionHandler() {
  const proviserFileContent = {
    name: "sample-server",
    cwd: process.cwd(),
    command: "bun run index.js",
  };
  console.table([proviserFileContent, proviserFileContent]);
}
