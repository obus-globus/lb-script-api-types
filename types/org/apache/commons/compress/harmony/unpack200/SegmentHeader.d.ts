import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BHSDCodec } from '../../../../../../org/apache/commons/compress/harmony/pack200/BHSDCodec.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
import type { SegmentOptions } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentOptions.d.ts'
export class SegmentHeader extends Object {
    constructor(arg0: Segment)
    // private archiveMajor: number;
    // private archiveMinor: number;
    readonly archiveModtime: number;
    readonly archiveSize: number;
    readonly archiveSizeOffset: number;
    readonly attributeDefinitionCount: number;
    readonly bandHeadersInputStream: InputStream;
    readonly bandHeadersSize: number;
    readonly classCount: number;
    readonly cpClassCount: number;
    readonly cpDescriptorCount: number;
    readonly cpDoubleCount: number;
    readonly cpFieldCount: number;
    readonly cpFloatCount: number;
    readonly cpIMethodCount: number;
    readonly cpIntCount: number;
    readonly cpLongCount: number;
    readonly cpMethodCount: number;
    readonly cpSignatureCount: number;
    readonly cpStringCount: number;
    readonly cpUTF8Count: number;
    readonly defaultClassMajorVersion: number;
    readonly defaultClassMinorVersion: number;
    readonly innerClassCount: number;
    readonly numberOfFiles: number;
    readonly options: SegmentOptions;
    // private segment: Segment;
    readonly segmentsRemaining: number;
    // private decodeScalar(arg0: string, arg1: InputStream, arg2: BHSDCodec): number;
    // private decodeScalar(arg0: string, arg1: InputStream, arg2: BHSDCodec, arg3: number): number[];
    getArchiveModtime(): number;
    getArchiveSize(): number;
    getArchiveSizeOffset(): number;
    getAttributeDefinitionCount(): number;
    getBandHeadersInputStream(): InputStream;
    getBandHeadersSize(): number;
    getClassCount(): number;
    getCpClassCount(): number;
    getCpDescriptorCount(): number;
    getCpDoubleCount(): number;
    getCpFieldCount(): number;
    getCpFloatCount(): number;
    getCpIMethodCount(): number;
    getCpIntCount(): number;
    getCpLongCount(): number;
    getCpMethodCount(): number;
    getCpSignatureCount(): number;
    getCpStringCount(): number;
    getCpUTF8Count(): number;
    getDefaultClassMajorVersion(): number;
    getDefaultClassMinorVersion(): number;
    getInnerClassCount(): number;
    getNumberOfFiles(): number;
    getOptions(): SegmentOptions;
    getSegmentsRemaining(): number;
    // private parseArchiveFileCounts(arg0: InputStream): void;
    // private parseArchiveSpecialCounts(arg0: InputStream): void;
    // private parseClassCounts(arg0: InputStream): void;
    // private parseCpCounts(arg0: InputStream): void;
    read(arg0: InputStream): void;
    // private setArchiveMajorVersion(arg0: number): void;
    // private setArchiveMinorVersion(arg0: number): void;
    setArchiveModtime(arg0: number): void;
    setArchiveSize(arg0: number): void;
    // private setAttributeDefinitionCount(arg0: number): void;
    // private setBandHeadersData(arg0: number[]): void;
    setSegmentsRemaining(arg0: number): void;
    unpack(): void;
}