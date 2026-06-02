import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FabricEntityTypeBuilder } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityTypeBuilder.d.ts'
import type { FabricEntityTypeBuilder$Mob } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityTypeBuilder$Mob.d.ts'
import type { ResourceKey } from '../../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EntityDimensions } from '../../../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityType } from '../../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EntityType$EntityFactory } from '../../../../../../../../net/minecraft/world/entity/EntityType$EntityFactory.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MobCategory } from '../../../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class FabricEntityTypeBuilder$Living<T extends LivingEntity> extends FabricEntityTypeBuilder<T> {
    static create(): FabricEntityTypeBuilder<Object>;
    static create(paramarg0: MobCategory): FabricEntityTypeBuilder<Object>;
    static create(paramarg0: MobCategory, paramarg1: (param0: Object | null, param1: EntityType<Object>) => unknown): FabricEntityTypeBuilder<Object>;
    static createLiving(): FabricEntityTypeBuilder$Living<Object>;
    static createMob(): FabricEntityTypeBuilder$Mob<Object>;
    constructor(arg0: MobCategory, arg1: (param0: T, param1: EntityType<Object>) => unknown)
    // private defaultAttributeBuilder: () => AttributeSupplier$Builder;
    build(arg0: ResourceKey<EntityType<Object>>): EntityType<T>;
    defaultAttributes(arg0: () => AttributeSupplier$Builder): FabricEntityTypeBuilder$Living<T>;
    dimensions(arg0: EntityDimensions): FabricEntityTypeBuilder$Living<T>;
    disableSaving(): FabricEntityTypeBuilder$Living<T>;
    disableSummon(): FabricEntityTypeBuilder$Living<T>;
    entityFactory(arg0: (param0: N, param1: EntityType<Object>) => unknown): FabricEntityTypeBuilder$Living<N>;
    fireImmune(): FabricEntityTypeBuilder$Living<T>;
    forceTrackedVelocityUpdates(arg0: boolean): FabricEntityTypeBuilder$Living<T>;
    mobCategory(arg0: MobCategory): FabricEntityTypeBuilder$Living<T>;
    spawnableFarFromPlayer(): FabricEntityTypeBuilder$Living<T>;
    specificSpawnBlocks(arg0: Block[]): FabricEntityTypeBuilder$Living<T>;
    trackRangeBlocks(arg0: number): FabricEntityTypeBuilder$Living<T>;
    trackRangeChunks(arg0: number): FabricEntityTypeBuilder$Living<T>;
    trackable(arg0: number, arg1: number): FabricEntityTypeBuilder$Living<T>;
    trackable(arg0: number, arg1: number, arg2: boolean): FabricEntityTypeBuilder$Living<T>;
    trackedUpdateRate(arg0: number): FabricEntityTypeBuilder$Living<T>;
}