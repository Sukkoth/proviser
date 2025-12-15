import { safeCall } from "@proviser/safe-call";
import axios from "../../libs/axios";

export async function listAppsActionHandler() {
  const { data: response, error } = await safeCall(async () =>
    axios.get("/apps"),
  );
  if (error) {
    console.error(error);
    process.exit(1);
  }
  if (response?.data && response.data.length) {
    console.table(response.data);
  }
}
