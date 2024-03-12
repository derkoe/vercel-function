// pages/api/index.js

export function GET(request) {
    return new Response({
        message: 'Hello, World from the Cloud!',
        body: request.body,
        query: request.query,
        cookies: request.cookies,
    });
}

export const config = {
    runtime: 'nodejs',
};
