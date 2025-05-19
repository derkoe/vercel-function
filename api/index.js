// pages/api/index.js

export function GET(request) {
  return new Response({
    message: "Hello, World for the FH Salzburg!",
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}
