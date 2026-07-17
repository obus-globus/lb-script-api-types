import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
export abstract class CharsetICU extends Charset {
    static ROUNDTRIP_AND_FALLBACK_SET: number;
    static ROUNDTRIP_SET: number;
    static availableCharsets(): JavaMap<string, Charset>;
    static defaultCharset(): Charset;
    static forName(paramarg0: string): Charset;
    static forName(paramarg0: string, paramarg1: Charset): Charset;
    static forNameICU(paramcharsetName: string): Charset;
    static isSupported(paramarg0: string): boolean;
    constructor(icuCanonicalName: string, canonicalName: string, aliases: string[])
    // private codepage: number;
    // private conversionType: number;
    // private hasFromUnicodeFallback: number;
    // private hasToUnicodeFallback: number;
    // private icuCanonicalName: string;
    // private maxBytesPerChar: number;
    // private maxCharsPerByte: number;
    // private minBytesPerChar: number;
    // private name: string;
    // private options: number;
    // private platform: number;
    // private subChar: number[];
    // private subChar1: number;
    // private subCharLen: number;
    // private unicodeMask: number;
    contains(cs: Charset): boolean;
    getUnicodeSet(setFillIn: string[], which: number): void;
    getUnicodeSetImpl(setFillIn: string[], which: number): void;
    isFixedWidth(): boolean;
}