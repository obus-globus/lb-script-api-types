import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkTrackingView } from '../../../../net/minecraft/server/level/ChunkTrackingView.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ChunkTrackingView$Positioned extends Record implements ChunkTrackingView {
    static EMPTY: ChunkTrackingView;
    constructor(center: ChunkPos, viewDistance: number)
    // private center: ChunkPos;
    // private viewDistance: number;
    center(): ChunkPos;
    contains(x: number, z: number): boolean;
    contains(chunkX: number, chunkZ: number, includeNeighbors: boolean): boolean;
    contains(pos: ChunkPos): boolean;
    equals(o: Object | null): boolean;
    forEach(consumer: (param0: ChunkPos) => void): void;
    hashCode(): number;
    isInViewDistance(chunkX: number, chunkZ: number): boolean;
    // private maxX(): number;
    // private maxZ(): number;
    // private minX(): number;
    // private minZ(): number;
    squareIntersects(other: ChunkTrackingView$Positioned): boolean;
    toString(): string;
    viewDistance(): number;
}