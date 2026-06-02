import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetUTF32 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetUTF32.d.ts'
export class CharsetUTF32BE extends CharsetUTF32 {
    static ROUNDTRIP_AND_FALLBACK_SET: number;
    static ROUNDTRIP_SET: number;
    static availableCharsets(): { [key: string]: Charset };
    static defaultCharset(): Charset;
    static forName(paramarg0: string): Charset;
    static forName(paramarg0: string, paramarg1: Charset): Charset;
    static forNameICU(paramcharsetName: string): Charset;
    static isSupported(paramarg0: string): boolean;
    constructor(icuCanonicalName: string, javaCanonicalName: string, aliases: string[])
}