import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetUTF8 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetUTF8.d.ts'
export class CharsetCESU8 extends CharsetUTF8 {
    static ROUNDTRIP_AND_FALLBACK_SET: number;
    static ROUNDTRIP_SET: number;
    static availableCharsets(): JavaMap<string, Charset>;
    static defaultCharset(): Charset;
    static forName(paramarg0: string): Charset;
    static forName(paramarg0: string, paramarg1: Charset): Charset;
    static forNameICU(paramcharsetName: string): Charset;
    static isSupported(paramarg0: string): boolean;
    constructor(icuCanonicalName: string, javaCanonicalName: string, aliases: string[])
    getUnicodeSetImpl(setFillIn: string[], which: number): void;
}