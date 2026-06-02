import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FabricEntityTypeBuilder$Living } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityTypeBuilder$Living.d.ts'
import type { FabricEntityTypeBuilder$Mob } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityTypeBuilder$Mob.d.ts'
import type { ResourceKey } from '../../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityType } from '../../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EntityType$EntityFactory } from '../../../../../../../../net/minecraft/world/entity/EntityType$EntityFactory.d.ts'
import type { MobCategory } from '../../../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { FeatureFlag } from '../../../../../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class FabricEntityTypeBuilder<T extends Entity> extends Object {
    static create(): FabricEntityTypeBuilder<Object>;
    static create(paramarg0: MobCategory): FabricEntityTypeBuilder<Object>;
    static create(paramarg0: MobCategory, paramarg1: (param0: Object | null, param1: EntityType<Object>) => unknown): FabricEntityTypeBuilder<Object>;
    static createLiving(): FabricEntityTypeBuilder$Living<Object>;
    static createMob(): FabricEntityTypeBuilder$Mob<Object>;
    constructor(arg0: MobCategory, arg1: (param0: T, param1: EntityType<Object>) => unknown)
    // private dimensions: EntityDimensions;
    // private factory: (param0: T, param1: EntityType<Object>) => unknown;
    // private fireImmune: boolean;
    // private forceTrackedVelocityUpdates: boolean;
    // private mobCategory: MobCategory;
    // private requiredFeatures: FeatureFlag[];
    // private saveable: boolean;
    // private spawnableFarFromPlayer: boolean;
    // private specificSpawnBlocks: Block[];
    // private summonable: boolean;
    // private trackRange: number;
    // private trackedUpdateRate: number;
    build(arg0: ResourceKey<EntityType<Object>>): EntityType<T>;
    dimensions(arg0: EntityDimensions): FabricEntityTypeBuilder<T>;
    disableSaving(): FabricEntityTypeBuilder<T>;
    disableSummon(): FabricEntityTypeBuilder<T>;
    entityFactory(arg0: (param0: N, param1: EntityType<Object>) => unknown): FabricEntityTypeBuilder<N>;
    fireImmune(): FabricEntityTypeBuilder<T>;
    forceTrackedVelocityUpdates(arg0: boolean): FabricEntityTypeBuilder<T>;
    mobCategory(arg0: MobCategory): FabricEntityTypeBuilder<T>;
    requires(arg0: FeatureFlag[]): FabricEntityTypeBuilder<T>;
    spawnableFarFromPlayer(): FabricEntityTypeBuilder<T>;
    specificSpawnBlocks(arg0: Block[]): FabricEntityTypeBuilder<T>;
    trackRangeBlocks(arg0: number): FabricEntityTypeBuilder<T>;
    trackRangeChunks(arg0: number): FabricEntityTypeBuilder<T>;
    trackable(arg0: number, arg1: number): FabricEntityTypeBuilder<T>;
    trackable(arg0: number, arg1: number, arg2: boolean): FabricEntityTypeBuilder<T>;
    trackedUpdateRate(arg0: number): FabricEntityTypeBuilder<T>;
}