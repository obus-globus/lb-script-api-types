import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
export interface NaturalSpawner$AfterSpawnCallback extends Object{
    run(mob: Mob, levelChunk: ChunkAccess): void;
}