import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Encodings extends Object {
    static ALL_NAMES: string[];
    static ASCII: Encodings$Encoding;
    static BYTES: Encodings$Encoding;
    static LATIN_1: Encodings$Encoding;
    static UTF_16: Encodings$Encoding;
    static UTF_16_RAW: Encodings$Encoding;
    static UTF_32: Encodings$Encoding;
    static UTF_8: Encodings$Encoding;
    static getEncoding(paramname: string): Encodings$Encoding;
    constructor()
}