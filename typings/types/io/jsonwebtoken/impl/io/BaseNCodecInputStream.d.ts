import type { BaseNCodec } from '../../../../io/jsonwebtoken/impl/io/BaseNCodec.d.ts'
import type { BaseNCodec$Context } from '../../../../io/jsonwebtoken/impl/io/BaseNCodec$Context.d.ts'
import type { FilterInputStream } from '../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class BaseNCodecInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: BaseNCodec, arg2: boolean)
    // private baseNCodec: BaseNCodec;
    // private buf: number[];
    // private context: BaseNCodec$Context;
    // private doEncode: boolean;
    // private singleByte: number[];
    available(): number;
    isStrictDecoding(): boolean;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}