import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Codec } from '../../../../../../org/apache/commons/compress/harmony/pack200/Codec.d.ts'
export class BHSDCodec extends Codec {
    static BCI5: BHSDCodec;
    static BRANCH5: BHSDCodec;
    static BYTE1: BHSDCodec;
    static CHAR3: BHSDCodec;
    static DELTA5: BHSDCodec;
    static MDELTA5: BHSDCodec;
    static SIGNED5: BHSDCodec;
    static UDELTA5: BHSDCodec;
    static UNSIGNED5: BHSDCodec;
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly b: number;
    // private cardinality: number;
    // private d: number;
    readonly h: number;
    readonly l: number;
    // private largest: number;
    // private powers: number[];
    readonly s: number;
    // private smallest: number;
    // private calculateLargest(): number;
    // private calculateSmallest(): number;
    cardinality(): number;
    decode(arg0: InputStream): number;
    decode(arg0: InputStream, arg1: number): number;
    decodeInts(arg0: number, arg1: InputStream): number[];
    decodeInts(arg0: number, arg1: InputStream, arg2: number): number[];
    encode(arg0: number): number[];
    encode(arg0: number, arg1: number): number[];
    encode(arg0: number[]): number[];
    encodes(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    getB(): number;
    getH(): number;
    getL(): number;
    getS(): number;
    hashCode(): number;
    isDelta(): boolean;
    isSigned(): boolean;
    largest(): number;
    smallest(): number;
    toString(): string;
}