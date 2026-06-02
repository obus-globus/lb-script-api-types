import type { CCAccount } from '../../../../../../de/florianreuth/classic4j/model/classicube/account/CCAccount.d.ts'
import type { CCServerList } from '../../../../../../de/florianreuth/classic4j/model/classicube/server/CCServerList.d.ts'
import type { HttpClient } from '../../../../../../java/net/http/HttpClient.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CCServerInfoRequest extends Object {
    static send(paramarg0: HttpClient, paramarg1: CCAccount, paramarg2: string[]): CompletableFuture<CCServerList>;
    constructor()
}