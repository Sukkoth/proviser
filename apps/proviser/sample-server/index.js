setInterval(() => {
  console.log({ message: `[LOG] Heartbeat at ${new Date().toISOString()}` });
}, 10000);

Bun.serve({
  port: 3333,
  fetch(req) {
    return Response.json({ message: "Server is running" });
  },
});

console.log({ message: "HTTP server running on http://localhost:3333" });
