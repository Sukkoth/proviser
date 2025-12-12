type Response = {
  success: boolean;
  error: {
    message: string;
    code: number;
  };
};

export async function startService(serviceName: string): Promise<Response> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        error: {
          message: `Started  ${serviceName}`,
          code: 201,
        },
      });
    }, 200);
  });
}

export async function stopService(serviceName: string): Promise<Response> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        error: {
          message: `Stopped ${serviceName}`,
          code: 200,
        },
      });
    }, 200);
  });
}

export async function restartService(serviceName: string): Promise<Response> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        error: {
          message: `Restarted ${serviceName}`,
          code: 202,
        },
      });
    }, 200);
  });
}
