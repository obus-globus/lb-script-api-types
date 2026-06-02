import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { RtspDecoder } from '../../../../../io/netty/handler/codec/rtsp/RtspDecoder.d.ts'
export class RtspResponseDecoder extends RtspDecoder {
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
}