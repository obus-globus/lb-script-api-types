import type { CCAuthenticationResponse } from '../../../../../../de/florianreuth/classic4j/model/classicube/CCAuthenticationResponse.d.ts'
import type { CCAccount } from '../../../../../../de/florianreuth/classic4j/model/classicube/account/CCAccount.d.ts'
import type { HttpClient } from '../../../../../../java/net/http/HttpClient.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CCAuthenticationLoginRequest extends Object {
    static send(paramarg0: HttpClient, paramarg1: CCAccount, paramarg2: CCAuthenticationResponse, paramarg3: string): CompletableFuture<CCAuthenticationResponse>;
    constructor()
}