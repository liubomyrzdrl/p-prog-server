export interface ICreateUserInput {
    username: string
    email: string
    password: string
    created_at?: Date;
    updated_at?: Date;
}