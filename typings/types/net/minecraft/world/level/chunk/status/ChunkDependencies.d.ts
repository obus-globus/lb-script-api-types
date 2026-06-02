import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkStatus } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
export class ChunkDependencies extends Object {
    constructor(dependencyByRadius: ChunkStatus[])
    // private dependencyByRadius: ChunkStatus[];
    // private radiusByDependency: number[];
    asList(): ChunkStatus[];
    get(distance: number): ChunkStatus;
    getRadius(): number;
    getRadiusOf(status: ChunkStatus): number;
    size(): number;
    toString(): string;
}