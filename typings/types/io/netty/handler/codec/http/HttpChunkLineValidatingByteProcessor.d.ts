import type { HttpChunkLineValidatingByteProcessor$State } from '../../../../../io/netty/handler/codec/http/HttpChunkLineValidatingByteProcessor$State.d.ts'
import type { ByteProcessor } from '../../../../../io/netty/util/ByteProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpChunkLineValidatingByteProcessor extends Object implements ByteProcessor {
    static FIND_ASCII_SPACE: ByteProcessor;
    static FIND_COMMA: ByteProcessor;
    static FIND_CR: ByteProcessor;
    static FIND_CRLF: ByteProcessor;
    static FIND_LF: ByteProcessor;
    static FIND_LINEAR_WHITESPACE: ByteProcessor;
    static FIND_NON_CR: ByteProcessor;
    static FIND_NON_CRLF: ByteProcessor;
    static FIND_NON_LF: ByteProcessor;
    static FIND_NON_LINEAR_WHITESPACE: ByteProcessor;
    static FIND_NON_NUL: ByteProcessor;
    static FIND_NUL: ByteProcessor;
    static FIND_SEMI_COLON: ByteProcessor;
    constructor()
    // private state: HttpChunkLineValidatingByteProcessor$State;
    finish(): void;
    process(arg0: number): boolean;
}