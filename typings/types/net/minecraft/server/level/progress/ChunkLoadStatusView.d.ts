import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { ChunkStatus } from '../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
export interface ChunkLoadStatusView extends Object{
    get(x: number, z: number): ChunkStatus;
    moveTo(dimension: ResourceKey<Level>, centerChunk: ChunkPos): void;
    radius(): number;
}