import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Base64Dialect } from '../../../../../io/netty/handler/codec/base64/Base64Dialect.d.ts'
import type { ByteProcessor } from '../../../../../io/netty/util/ByteProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Base64$Decoder extends Object implements ByteProcessor {
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
    private constructor()
    // private b4: number[];
    // private b4Posn: number;
    // private decodabet: number[];
    // private dest: ByteBuf;
    // private outBuffPosn: number;
    decode(arg0: ByteBuf, arg1: number, arg2: number, arg3: ByteBufAllocator, arg4: Base64Dialect): ByteBuf;
    process(arg0: number): boolean;
}