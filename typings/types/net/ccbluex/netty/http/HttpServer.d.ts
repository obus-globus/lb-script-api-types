import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { LoggingHandler } from '../../../../io/netty/handler/logging/LoggingHandler.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Mutex } from '../../../../kotlinx/coroutines/sync/Mutex.d.ts'
import type { HttpServer$Companion } from '../../../../net/ccbluex/netty/http/HttpServer$Companion.d.ts'
import type { Middleware } from '../../../../net/ccbluex/netty/http/middleware/Middleware.d.ts'
import type { Node } from '../../../../net/ccbluex/netty/http/rest/Node.d.ts'
import type { RouteController } from '../../../../net/ccbluex/netty/http/rest/RouteController.d.ts'
import type { WebSocketController } from '../../../../net/ccbluex/netty/http/websocket/WebSocketController.d.ts'
export class HttpServer extends Object {
    static Companion: HttpServer$Companion;
    constructor()
    // private bossGroup: (Object | null)[] | null;
    // private lock: Mutex;
    // private middlewares: Middleware[];
    /*not mapped: */ getMiddlewares$netty_httpserver(): Middleware[];
    // private routeController: RouteController;
    /*not mapped: */ getRouteController$netty_httpserver(): RouteController;
    // private serverChannel: Channel | null;
    readonly webSocketController: WebSocketController | null;
    // private workerGroup: (Object | null)[] | null;
    middleware(middleware: Middleware): HttpServer;
    routing(block: Function1<Node, void>): void;
    start(port: number, useNativeTransport: boolean, threadFactory: ThreadFactory | null, loggingHandler: LoggingHandler | null): number;
    stop(): void;
    stopBlocking(): void;
}