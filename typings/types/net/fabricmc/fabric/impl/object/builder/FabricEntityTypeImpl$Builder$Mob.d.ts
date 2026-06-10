import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { FabricEntityType$Builder$Mob } from '../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityType$Builder$Mob.d.ts'
import type { FabricEntityTypeImpl$Builder$Living } from '../../../../../../net/fabricmc/fabric/impl/object/builder/FabricEntityTypeImpl$Builder$Living.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { EntitySpawnReason } from '../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { SpawnPlacementType } from '../../../../../../net/minecraft/world/entity/SpawnPlacementType.d.ts'
import type { SpawnPlacements$SpawnPredicate } from '../../../../../../net/minecraft/world/entity/SpawnPlacements$SpawnPredicate.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { ServerLevelAccessor } from '../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { Heightmap$Types } from '../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
export class FabricEntityTypeImpl$Builder$Mob<T extends Mob> extends FabricEntityTypeImpl$Builder$Living<T> implements FabricEntityType$Builder$Mob<T> {
    constructor()
    // private placementHeightmap: Heightmap$Types;
    // private placementType: SpawnPlacementType;
    // private spawnPredicate: (param0: EntityType<T>, param1: ServerLevelAccessor, param2: EntitySpawnReason, param3: BlockPos, param4: RandomSource) => boolean;
    defaultAttributes(arg0: () => AttributeSupplier$Builder): FabricEntityType$Builder$Mob<T>;
    onBuild(arg0: EntityType<T>): void;
    spawnPlacement(arg0: SpawnPlacementType, arg1: Heightmap$Types, arg2: (param0: EntityType<T>, param1: ServerLevelAccessor, param2: EntitySpawnReason, param3: BlockPos, param4: RandomSource) => boolean): FabricEntityType$Builder$Mob<T>;
}