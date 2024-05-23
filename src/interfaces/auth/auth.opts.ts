import { RouteShorthandOptions } from "fastify";
import { $ref } from "./auth.shema";


export const authOptsRegister: RouteShorthandOptions = {
    schema:{
        body: $ref('createUserSchema'),
        response: { 
            200: $ref('createUserResponseSchema'),
            404: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer' },
                    message: { type: 'string' },
                },
            }},
    }
};
export const authOptsLogin: RouteShorthandOptions = {
    schema:{
        body: $ref('loginSchema'),
        response: { 
            200: $ref('loginResponseSchema'),
            404: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer' },
                    message: { type: 'string' },
                },
            }},
    }
};
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