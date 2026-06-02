import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { BCServerList } from '../../../../../de/florianreuth/classic4j/model/betacraft/BCServerList.d.ts'
import type { HttpClient } from '../../../../../java/net/http/HttpClient.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BCServerListRequest extends Object {
    static send(paramarg0: HttpClient, paramarg1: Gson): CompletableFuture<BCServerList>;
    constructor()
}