import type { Deflater } from '../../../../../../java/util/zip/Deflater.d.ts'
import type { StreamCompressor } from '../../../../../../org/apache/commons/compress/archivers/zip/StreamCompressor.d.ts'
import type { ScatterGatherBackingStore } from '../../../../../../org/apache/commons/compress/parallel/ScatterGatherBackingStore.d.ts'
export class StreamCompressor$ScatterGatherBackingStoreCompressor extends StreamCompressor {
    static create(paramarg0: number, paramarg1: ScatterGatherBackingStore): StreamCompressor;
    static create(paramarg0: ScatterGatherBackingStore): StreamCompressor;
    constructor(arg0: Deflater, arg1: ScatterGatherBackingStore)
    // private bs: ScatterGatherBackingStore;
    writeOut(arg0: number[], arg1: number, arg2: number): void;
}