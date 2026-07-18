import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { ByteProcessor } from '../../../../../io/netty/util/ByteProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HpackHuffmanDecoder extends Object implements ByteProcessor {
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
    // private dest: number[];
    // private k: number;
    // private state: number;
    decode(arg0: ByteBuf, arg1: number): AsciiString;
    process(arg0: number): boolean;
    // private processNibble(arg0: number): boolean;
}