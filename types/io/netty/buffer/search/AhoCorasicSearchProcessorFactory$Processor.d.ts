import type { MultiSearchProcessor } from '../../../../io/netty/buffer/search/MultiSearchProcessor.d.ts'
import type { ByteProcessor } from '../../../../io/netty/util/ByteProcessor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AhoCorasicSearchProcessorFactory$Processor extends Object implements MultiSearchProcessor {
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
    constructor(arg0: number[], arg1: number[])
    // private currentPosition: number;
    // private jumpTable: number[];
    // private matchForNeedleId: number[];
    getFoundNeedleId(): number;
    process(arg0: number): boolean;
    reset(): void;
}