import type { Object } from '../../../java/lang/Object.d.ts'
export interface AdaptivePoolingAllocator$ChunkReleasePredicate extends Object{
    shouldReleaseChunk(arg0: number): boolean;
}