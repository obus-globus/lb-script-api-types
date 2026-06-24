import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { HttpContent } from '../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { HttpDecoderConfig } from '../../../../../io/netty/handler/codec/http/HttpDecoderConfig.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpObjectDecoder$HeaderParser } from '../../../../../io/netty/handler/codec/http/HttpObjectDecoder$HeaderParser.d.ts'
import type { HttpObjectDecoder$LineParser } from '../../../../../io/netty/handler/codec/http/HttpObjectDecoder$LineParser.d.ts'
import type { HttpObjectDecoder$State } from '../../../../../io/netty/handler/codec/http/HttpObjectDecoder$State.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class HttpObjectDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static DEFAULT_ALLOW_DUPLICATE_CONTENT_LENGTHS: boolean;
    static DEFAULT_ALLOW_PARTIAL_CHUNKS: boolean;
    static DEFAULT_CHUNKED_SUPPORTED: boolean;
    static DEFAULT_INITIAL_BUFFER_SIZE: number;
    static DEFAULT_MAX_CHUNK_SIZE: number;
    static DEFAULT_MAX_HEADER_SIZE: number;
    static DEFAULT_MAX_INITIAL_LINE_LENGTH: number;
    static DEFAULT_STRICT_LINE_PARSING: boolean;
    static DEFAULT_VALIDATE_HEADERS: boolean;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static PROP_RFC9112_TRANSFER_ENCODING: string;
    static RFC9112_TRANSFER_ENCODING: boolean;
    constructor()
    constructor(arg0: HttpDecoderConfig)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean)
    // private allowDuplicateContentLengths: boolean;
    // private allowPartialChunks: boolean;
    // private chunkSize: number;
    // private chunked: boolean;
    // private chunkedSupported: boolean;
    // private contentLength: number;
    // private currentState: HttpObjectDecoder$State;
    // private defaultStrictCRLFCheck: () => void;
    // private headerParser: HttpObjectDecoder$HeaderParser;
    // private headersFactory: HttpHeadersFactory;
    // private isSwitchingToNonHttp1Protocol: boolean;
    // private lineParser: HttpObjectDecoder$LineParser;
    // private maxChunkSize: number;
    // private message: HttpMessage;
    // private name: AsciiString;
    // private parserScratchBuffer: ByteBuf;
    // private resetRequested: AtomicBoolean;
    // private trailer: LastHttpContent;
    // private trailersFactory: HttpHeadersFactory;
    // private useRfc9112TransferEncoding: boolean;
    // private validateHeaders: boolean;
    // private value: string;
    // private addCurrentMessage(arg0: Object[]): void;
    clearContentLength(): void;
    createInvalidMessage(): HttpMessage;
    createMessage(arg0: string[]): HttpMessage;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    decodeLast(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    handleTransferEncodingChunkedWithContentLength(arg0: HttpMessage): void;
    handlerRemoved0(arg0: ChannelHandlerContext): void;
    // private invalidChunk(arg0: ByteBuf, arg1: Exception): HttpContent;
    // private invalidMessage(arg0: HttpMessage, arg1: ByteBuf, arg2: Exception): HttpMessage;
    isContentAlwaysEmpty(arg0: HttpMessage): boolean;
    isDecodingRequest(): boolean;
    isSwitchingToNonHttp1Protocol(arg0: HttpResponse): boolean;
    isValidating(arg0: HttpHeadersFactory): boolean;
    // private readHeaders(arg0: ByteBuf): HttpObjectDecoder$State;
    // private readTrailingHeaders(arg0: ByteBuf): LastHttpContent;
    reset(): void;
    // private resetNow(): void;
    splitFirstWordInitialLine(arg0: number[], arg1: number, arg2: number): string;
    // private splitHeader(arg0: number[], arg1: number, arg2: number): void;
    splitHeaderName(arg0: number[], arg1: number, arg2: number): AsciiString;
    // private splitInitialLine(arg0: ByteBuf): string[];
    splitSecondWordInitialLine(arg0: number[], arg1: number, arg2: number): string;
    splitThirdWordInitialLine(arg0: number[], arg1: number, arg2: number): string;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
}