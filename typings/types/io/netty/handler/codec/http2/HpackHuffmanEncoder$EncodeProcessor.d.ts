import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HpackHuffmanEncoder } from '../../../../../io/netty/handler/codec/http2/HpackHuffmanEncoder.d.ts'
import type { ByteProcessor } from '../../../../../io/netty/util/ByteProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HpackHuffmanEncoder$EncodeProcessor extends Object implements ByteProcessor {
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
    private constructor(null_: HpackHuffmanEncoder)
    // private current: number;
    // private n: number;
    // private out: ByteBuf;
    end(): void;
    process(arg0: number): boolean;
}