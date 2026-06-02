import type { Authenticator$Result } from '../../../../com/sun/net/httpserver/Authenticator$Result.d.ts'
import type { HttpExchange } from '../../../../com/sun/net/httpserver/HttpExchange.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Authenticator extends Object {
    constructor()
    authenticate(arg0: HttpExchange): Authenticator$Result;
}