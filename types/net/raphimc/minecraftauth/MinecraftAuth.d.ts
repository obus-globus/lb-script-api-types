import type { Object } from '../../../java/lang/Object.d.ts'
import type { HttpClient } from '../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
export class MinecraftAuth extends Object {
    static IMPL_VERSION: string;
    static VERSION: string;
    static createHttpClient(): HttpClient;
    static createHttpClient(paramarg0: string): HttpClient;
    constructor()
}