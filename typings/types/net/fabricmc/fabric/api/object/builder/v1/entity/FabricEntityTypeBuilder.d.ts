import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FabricEntityTypeBuilder$Living } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityTypeBuilder$Living.d.ts'
import type { FabricEntityTypeBuilder$Mob } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityTypeBuilder$Mob.d.ts'
import type { ResourceKey } from '../../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityType } from '../../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EntityType$EntityFactory } from '../../../../../../../../net/minecraft/world/entity/EntityType$EntityFactory.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MobCategory } from '../../../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { FeatureFlag } from '../../../../../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class FabricEntityTypeBuilder<T extends Entity> extends Object {
    static create(): FabricEntityTypeBuilder<Entity>;
    static create(paramarg0: MobCategory): FabricEntityTypeBuilder<Entity>;
    static create(paramarg0: MobCategory, paramarg1: (param0: EntityType<Entity>, param1: Level) => Entity | null): FabricEntityTypeBuilder<Entity>;
    static createLiving(): FabricEntityTypeBuilder$Living<LivingEntity>;
    static createMob(): FabricEntityTypeBuilder$Mob<Mob>;
    constructor(arg0: MobCategory, arg1: (param0: EntityType<T>, param1: Level) => T)
    // private dimensions: EntityDimensions;
    // private factory: (param0: EntityType<T>, param1: Level) => T;
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
    build(arg0: ResourceKey<EntityType<any>>): EntityType<T>;
    dimensions(arg0: EntityDimensions): FabricEntityTypeBuilder<T>;
    disableSaving(): FabricEntityTypeBuilder<T>;
    disableSummon(): FabricEntityTypeBuilder<T>;
    entityFactory<N extends T>(arg0: (param0: EntityType<N>, param1: Level) => N): FabricEntityTypeBuilder<N>;
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