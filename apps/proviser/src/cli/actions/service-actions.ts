import * as appServices from "../services/services-service";

export async function stopService(serviceName: string): Promise<void> {
  const result = await appServices.stopService(serviceName);
  if (result.success) {
    console.log(`Service ${serviceName} stopped successfully.`);
  } else {
    console.error(
      `Failed to stop service ${serviceName}: ${result.error.message}`,
    );
  }
}

export async function startService(serviceName: string): Promise<void> {
  const result = await appServices.startService(serviceName);
  if (result.success) {
    console.log(`Service ${serviceName} started successfully.`);
  } else {
    console.error(
      `Failed to start service ${serviceName}: ${result.error.message}`,
    );
  }
}

export async function restartService(serviceName: string): Promise<void> {
  const result = await appServices.restartService(serviceName);
  if (result.success) {
    console.log(`Service ${serviceName} restarted successfully.`);
  } else {
    console.error(
      `Failed to restart service ${serviceName}: ${result.error.message}`,
    );
  }
}
