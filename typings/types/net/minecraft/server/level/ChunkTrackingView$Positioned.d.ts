import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkTrackingView } from '../../../../net/minecraft/server/level/ChunkTrackingView.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ChunkTrackingView$Positioned extends Record implements ChunkTrackingView {
    static EMPTY: ChunkTrackingView;
    static difference(paramfrom: ChunkTrackingView, paramto: ChunkTrackingView, paramonEnter: (param0: ChunkPos) => void, paramonLeave: (param0: ChunkPos) => void): void;
    static isInViewDistance(paramcenterX: number, paramcenterZ: number, paramviewDistance: number, paramchunkX: number, paramchunkZ: number): boolean;
    static isWithinDistance(paramcenterX: number, paramcenterZ: number, paramviewDistance: number, paramchunkX: number, paramchunkZ: number, paramincludeNeighbors: boolean): boolean;
    static of(paramcenter: ChunkPos, paramradius: number): ChunkTrackingView;
    // private center: ChunkPos;
    // private viewDistance: number;
    center(): ChunkPos;
    contains(x: number, z: number): boolean;
    contains(chunkX: number, chunkZ: number, includeNeighbors: boolean): boolean;
    contains(pos: ChunkPos): boolean;
    contains(x: number, z: number): boolean;
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