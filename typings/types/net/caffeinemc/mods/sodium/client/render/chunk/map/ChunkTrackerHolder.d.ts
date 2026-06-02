import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ChunkTracker } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/map/ChunkTracker.d.ts'
export interface ChunkTrackerHolder extends Object{
    sodium$getTracker(): ChunkTracker;
}