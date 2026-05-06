export const buildRequestInit = (method: 'GET' | 'POST', body?: unknown): RequestInit => {
    if (method === 'GET') {
        return { method };
    }

    return {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
};
