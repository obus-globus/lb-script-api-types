import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkBatchSizeCalculator extends Object {
    constructor()
    // private aggregatedNanosPerChunk: number;
    // private chunkBatchStartTime: number;
    // private oldSamplesWeight: number;
    getDesiredChunksPerTick(): number;
    onBatchFinished(batchSize: number): void;
    onBatchStart(): void;
}