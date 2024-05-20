interface IConfig {
    port: number
}

export const config: IConfig = {
    port: Number(process.env.PORT)
};