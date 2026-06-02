import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BHSDCodec } from '../../../../../../org/apache/commons/compress/harmony/pack200/BHSDCodec.d.ts'
import type { BandSet$BandAnalysisResults } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet$BandAnalysisResults.d.ts'
import type { BandSet$BandData } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet$BandData.d.ts'
import type { ConstantPoolEntry } from '../../../../../../org/apache/commons/compress/harmony/pack200/ConstantPoolEntry.d.ts'
import type { SegmentHeader } from '../../../../../../org/apache/commons/compress/harmony/pack200/SegmentHeader.d.ts'
export abstract class BandSet extends Object {
    constructor(arg0: number, arg1: SegmentHeader)
    // private canonicalLargest: number[];
    // private canonicalSmallest: number[];
    // private effort: number;
    // private segmentHeader: SegmentHeader;
    // private analyseBand(arg0: string, arg1: number[], arg2: BHSDCodec): BandSet$BandAnalysisResults;
    cpEntryListToArray(arg0: ConstantPoolEntry[]): number[];
    cpEntryOrNullListToArray(arg0: ConstantPoolEntry[]): number[];
    encodeBandInt(arg0: string, arg1: number[], arg2: BHSDCodec): number[];
    encodeFlags(arg0: string, arg1: number[][], arg2: BHSDCodec, arg3: BHSDCodec, arg4: boolean): number[];
    encodeFlags(arg0: string, arg1: number[], arg2: BHSDCodec, arg3: BHSDCodec, arg4: boolean): number[];
    encodeScalar(arg0: number, arg1: BHSDCodec): number[];
    encodeScalar(arg0: number[], arg1: BHSDCodec): number[];
    // private encodeWithPopulationCodec(arg0: number[], arg1: BHSDCodec, arg2: BandSet$BandData, arg3: BandSet$BandAnalysisResults): void;
    // private flatten(arg0: number[][]): number[];
    integerListToArray(arg0: number[]): number[];
    longListToArray(arg0: number[]): number[];
    pack(arg0: OutputStream): void;
    // private timeToStop(arg0: BandSet$BandAnalysisResults): boolean;
    // private tryCodecs(arg0: number[], arg1: BHSDCodec, arg2: BandSet$BandData, arg3: BandSet$BandAnalysisResults, arg4: number[], arg5: BHSDCodec[]): void;
}