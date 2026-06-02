import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BHSDCodec } from '../../../../../../org/apache/commons/compress/harmony/pack200/BHSDCodec.d.ts'
import type { Codec } from '../../../../../../org/apache/commons/compress/harmony/pack200/Codec.d.ts'
export class CodecEncoding extends Object {
    static getCanonicalCodec(paramarg0: number): BHSDCodec;
    static getCodec(paramarg0: number, paramarg1: InputStream, paramarg2: Codec): Codec;
    static getSpecifier(paramarg0: Codec, paramarg1: Codec): number[];
    static getSpecifierForDefaultCodec(paramarg0: BHSDCodec): number;
    constructor()
}