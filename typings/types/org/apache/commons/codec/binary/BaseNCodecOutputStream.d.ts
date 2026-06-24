import type { FilterOutputStream } from '../../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { BaseNCodec } from '../../../../../org/apache/commons/codec/binary/BaseNCodec.d.ts'
import type { BaseNCodec$Context } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$Context.d.ts'
import type { BaseNCodecOutputStream$AbstractBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream$AbstractBuilder.d.ts'
export class BaseNCodecOutputStream<C extends BaseNCodec, T extends BaseNCodecOutputStream<C, T, B>, B extends BaseNCodecOutputStream$AbstractBuilder<T, C, B>> extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream, arg1: C, arg2: boolean)
    constructor(arg0: BaseNCodecOutputStream$AbstractBuilder<T, C, B>)
    // private baseNCodec: C;
    // private context: BaseNCodec$Context;
    // private doEncode: boolean;
    // private singleByte: number[];
    close(): void;
    eof(): void;
    flush(): void;
    // private flush(arg0: boolean): void;
    isStrictDecoding(): boolean;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}