import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class CharsetUTF32 extends CharsetICU {
    static ROUNDTRIP_AND_FALLBACK_SET: number;
    static ROUNDTRIP_SET: number;
    static availableCharsets(): { [key: string]: Charset };
    static defaultCharset(): Charset;
    static forName(paramarg0: string): Charset;
    static forName(paramarg0: string, paramarg1: Charset): Charset;
    static forNameICU(paramcharsetName: string): Charset;
    static isSupported(paramarg0: string): boolean;
    constructor(icuCanonicalName: string, javaCanonicalName: string, aliases: string[])
    // private bom: number[];
    // private endianXOR: number;
    // private fromUSubstitution: number[];
    // private isBigEndian: boolean;
    // private isEndianSpecified: boolean;
    getUnicodeSetImpl(setFillIn: string[], which: number): void;
    newDecoder(): CharsetDecoder;
    newEncoder(): CharsetEncoder;
}