import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const start = Date.now();

    console.log(`[LOG] Request Method: ${req.method}`);
    console.log(`[LOG] Request URL: ${req.url}`);

    // Log de cabeçalhos
    console.log(`[LOG] Request Headers: ${JSON.stringify(req.headers)}`);

    if (req.method !== 'GET' && req.method !== 'HEAD') {
        const body = await req.text();
        console.log(`[LOG] Request Body: ${body}`);
    }

    const response = NextResponse.next();

    const duration = Date.now() - start;
    console.log(`[LOG] Response Time: ${duration}ms`);

    response.headers.set('X-Response-Time', `${duration}ms`);
    console.log(`[LOG] Response Headers: ${JSON.stringify(response.headers)}`);

    return response;
}
