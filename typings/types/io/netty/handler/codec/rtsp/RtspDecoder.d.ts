import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { HttpDecoderConfig } from '../../../../../io/netty/handler/codec/http/HttpDecoderConfig.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpObjectDecoder } from '../../../../../io/netty/handler/codec/http/HttpObjectDecoder.d.ts'
export class RtspDecoder extends HttpObjectDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static DEFAULT_ALLOW_DUPLICATE_CONTENT_LENGTHS: boolean;
    static DEFAULT_ALLOW_PARTIAL_CHUNKS: boolean;
    static DEFAULT_CHUNKED_SUPPORTED: boolean;
    static DEFAULT_INITIAL_BUFFER_SIZE: number;
    static DEFAULT_MAX_CHUNK_SIZE: number;
    static DEFAULT_MAX_CONTENT_LENGTH: number;
    static DEFAULT_MAX_HEADER_SIZE: number;
    static DEFAULT_MAX_INITIAL_LINE_LENGTH: number;
    static DEFAULT_STRICT_LINE_PARSING: boolean;
    static DEFAULT_VALIDATE_HEADERS: boolean;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: HttpDecoderConfig)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean)
    // private isDecodingRequest: boolean;
    createInvalidMessage(): HttpMessage;
    createMessage(arg0: string[]): HttpMessage;
    isContentAlwaysEmpty(arg0: HttpMessage): boolean;
    isDecodingRequest(): boolean;
}