import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BHSDCodec } from '../../../../../../org/apache/commons/compress/harmony/pack200/BHSDCodec.d.ts'
import type { Codec } from '../../../../../../org/apache/commons/compress/harmony/pack200/Codec.d.ts'
export class PopulationCodec extends Codec {
    static BCI5: BHSDCodec;
    static BRANCH5: BHSDCodec;
    static BYTE1: BHSDCodec;
    static CHAR3: BHSDCodec;
    static DELTA5: BHSDCodec;
    static MDELTA5: BHSDCodec;
    static SIGNED5: BHSDCodec;
    static UDELTA5: BHSDCodec;
    static UNSIGNED5: BHSDCodec;
    constructor(arg0: Codec, arg1: number, arg2: Codec)
    constructor(arg0: Codec, arg1: Codec, arg2: Codec)
    readonly favoured: number[];
    readonly favouredCodec: Codec;
    // private l: number;
    readonly tokenCodec: Codec;
    readonly unfavouredCodec: Codec;
    decode(arg0: InputStream): number;
    decode(arg0: InputStream, arg1: number): number;
    decodeInts(arg0: number, arg1: InputStream): number[];
    decodeInts(arg0: number, arg1: InputStream, arg2: number): number[];
    encode(arg0: number): number[];
    encode(arg0: number, arg1: number): number[];
    encode(arg0: number[]): number[];
    encode(arg0: number[], arg1: number[], arg2: number[]): number[];
    getFavoured(): number[];
    getFavouredCodec(): Codec;
    getTokenCodec(): Codec;
    getUnfavouredCodec(): Codec;
}