import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FabricEntityTypeBuilder } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityTypeBuilder.d.ts'
import type { FabricEntityTypeBuilder$Living } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityTypeBuilder$Living.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ResourceKey } from '../../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EntityDimensions } from '../../../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntitySpawnReason } from '../../../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EntityType$EntityFactory } from '../../../../../../../../net/minecraft/world/entity/EntityType$EntityFactory.d.ts'
import type { Mob } from '../../../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MobCategory } from '../../../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { SpawnPlacementType } from '../../../../../../../../net/minecraft/world/entity/SpawnPlacementType.d.ts'
import type { SpawnPlacements$SpawnPredicate } from '../../../../../../../../net/minecraft/world/entity/SpawnPlacements$SpawnPredicate.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Heightmap$Types } from '../../../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
export class FabricEntityTypeBuilder$Mob<T extends Mob> extends FabricEntityTypeBuilder$Living<T> {
    static create(): FabricEntityTypeBuilder<Object>;
    static create(paramarg0: MobCategory): FabricEntityTypeBuilder<Object>;
    static create(paramarg0: MobCategory, paramarg1: (param0: Object | null, param1: EntityType<Object>) => unknown): FabricEntityTypeBuilder<Object>;
    static createLiving(): FabricEntityTypeBuilder$Living<Object>;
    static createMob(): FabricEntityTypeBuilder$Mob<Object>;
    constructor(arg0: MobCategory, arg1: (param0: T, param1: EntityType<Object>) => unknown)
    // private placementHeightmap: Heightmap$Types;
    // private spawnPlacementType: SpawnPlacementType;
    // private spawnPredicate: (param0: T, param1: EntityType<Object>, param2: ServerLevelAccessor, param3: EntitySpawnReason, param4: BlockPos) => kotlin.Boolean;
    build(arg0: ResourceKey<EntityType<Object>>): EntityType<T>;
    defaultAttributes(arg0: () => AttributeSupplier$Builder): FabricEntityTypeBuilder$Mob<T>;
    dimensions(arg0: EntityDimensions): FabricEntityTypeBuilder$Mob<T>;
    disableSaving(): FabricEntityTypeBuilder$Mob<T>;
    disableSummon(): FabricEntityTypeBuilder$Mob<T>;
    entityFactory(arg0: (param0: N, param1: EntityType<Object>) => unknown): FabricEntityTypeBuilder$Mob<N>;
    fireImmune(): FabricEntityTypeBuilder$Mob<T>;
    forceTrackedVelocityUpdates(arg0: boolean): FabricEntityTypeBuilder$Mob<T>;
    mobCategory(arg0: MobCategory): FabricEntityTypeBuilder$Mob<T>;
    spawnPlacement(arg0: SpawnPlacementType, arg1: Heightmap$Types, arg2: (param0: T, param1: EntityType<Object>, param2: ServerLevelAccessor, param3: EntitySpawnReason, param4: BlockPos) => kotlin.Boolean): FabricEntityTypeBuilder$Mob<T>;
    spawnableFarFromPlayer(): FabricEntityTypeBuilder$Mob<T>;
    specificSpawnBlocks(arg0: Block[]): FabricEntityTypeBuilder$Mob<T>;
    trackRangeBlocks(arg0: number): FabricEntityTypeBuilder$Mob<T>;
    trackRangeChunks(arg0: number): FabricEntityTypeBuilder$Mob<T>;
    trackable(arg0: number, arg1: number): FabricEntityTypeBuilder$Mob<T>;
    trackable(arg0: number, arg1: number, arg2: boolean): FabricEntityTypeBuilder$Mob<T>;
    trackedUpdateRate(arg0: number): FabricEntityTypeBuilder$Mob<T>;
}