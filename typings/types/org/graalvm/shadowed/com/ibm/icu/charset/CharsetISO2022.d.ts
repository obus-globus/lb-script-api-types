import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetISO2022$UConverterDataISO2022 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetISO2022$UConverterDataISO2022.d.ts'
import type { UConverterSharedData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/UConverterSharedData.d.ts'
export class CharsetISO2022 extends CharsetICU {
    static ROUNDTRIP_AND_FALLBACK_SET: number;
    static ROUNDTRIP_SET: number;
    static availableCharsets(): JavaMap<string, Charset>;
    static defaultCharset(): Charset;
    static forName(paramarg0: string): Charset;
    static forName(paramarg0: string, paramarg1: Charset): Charset;
    static forNameICU(paramcharsetName: string): Charset;
    static isSupported(paramarg0: string): boolean;
    constructor(icuCanonicalName: string, javaCanonicalName: string, aliases: string[])
    // private fromUSubstitutionChar: number[][];
    // private myConverterData: CharsetISO2022$UConverterDataISO2022;
    // private variant: number;
    // private ISO2022InitCN(version: number): void;
    // private ISO2022InitJP(version: number): void;
    // private ISO2022InitKR(version: number): void;
    // private MBCSSimpleGetNextUChar(sharedData: UConverterSharedData, source: ByteBuffer, useFallback: boolean): number;
    // private changeState_2022(decoder: CharsetDecoderICU, source: ByteBuffer, var_: number): CoderResult;
    getUnicodeSetImpl(setFillIn: string[], which: number): void;
    newDecoder(): CharsetDecoder;
    newEncoder(): CharsetEncoder;
    // private setInitialStateFromUnicodeKR(cnv: CharsetEncoderICU): void;
    // private setInitialStateToUnicodeKR(): void;
}