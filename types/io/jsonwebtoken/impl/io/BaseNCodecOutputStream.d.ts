import type { BaseNCodec } from '../../../../io/jsonwebtoken/impl/io/BaseNCodec.d.ts'
import type { BaseNCodec$Context } from '../../../../io/jsonwebtoken/impl/io/BaseNCodec$Context.d.ts'
import type { FilterOutputStream } from '../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class BaseNCodecOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream, arg1: BaseNCodec, arg2: boolean)
    // private baseNCodec: BaseNCodec;
    // private context: BaseNCodec$Context;
    // private doEncode: boolean;
    // private singleByte: number[];
    close(): void;
    eof(): void;
    flush(): void;
    // private flush(arg0: boolean): void;
    isStrictDecoding(): boolean;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}