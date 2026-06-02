import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LocalMobCapCalculator } from '../../../../net/minecraft/world/level/LocalMobCapCalculator.d.ts'
import type { PotentialCalculator } from '../../../../net/minecraft/world/level/PotentialCalculator.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
export class NaturalSpawner$SpawnState extends Object {
    private constructor(spawnableChunkCount: number, mobCategoryCounts: Object2IntOpenHashMap<MobCategory>, spawnPotential: PotentialCalculator, localMobCapCalculator: LocalMobCapCalculator)
    // private lastCharge: number;
    // private lastCheckedPos: BlockPos;
    // private lastCheckedType: EntityType<Object>;
    // private localMobCapCalculator: LocalMobCapCalculator;
    readonly mobCategoryCounts: Object2IntOpenHashMap<MobCategory>;
    // private spawnPotential: PotentialCalculator;
    readonly spawnableChunkCount: number;
    // private unmodifiableMobCategoryCounts: Object2IntMap<MobCategory>;
    // private afterSpawn(mob: Mob, chunk: ChunkAccess): void;
    // private canSpawn(type: EntityType<Object>, testPos: BlockPos, chunk: ChunkAccess): boolean;
    // private canSpawnForCategoryGlobal(mobCategory: MobCategory): boolean;
    // private canSpawnForCategoryLocal(mobCategory: MobCategory, chunkPos: ChunkPos): boolean;
    getMobCategoryCounts(): Object2IntMap<MobCategory>;
    getSpawnableChunkCount(): number;
}