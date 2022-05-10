// pages/api/index.js

export default function handler(request, response) {
    response.status(200).json({
        message: 'Hello, World from the Cloud!',
        body: request.body,
        query: request.query,
        cookies: request.cookies,
    });
}
