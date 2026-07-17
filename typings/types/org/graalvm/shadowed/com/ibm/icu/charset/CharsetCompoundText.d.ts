import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetMBCS } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS.d.ts'
export class CharsetCompoundText extends CharsetICU {
    static ROUNDTRIP_AND_FALLBACK_SET: number;
    static ROUNDTRIP_SET: number;
    static availableCharsets(): JavaMap<string, Charset>;
    static defaultCharset(): Charset;
    static forName(paramarg0: string): Charset;
    static forName(paramarg0: string, paramarg1: Charset): Charset;
    static forNameICU(paramcharsetName: string): Charset;
    static isSupported(paramarg0: string): boolean;
    constructor(icuCanonicalName: string, javaCanonicalName: string, aliases: string[])
    // private myConverterArray: CharsetMBCS[];
    // private state: number;
    // private LoadConverters(): void;
    getUnicodeSetImpl(setFillIn: string[], which: number): void;
    newDecoder(): CharsetDecoder;
    newEncoder(): CharsetEncoder;
}