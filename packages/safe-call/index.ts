// Async version
export async function safeCall<T, E = unknown>(
  fn: () => Promise<T>,
): Promise<{ data: T | null; error: E | null }> {
  try {
    const data = await fn();
    return { data, error: null };
  } catch (err) {
    return { data: null, error: err as E };
  }
}

// Sync version
export function safeCallSync<T, E = unknown>(
  fn: () => T,
): { data: T | null; error: E | null } {
  try {
    return { data: fn(), error: null };
  } catch (err) {
    return { data: null, error: err as E };
  }
}
