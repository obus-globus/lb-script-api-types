import type { HttpContext } from '../../../../com/sun/net/httpserver/HttpContext.d.ts'
import type { HttpPrincipal } from '../../../../com/sun/net/httpserver/HttpPrincipal.d.ts'
import type { Request } from '../../../../com/sun/net/httpserver/Request.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HttpExchange extends Object implements Request, AutoCloseable {
    constructor()
    close(): void;
    getAttribute(arg0: string): Object;
    getHttpContext(): HttpContext;
    getLocalAddress(): InetSocketAddress;
    getPrincipal(): HttpPrincipal;
    getProtocol(): string;
    getRemoteAddress(): InetSocketAddress;
    getRequestBody(): InputStream;
    getRequestHeaders(): { [key: string]: any };
    getRequestMethod(): string;
    getRequestURI(): URI;
    getResponseBody(): OutputStream;
    getResponseCode(): number;
    getResponseHeaders(): { [key: string]: any };
    sendResponseHeaders(arg0: number, arg1: number): void;
    setAttribute(arg0: string, arg1: Object): void;
    setStreams(arg0: InputStream, arg1: OutputStream): void;
    with(arg0: string, arg1: string[]): Request;
}