import type { FilterInputStream } from '../../../../../../java/io/FilterInputStream.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SevenZFile$ArchiveStatistics extends Object {
    constructor(arg0: FilterInputStream)
    // private folderHasCrc: BitSet;
    // private numberOfCoders: number;
    // private numberOfEntries: number;
    // private numberOfEntriesWithStream: number;
    // private numberOfFolders: number;
    // private numberOfInStreams: number;
    // private numberOfOutStreams: number;
    // private numberOfPackedStreams: number;
    // private numberOfUnpackSubStreams: number;
    assertValidity(arg0: number): void;
    // private bindPairSize(): number;
    // private coderSize(): number;
    // private entrySize(): number;
    estimateSize(): number;
    // private folderSize(): number;
    // private streamMapSize(): number;
    toString(): string;
}