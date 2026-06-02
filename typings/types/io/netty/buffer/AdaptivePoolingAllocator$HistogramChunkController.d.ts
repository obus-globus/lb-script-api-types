import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkController.d.ts'
import type { AdaptivePoolingAllocator$ChunkRegistry } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkRegistry.d.ts'
import type { AdaptivePoolingAllocator$ChunkReleasePredicate } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkReleasePredicate.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$HistogramChunkController extends Object implements AdaptivePoolingAllocator$ChunkController, AdaptivePoolingAllocator$ChunkReleasePredicate {
    private constructor(arg0: AdaptivePoolingAllocator$MagazineGroup, arg1: boolean)
    // private chunkRegistry: AdaptivePoolingAllocator$ChunkRegistry;
    // private datumCount: number;
    // private datumTarget: number;
    // private group: AdaptivePoolingAllocator$MagazineGroup;
    // private hasHadRotation: boolean;
    // private histo: number[];
    // private histoIndex: number;
    // private histos: number[][];
    // private localPrefChunkSize: number;
    // private localUpperBufSize: number;
    // private shareable: boolean;
    // private sharedPrefChunkSize: number;
    // private sums: number[];
    computeBufferCapacity(arg0: number, arg1: number, arg2: boolean): number;
    initializeSharedStateIn(arg0: AdaptivePoolingAllocator$ChunkController): void;
    newChunkAllocation(arg0: number, arg1: AdaptivePoolingAllocator$Magazine): AdaptivePoolingAllocator$Chunk;
    preferredChunkSize(): number;
    // private recordAllocationSize(arg0: number): void;
    // private rotateHistograms(): void;
    shouldReleaseChunk(arg0: number): boolean;
}