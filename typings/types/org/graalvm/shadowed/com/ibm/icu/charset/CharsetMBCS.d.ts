import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { UConverterSharedData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/UConverterSharedData.d.ts'
export class CharsetMBCS extends CharsetICU {
    static ROUNDTRIP_AND_FALLBACK_SET: number;
    static ROUNDTRIP_SET: number;
    static availableCharsets(): { [key: string]: Charset };
    static defaultCharset(): Charset;
    static forName(paramarg0: string): Charset;
    static forName(paramarg0: string, paramarg1: Charset): Charset;
    static forNameICU(paramcharsetName: string): Charset;
    static isSupported(paramarg0: string): boolean;
    constructor(icuCanonicalName: string, javaCanonicalName: string, aliases: string[])
    constructor(icuCanonicalName: string, javaCanonicalName: string, aliases: string[], classPath: string, loader: ClassLoader)
    // private fromUSubstitution: number[];
    // private sharedData: UConverterSharedData;
    // private EBCDICSwapLFNL(): boolean;
    MBCSGetFilteredUnicodeSetForUnicode(data: UConverterSharedData, setFillIn: string[], which: number, filter: number): void;
    MBCSGetUnicodeSetForUnicode(data: UConverterSharedData, setFillIn: string[], which: number): void;
    getUnicodeSetImpl(setFillIn: string[], which: number): void;
    initializeConverter(myOptions: number): void;
    // private loadConverter(nestedLoads: number, myName: string, classPath: string, loader: ClassLoader): UConverterSharedData;
    newDecoder(): CharsetDecoder;
    newEncoder(): CharsetEncoder;
}