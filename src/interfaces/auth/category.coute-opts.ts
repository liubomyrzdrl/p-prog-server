import { RouteShorthandOptions } from "fastify";

export const authOpts: RouteShorthandOptions = {
    schema:{
        response: {
            200: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer' },
                    data: {
                        hello: {
                            type: 'string'
                        } 
                    },
                    message: { type: 'string' },
                },
            },
            404: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer' },
                    message: { type: 'string' },
                },
            }},
    }
};