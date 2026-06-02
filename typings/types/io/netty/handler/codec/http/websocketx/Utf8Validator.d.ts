import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteProcessor } from '../../../../../../io/netty/util/ByteProcessor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Utf8Validator extends Object implements ByteProcessor {
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
    readonly checking: boolean;
    // private codep: number;
    // private state: number;
    check(arg0: ByteBuf): void;
    check(arg0: ByteBuf, arg1: number, arg2: number): void;
    finish(): void;
    isChecking(): boolean;
    process(arg0: number): boolean;
}