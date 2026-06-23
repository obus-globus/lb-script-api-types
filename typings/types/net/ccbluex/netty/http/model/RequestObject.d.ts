import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { ApplicationCall } from '../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
import type { RequestObject$Companion } from '../../../../../net/ccbluex/netty/http/model/RequestObject$Companion.d.ts'
export class RequestObject extends ApplicationCall {
    static Companion: RequestObject$Companion;
    static GSON_INSTANCE: Gson;
    constructor(uri: string, path: string, remainingPath: string, method: HttpMethod, body: string, params: { [key: string]: string }, queryParams: { [key: string]: string }, headers: Map$Entry<string, string>[])
    readonly params: { [key: string]: string };
    readonly queryParams: { [key: string]: string };
    asJson<T extends unknown>(): T;
}