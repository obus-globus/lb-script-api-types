import type { HttpContext } from '../../../../com/sun/net/httpserver/HttpContext.d.ts'
import type { HttpHandler } from '../../../../com/sun/net/httpserver/HttpHandler.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HttpServer extends Object {
    static create(): HttpServer;
    static create(paramarg0: InetSocketAddress, paramarg1: number): HttpServer;
    static create(paramarg0: InetSocketAddress, paramarg1: number, paramarg2: string, paramarg3: HttpHandler, paramarg4: (Object | null)[]): HttpServer;
    constructor()
    bind(arg0: InetSocketAddress, arg1: number): void;
    createContext(arg0: string): HttpContext;
    createContext(arg0: string, arg1: HttpHandler): HttpContext;
    getAddress(): InetSocketAddress;
    getExecutor(): Executor;
    removeContext(arg0: HttpContext): void;
    removeContext(arg0: string): void;
    setExecutor(arg0: Executor): void;
    start(): void;
    stop(arg0: number): void;
}