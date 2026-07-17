import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricEntityTypeImpl } from '../../../../net/fabricmc/fabric/impl/object/builder/FabricEntityTypeImpl.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityProcessor } from '../../../../net/minecraft/world/entity/EntityProcessor.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntitySpawnRequest } from '../../../../net/minecraft/world/entity/EntitySpawnRequest.d.ts'
import type { EntityType$EntityFactory } from '../../../../net/minecraft/world/entity/EntityType$EntityFactory.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { PostSpawnProcessor } from '../../../../net/minecraft/world/entity/PostSpawnProcessor.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TypedEntityData } from '../../../../net/minecraft/world/item/component/TypedEntityData.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { EntityTypeTest } from '../../../../net/minecraft/world/level/entity/EntityTypeTest.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class EntityType<T extends Entity> extends Object implements FabricEntityTypeImpl, FeatureElement, EntityTypeTest<Entity, T> {
    static CODEC: Codec<EntityType<any>>;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, EntityType<any>>;
    static appendComponentsConfig<T extends Entity>(paraminitialConfig: PostSpawnProcessor<T>, paramitemStack: ItemStack): PostSpawnProcessor<T>;
    static appendCustomEntityStackConfig<T extends Entity>(paraminitialConfig: PostSpawnProcessor<T>, paramlevel: Level, paramitemStack: ItemStack, paramuser: LivingEntity): PostSpawnProcessor<T>;
    static appendDefaultStackConfig<T extends Entity>(paraminitialConfig: PostSpawnProcessor<T>, paramlevel: Level, paramitemStack: ItemStack, paramuser: LivingEntity): PostSpawnProcessor<T>;
    static by(paraminput: ValueInput): Optional<EntityType<any>>;
    static create(paramtype: EntityType<any>, paraminput: ValueInput, paramlevel: Level, paramreason: EntitySpawnReason): Optional<Entity>;
    static create(paraminput: ValueInput, paramlevel: Level, paramrequest: EntitySpawnRequest): Optional<Entity>;
    static createDefaultStackConfig<T extends Entity>(paramlevel: Level, paramitemStack: ItemStack, paramuser: LivingEntity): PostSpawnProcessor<T>;
    static getKey(paramtype: EntityType<any>): Identifier;
    static loadEntitiesRecursive(paramentities: ValueInput[], paramlevel: Level, paramreason: EntitySpawnReason): Stream<Entity>;
    static loadEntityRecursive(paramtag: CompoundTag, paramlevel: Level, paramrequest: EntitySpawnRequest, parampostLoad: (param0: Entity) => Entity): Entity;
    static loadEntityRecursive(paramtype: EntityType<any>, paramtag: CompoundTag, paramlevel: Level, paramreason: EntitySpawnReason, parampostLoad: (param0: Entity) => Entity): Entity;
    static loadEntityRecursive(paramtype: EntityType<any>, paraminput: ValueInput, paramlevel: Level, paramreason: EntitySpawnReason, parampostLoad: (param0: Entity) => Entity): Entity;
    static loadEntityRecursive(paraminput: ValueInput, paramlevel: Level, paramreason: EntitySpawnReason, parampostLoad: (param0: Entity) => Entity): Entity;
    static loadEntityRecursive(paraminput: ValueInput, paramlevel: Level, paramrequest: EntitySpawnRequest, parampostLoad: (param0: Entity) => Entity): Entity;
    static updateCustomEntityTag(paramlevel: Level, paramuser: LivingEntity, paramentity: Entity, paramentityData: TypedEntityData<EntityType<any>>): void;
    constructor(factory: (param0: EntityType<T>, param1: Level) => T, category: MobCategory, serialize: boolean, summon: boolean, fireImmune: boolean, canSpawnFarFromPlayer: boolean, immuneTo: TagKey<Block>, dimensions: EntityDimensions, spawnDimensionsScale: number, clientTrackingRange: number, updateInterval: number, descriptionId: string, lootTable: Optional<ResourceKey<LootTable>>, requiredFeatures: FeatureFlagSet, allowedInPeaceful: boolean)
    readonly allowedInPeaceful: boolean;
    // private alwaysUpdateVelocity: boolean;
    // private builtInRegistryHolder: Holder$Reference<EntityType<any>>;
    // private canPotentiallyExecuteCommands: boolean;
    // private canSpawnFarFromPlayer: boolean;
    readonly category: MobCategory;
    // private clientTrackingRange: number;
    readonly description: Component;
    readonly descriptionId: string;
    dimensions: EntityDimensions;
    // private factory: (param0: EntityType<T>, param1: Level) => T;
    // private fireImmune: boolean;
    // private immuneTo: TagKey<Block>;
    // private lootTable: Optional<ResourceKey<LootTable>>;
    // private requiredFeatures: FeatureFlagSet;
    // private serialize: boolean;
    // private spawnDimensionsScale: number;
    // private summon: boolean;
    // private updateInterval: number;
    builtInRegistryHolder(): Holder$Reference<EntityType<any>>;
    canSerialize(): boolean;
    canSpawn(level: Level): boolean;
    canSpawnFarFromPlayer(): boolean;
    canSummon(): boolean;
    clientTrackingRange(): number;
    create(level: ServerLevel, postSpawnConfig: PostSpawnProcessor<T>, spawnPos: BlockPos, spawnReason: EntitySpawnReason, tryMoveDown: boolean, movedUp: boolean): T;
    create(level: Level, reason: EntitySpawnReason): T;
    create(level: Level, request: EntitySpawnRequest): T;
    fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
    fabric_setCanPotentiallyExecuteCommands(arg0: boolean): void;
    fireImmune(): boolean;
    getBaseClass(): Class<Entity>;
    getCategory(): MobCategory;
    getDefaultLootTable(): Optional<ResourceKey<LootTable>>;
    getDescription(): Component;
    getDescriptionId(): string;
    getDimensions(): EntityDimensions;
    getHeight(): number;
    getSpawnAABB(x: number, y: number, z: number): AABB;
    getWidth(): number;
    isAllowedInPeaceful(): boolean;
    isBlockDangerous(state: BlockState): boolean;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    onlyOpCanSetNbt(): boolean;
    requiredFeatures(): FeatureFlagSet;
    spawn(level: ServerLevel, spawnPos: BlockPos, spawnReason: EntitySpawnReason): T;
    spawn(level: ServerLevel, postSpawnConfig: PostSpawnProcessor<T>, spawnPos: BlockPos, spawnReason: EntitySpawnReason, tryMoveDown: boolean, movedUp: boolean): T;
    spawn(level: ServerLevel, itemStack: ItemStack, user: LivingEntity, spawnPos: BlockPos, spawnReason: EntitySpawnReason, tryMoveDown: boolean, movedUp: boolean): T;
    toShortString(): string;
    toString(): string;
    trackDeltas(): boolean;
    tryCast(entity: Entity): T;
    updateInterval(): number;
}