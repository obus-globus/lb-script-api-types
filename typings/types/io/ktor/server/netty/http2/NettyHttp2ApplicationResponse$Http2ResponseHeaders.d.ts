import type { ResponseHeaders } from '../../../../../io/ktor/server/response/ResponseHeaders.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NettyHttp2ApplicationResponse$Http2ResponseHeaders extends ResponseHeaders {
    constructor(underlying: (Object | null)[])
    // private underlying: (Object | null)[];
    protected engineAppendHeader(name: string, value: string): void;
    get(name: string): string | null;
    protected getEngineHeaderNames(): string[];
    protected getEngineHeaderValues(name: string): string[];
}