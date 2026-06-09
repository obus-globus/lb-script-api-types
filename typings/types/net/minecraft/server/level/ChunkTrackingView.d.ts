import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export interface ChunkTrackingView extends Object {
    contains(x: number, z: number): boolean;
    contains(chunkX: number, chunkZ: number, includeNeighbors: boolean): boolean;
    contains(pos: ChunkPos): boolean;
    forEach(consumer: (param0: ChunkPos) => void): void;
    isInViewDistance(chunkX: number, chunkZ: number): boolean;
}