import type { HttpHandler } from '../../../../com/sun/net/httpserver/HttpHandler.d.ts'
import type { HttpServer } from '../../../../com/sun/net/httpserver/HttpServer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpListener extends Object {
    constructor()
    // private port: number;
    // private server: HttpServer;
    port(): number;
    startListener(arg0: number, arg1: HttpHandler): void;
    stopListener(): void;
}