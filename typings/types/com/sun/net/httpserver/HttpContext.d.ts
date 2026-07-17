import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Authenticator } from '../../../../com/sun/net/httpserver/Authenticator.d.ts'
import type { Filter } from '../../../../com/sun/net/httpserver/Filter.d.ts'
import type { HttpHandler } from '../../../../com/sun/net/httpserver/HttpHandler.d.ts'
import type { HttpServer } from '../../../../com/sun/net/httpserver/HttpServer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HttpContext extends Object {
    constructor()
    getAttributes(): JavaMap<string, Object>;
    getAuthenticator(): Authenticator;
    getFilters(): Filter[];
    getHandler(): HttpHandler;
    getPath(): string;
    getServer(): HttpServer;
    setAuthenticator(arg0: Authenticator): Authenticator;
    setHandler(arg0: HttpHandler): void;
}