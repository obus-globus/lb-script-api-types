import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricEntityType$Builder } from '../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityType$Builder.d.ts'
import type { FabricEntityType$Builder$Living } from '../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityType$Builder$Living.d.ts'
import type { FabricEntityType$Builder$Mob } from '../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityType$Builder$Mob.d.ts'
import type { FabricEntityTypeImpl$Builder } from '../../../../net/fabricmc/fabric/impl/object/builder/FabricEntityTypeImpl$Builder.d.ts'
import type { FabricEntityTypeImpl$Builder$Living } from '../../../../net/fabricmc/fabric/impl/object/builder/FabricEntityTypeImpl$Builder$Living.d.ts'
import type { FabricEntityTypeImpl$Builder$Mob } from '../../../../net/fabricmc/fabric/impl/object/builder/FabricEntityTypeImpl$Builder$Mob.d.ts'
import type { DependantName } from '../../../../net/minecraft/resources/DependantName.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityAttachment } from '../../../../net/minecraft/world/entity/EntityAttachment.d.ts'
import type { EntityAttachments$Builder } from '../../../../net/minecraft/world/entity/EntityAttachments$Builder.d.ts'
import type { EntityDimensions } from '../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EntityType$EntityFactory } from '../../../../net/minecraft/world/entity/EntityType$EntityFactory.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { FeatureFlag } from '../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntityType$Builder<T extends Entity> extends Object implements FabricEntityType$Builder<T>, FabricEntityTypeImpl$Builder {
    static createLiving(paramarg0: (param0: EntityType<LivingEntity>, param1: Level) => LivingEntity | null, paramarg1: MobCategory, paramarg2: (param0: FabricEntityType$Builder$Living<LivingEntity>) => Object | null): EntityType$Builder<LivingEntity>;
    static createLiving(paramarg0: (param0: EntityType<LivingEntity>, param1: Level) => LivingEntity | null, paramarg1: MobCategory, paramarg2: (param0: FabricEntityType$Builder$Living<LivingEntity>) => Object | null): EntityType$Builder<LivingEntity>;
    static createMob(paramarg0: (param0: EntityType<Mob>, param1: Level) => Mob | null, paramarg1: MobCategory, paramarg2: (param0: FabricEntityType$Builder$Mob<Mob>) => Object | null): EntityType$Builder<Mob>;
    static createMob(paramarg0: (param0: EntityType<Mob>, param1: Level) => Mob | null, paramarg1: MobCategory, paramarg2: (param0: FabricEntityType$Builder$Mob<Mob>) => Object | null): EntityType$Builder<Mob>;
    static createNothing(paramcategory: MobCategory): EntityType$Builder<Entity>;
    static of(paramfactory: (param0: EntityType<Entity>, param1: Level) => Entity | null, paramcategory: MobCategory): EntityType$Builder<Entity>;
    private constructor(factory: (param0: EntityType<T>, param1: Level) => T, category: MobCategory)
    // private allowedInPeaceful: boolean;
    // private alwaysUpdateVelocity: boolean;
    // private attachments: EntityAttachments$Builder;
    // private canPotentiallyExecuteCommands: boolean;
    // private canSpawnFarFromPlayer: boolean;
    // private category: MobCategory;
    // private clientTrackingRange: number;
    // private descriptionId: (param0: ResourceKey<EntityType<any>>) => string;
    // private dimensions: EntityDimensions;
    // private factory: (param0: EntityType<T>, param1: Level) => T;
    // private fireImmune: boolean;
    // private immuneTo: TagKey<Block>;
    // private livingBuilder: FabricEntityTypeImpl$Builder$Living<LivingEntity>;
    // private lootTable: (param0: ResourceKey<EntityType<any>>) => Optional<ResourceKey<LootTable>>;
    // private mobBuilder: FabricEntityTypeImpl$Builder$Mob<Mob>;
    // private requiredFeatures: FeatureFlagSet;
    // private serialize: boolean;
    // private spawnDimensionsScale: number;
    // private summon: boolean;
    // private updateInterval: number;
    alwaysUpdateVelocity(arg0: boolean): EntityType$Builder<T>;
    alwaysUpdateVelocity(arg0: boolean): EntityType$Builder<Entity>;
    attach(attachment: EntityAttachment, x: number, y: number, z: number): EntityType$Builder<T>;
    attach(attachment: EntityAttachment, point: Vec3): EntityType$Builder<T>;
    build(name: ResourceKey<EntityType<any>>): EntityType<T>;
    canPotentiallyExecuteCommands(arg0: boolean): EntityType$Builder<T>;
    canPotentiallyExecuteCommands(arg0: boolean): EntityType$Builder<Entity>;
    canSpawnFarFromPlayer(): EntityType$Builder<T>;
    clientTrackingRange(clientChunkRange: number): EntityType$Builder<T>;
    eyeHeight(eyeHeight: number): EntityType$Builder<T>;
    fabric_setLivingEntityBuilder(arg0: FabricEntityTypeImpl$Builder$Living<LivingEntity>): void;
    fabric_setMobEntityBuilder(arg0: FabricEntityTypeImpl$Builder$Mob<Mob>): void;
    fireImmune(): EntityType$Builder<T>;
    immuneTo(tag: TagKey<Block>): EntityType$Builder<T>;
    nameTagOffset(nameTagOffset: number): EntityType$Builder<T>;
    noLootTable(): EntityType$Builder<T>;
    noSave(): EntityType$Builder<T>;
    noSummon(): EntityType$Builder<T>;
    notInPeaceful(): EntityType$Builder<T>;
    passengerAttachments(points: Vec3[]): EntityType$Builder<T>;
    passengerAttachments(offsetYs: number[]): EntityType$Builder<T>;
    requiredFeatures(flags: FeatureFlag[]): EntityType$Builder<T>;
    ridingOffset(ridingOffset: number): EntityType$Builder<T>;
    sized(width: number, height: number): EntityType$Builder<T>;
    spawnDimensionsScale(scale: number): EntityType$Builder<T>;
    updateInterval(updateInterval: number): EntityType$Builder<T>;
    vehicleAttachment(point: Vec3): EntityType$Builder<T>;
}