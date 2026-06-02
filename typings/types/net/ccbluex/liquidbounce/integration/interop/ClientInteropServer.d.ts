import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HttpServer } from '../../../../../net/ccbluex/netty/http/HttpServer.d.ts'
import type { RequestObject } from '../../../../../net/ccbluex/netty/http/model/RequestObject.d.ts'
/**
 * A client server implementation.
 *
 * Allows the browser to communicate with the client. (e.g. for UIs)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/ClientInteropServer.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/ClientInteropServer.kt:39}
 */
export class ClientInteropServer extends Object {
    static INSTANCE: ClientInteropServer;
    readonly AUTH_CODE: string;
    PORT: number;
    // private attempt: number;
    // private httpServer: HttpServer;
    /*not mapped: */ getHttpServer$liquidbounce(): HttpServer;
    // private isSkipping: boolean;
    /*not mapped: */ isSkipping(): boolean;
    readonly url: string;
    // private getRootResponse(requestObject: RequestObject): FullHttpResponse;
    start(): void;
    // private startServer(port: number): number;
}