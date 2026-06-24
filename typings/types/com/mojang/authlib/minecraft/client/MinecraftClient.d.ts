import type { MinecraftClientHttpException } from '../../../../../com/mojang/authlib/exceptions/MinecraftClientHttpException.d.ts'
import type { MinecraftClient$ServiceResponse } from '../../../../../com/mojang/authlib/minecraft/client/MinecraftClient$ServiceResponse.d.ts'
import type { ObjectMapper } from '../../../../../com/mojang/authlib/minecraft/client/ObjectMapper.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { HttpURLConnection } from '../../../../../java/net/HttpURLConnection.d.ts'
import type { Proxy } from '../../../../../java/net/Proxy.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MinecraftClient extends Object {
    static CONNECT_TIMEOUT_MS: number;
    static READ_TIMEOUT_MS: number;
    static unauthenticated(paramarg0: Proxy): MinecraftClient;
    constructor(arg0: string, arg1: Proxy)
    // private accessToken: string;
    // private objectMapper: ObjectMapper;
    // private proxy: Proxy;
    // private buildHttpException(arg0: URL, arg1: HttpURLConnection, arg2: number, arg3: Duration): MinecraftClientHttpException;
    // private createUrlConnection(arg0: URL): HttpURLConnection;
    delete<T extends unknown>(arg0: URL, arg1: Class<T>): T;
    get<T extends unknown>(arg0: URL, arg1: Class<T>): T;
    getWithEtag<T extends unknown>(arg0: URL, arg1: Class<T>, arg2: string): MinecraftClient$ServiceResponse<T>;
    post<T extends unknown>(arg0: URL, arg1: Class<T>): T;
    post<T extends unknown>(arg0: URL, arg1: Object, arg2: Class<T>): T;
    postWithEtag<T extends unknown>(arg0: URL, arg1: Object, arg2: Class<T>, arg3: string): MinecraftClient$ServiceResponse<T>;
    // private prepareRequest(arg0: URL, arg1: string): HttpURLConnection;
    put<T extends unknown>(arg0: URL, arg1: Object, arg2: Class<T>): T;
    // private readServiceResponse<T extends unknown>(arg0: URL, arg1: Class<T>, arg2: HttpURLConnection, arg3: string): MinecraftClient$ServiceResponse<T>;
    // private serialize(arg0: Object): number[];
    // private withBody(arg0: HttpURLConnection, arg1: string, arg2: number[]): HttpURLConnection;
}