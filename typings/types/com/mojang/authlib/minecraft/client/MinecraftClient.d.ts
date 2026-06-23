import type { ObjectMapper } from '../../../../../com/mojang/authlib/minecraft/client/ObjectMapper.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { HttpURLConnection } from '../../../../../java/net/HttpURLConnection.d.ts'
import type { Proxy } from '../../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MinecraftClient extends Object {
    static CONNECT_TIMEOUT_MS: number;
    static READ_TIMEOUT_MS: number;
    static unauthenticated(paramarg0: Proxy): MinecraftClient;
    constructor(arg0: string, arg1: Proxy)
    // private accessToken: string;
    // private objectMapper: ObjectMapper;
    // private proxy: Proxy;
    // private createUrlConnection(arg0: URL): HttpURLConnection;
    get<T extends unknown>(arg0: URL, arg1: Class<T>): T;
    post<T extends unknown>(arg0: URL, arg1: Class<T>): T;
    post<T extends unknown>(arg0: URL, arg1: Object, arg2: Class<T>): T;
    // private postInternal(arg0: URL, arg1: number[]): HttpURLConnection;
    // private readInputStream<T extends unknown>(arg0: URL, arg1: Class<T>, arg2: HttpURLConnection): T;
}