import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BHSDCodec } from '../../../../../../org/apache/commons/compress/harmony/pack200/BHSDCodec.d.ts'
import type { Codec } from '../../../../../../org/apache/commons/compress/harmony/pack200/Codec.d.ts'
export class RunCodec extends Codec {
    static BCI5: BHSDCodec;
    static BRANCH5: BHSDCodec;
    static BYTE1: BHSDCodec;
    static CHAR3: BHSDCodec;
    static DELTA5: BHSDCodec;
    static MDELTA5: BHSDCodec;
    static SIGNED5: BHSDCodec;
    static UDELTA5: BHSDCodec;
    static UNSIGNED5: BHSDCodec;
    constructor(arg0: number, arg1: Codec, arg2: Codec)
    // private aCodec: Codec;
    // private bCodec: Codec;
    readonly k: number;
    // private last: number;
    decode(arg0: InputStream): number;
    decode(arg0: InputStream, arg1: number): number;
    decodeInts(arg0: number, arg1: InputStream): number[];
    encode(arg0: number): number[];
    encode(arg0: number, arg1: number): number[];
    getACodec(): Codec;
    getBCodec(): Codec;
    getK(): number;
    // private normalise(arg0: number, arg1: Codec): number;
    // private normalise(arg0: number[], arg1: Codec): void;
    toString(): string;
}