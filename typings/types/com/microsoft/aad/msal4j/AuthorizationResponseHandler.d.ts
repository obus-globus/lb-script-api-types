import type { AuthorizationResult } from '../../../../com/microsoft/aad/msal4j/AuthorizationResult.d.ts'
import type { SystemBrowserOptions } from '../../../../com/microsoft/aad/msal4j/SystemBrowserOptions.d.ts'
import type { HttpExchange } from '../../../../com/sun/net/httpserver/HttpExchange.d.ts'
import type { HttpHandler } from '../../../../com/sun/net/httpserver/HttpHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthorizationResponseHandler extends Object implements HttpHandler {
    constructor(arg0: AuthorizationResult[], arg1: SystemBrowserOptions)
    // private authorizationResultQueue: AuthorizationResult[];
    // private systemBrowserOptions: SystemBrowserOptions;
    authorizationResultQueue(): AuthorizationResult[];
    // private getErrorResponseMessage(): string;
    // private getSuccessfulResponseMessage(): string;
    handle(arg0: HttpExchange): void;
    // private send200Response(arg0: HttpExchange, arg1: string): void;
    // private send302Response(arg0: HttpExchange, arg1: string): void;
    // private sendErrorResponse(arg0: HttpExchange, arg1: string): void;
    // private sendResponse(arg0: HttpExchange, arg1: AuthorizationResult): void;
    // private sendSuccessResponse(arg0: HttpExchange, arg1: string): void;
    systemBrowserOptions(): SystemBrowserOptions;
}