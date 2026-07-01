import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class HttpDecoderConfig extends Object implements Cloneable {
    constructor()
    readonly allowDuplicateContentLengths: boolean;
    readonly allowPartialChunks: boolean;
    readonly chunkedSupported: boolean;
    readonly headersFactory: HttpHeadersFactory;
    readonly initialBufferSize: number;
    readonly maxChunkSize: number;
    readonly maxHeaderSize: number;
    readonly maxInitialLineLength: number;
    readonly strictLineParsing: boolean;
    readonly trailersFactory: HttpHeadersFactory;
    readonly useRfc9112TransferEncoding: boolean;
    clone(): HttpDecoderConfig;
    getHeadersFactory(): HttpHeadersFactory;
    getInitialBufferSize(): number;
    getMaxChunkSize(): number;
    getMaxHeaderSize(): number;
    getMaxInitialLineLength(): number;
    getTrailersFactory(): HttpHeadersFactory;
    isAllowDuplicateContentLengths(): boolean;
    isAllowPartialChunks(): boolean;
    isChunkedSupported(): boolean;
    isStrictLineParsing(): boolean;
    isUseRfc9112TransferEncoding(): boolean;
    setAllowDuplicateContentLengths(arg0: boolean): HttpDecoderConfig;
    setAllowPartialChunks(arg0: boolean): HttpDecoderConfig;
    setChunkedSupported(arg0: boolean): HttpDecoderConfig;
    setHeadersFactory(arg0: HttpHeadersFactory): HttpDecoderConfig;
    setInitialBufferSize(arg0: number): HttpDecoderConfig;
    setMaxChunkSize(arg0: number): HttpDecoderConfig;
    setMaxHeaderSize(arg0: number): HttpDecoderConfig;
    setMaxInitialLineLength(arg0: number): HttpDecoderConfig;
    setStrictLineParsing(arg0: boolean): HttpDecoderConfig;
    setTrailersFactory(arg0: HttpHeadersFactory): HttpDecoderConfig;
    setUseRfc9112TransferEncoding(arg0: boolean): HttpDecoderConfig;
    setValidateHeaders(arg0: boolean): HttpDecoderConfig;
}