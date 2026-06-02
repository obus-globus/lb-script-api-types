import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FabricEntityType$Builder$Living } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityType$Builder$Living.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { EntitySpawnReason } from '../../../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Mob } from '../../../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { SpawnPlacementType } from '../../../../../../../../net/minecraft/world/entity/SpawnPlacementType.d.ts'
import type { SpawnPlacements$SpawnPredicate } from '../../../../../../../../net/minecraft/world/entity/SpawnPlacements$SpawnPredicate.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { Heightmap$Types } from '../../../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
export interface FabricEntityType$Builder$Mob<T extends Mob> extends Object, FabricEntityType$Builder$Living<T>{
    defaultAttributes(arg0: () => AttributeSupplier$Builder): FabricEntityType$Builder$Mob<T>;
    spawnPlacement(arg0: SpawnPlacementType, arg1: Heightmap$Types, arg2: (param0: T, param1: EntityType<Object>, param2: ServerLevelAccessor, param3: EntitySpawnReason, param4: BlockPos) => kotlin.Boolean): FabricEntityType$Builder$Mob<T>;
}