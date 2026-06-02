import type { HttpServer } from '../../../../../com/sun/net/httpserver/HttpServer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MicrosoftAccount$AuthMethod } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount$AuthMethod.d.ts'
import type { MicrosoftAccount$OAuthHandler } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount$OAuthHandler.d.ts'
export class OAuthServer extends Object {
    constructor(handler: MicrosoftAccount$OAuthHandler, authMethod: MicrosoftAccount$AuthMethod, httpServer: HttpServer, context: string)
    // private authMethod: MicrosoftAccount$AuthMethod;
    // private context: string;
    readonly handler: MicrosoftAccount$OAuthHandler;
    // private httpServer: HttpServer;
    start(): void;
    stop(isInterrupt: boolean): void;
}