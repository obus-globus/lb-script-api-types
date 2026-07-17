import type { IEntity } from '../../../../com/viaversion/viafabricplus/injection/access/world/always_tick_entities/IEntity.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FeetBlockCachingEntity } from '../../../../net/caffeinemc/mods/lithium/common/entity/pushable/FeetBlockCachingEntity.d.ts'
import type { MaybeInLevelObject } from '../../../../net/caffeinemc/mods/lithium/common/world/in_world_tracking/MaybeInLevelObject.d.ts'
import type { EntityAccessor } from '../../../../net/caffeinemc/mods/lithium/mixin/block/hopper/EntityAccessor.d.ts'
import type { AttachmentTarget } from '../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTarget$OnAttachedSet } from '../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget$OnAttachedSet.d.ts'
import type { AttachmentType } from '../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { Event } from '../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { EntityLoadData } from '../../../../net/fabricmc/fabric/api/event/lifecycle/v1/EntityLoadData.d.ts'
import type { PermissionContext } from '../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { PermissionContextOwner } from '../../../../net/fabricmc/fabric/api/permission/v1/PermissionContextOwner.d.ts'
import type { PermissionNode } from '../../../../net/fabricmc/fabric/api/permission/v1/PermissionNode.d.ts'
import type { TriState } from '../../../../net/fabricmc/fabric/api/util/TriState.d.ts'
import type { AttachmentTargetImpl } from '../../../../net/fabricmc/fabric/impl/attachment/AttachmentTargetImpl.d.ts'
import type { AttachmentChange } from '../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { AttachmentTargetInfo } from '../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { EntityLoadDataSetter } from '../../../../net/fabricmc/fabric/impl/event/lifecycle/EntityLoadDataSetter.d.ts'
import type { EntityAccessor as EntityAccessor_2 } from '../../../../net/fabricmc/fabric/mixin/content/registry/fluid/EntityAccessor.d.ts'
import type { CrashReportCategory } from '../../../../net/minecraft/CrashReportCategory.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { EntityAnchorArgument$Anchor } from '../../../../net/minecraft/commands/arguments/EntityAnchorArgument$Anchor.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { TypedInstance } from '../../../../net/minecraft/core/TypedInstance.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { HoverEvent } from '../../../../net/minecraft/network/chat/HoverEvent.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { VecDeltaCodec } from '../../../../net/minecraft/network/protocol/game/VecDeltaCodec.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SyncedDataHolder } from '../../../../net/minecraft/network/syncher/SyncedDataHolder.d.ts'
import type { SynchedEntityData } from '../../../../net/minecraft/network/syncher/SynchedEntityData.d.ts'
import type { SynchedEntityData$Builder } from '../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerEntity } from '../../../../net/minecraft/server/level/ServerEntity.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { PermissionLevel } from '../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { BlockUtil$FoundRectangle } from '../../../../net/minecraft/util/BlockUtil$FoundRectangle.d.ts'
import type { ProblemReporter$PathElement } from '../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { DebugValueSource } from '../../../../net/minecraft/util/debug/DebugValueSource.d.ts'
import type { DebugValueSource$Registration } from '../../../../net/minecraft/util/debug/DebugValueSource$Registration.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Nameable } from '../../../../net/minecraft/world/Nameable.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { DamageSources } from '../../../../net/minecraft/world/damagesource/DamageSources.d.ts'
import type { Entity$MoveFunction } from '../../../../net/minecraft/world/entity/Entity$MoveFunction.d.ts'
import type { Entity$Movement } from '../../../../net/minecraft/world/entity/Entity$Movement.d.ts'
import type { Entity$MovementEmission } from '../../../../net/minecraft/world/entity/Entity$MovementEmission.d.ts'
import type { Entity$RemovalReason } from '../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EntityAttachments } from '../../../../net/minecraft/world/entity/EntityAttachments.d.ts'
import type { EntityDimensions } from '../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityFluidInteraction } from '../../../../net/minecraft/world/entity/EntityFluidInteraction.d.ts'
import type { EntitySpawnReason } from '../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { InsideBlockEffectApplier$StepBasedCollector } from '../../../../net/minecraft/world/entity/InsideBlockEffectApplier$StepBasedCollector.d.ts'
import type { InterpolationHandler } from '../../../../net/minecraft/world/entity/InterpolationHandler.d.ts'
import type { ItemOwner } from '../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { Leashable } from '../../../../net/minecraft/world/entity/Leashable.d.ts'
import type { LightningBolt } from '../../../../net/minecraft/world/entity/LightningBolt.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MoverType } from '../../../../net/minecraft/world/entity/MoverType.d.ts'
import type { PortalProcessor } from '../../../../net/minecraft/world/entity/PortalProcessor.d.ts'
import type { Pose } from '../../../../net/minecraft/world/entity/Pose.d.ts'
import type { PositionMoveRotation } from '../../../../net/minecraft/world/entity/PositionMoveRotation.d.ts'
import type { Relative } from '../../../../net/minecraft/world/entity/Relative.d.ts'
import type { SlotAccess } from '../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { SlotProvider } from '../../../../net/minecraft/world/entity/SlotProvider.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Projectile } from '../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { ProjectileDeflection } from '../../../../net/minecraft/world/entity/projectile/ProjectileDeflection.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CustomData } from '../../../../net/minecraft/world/item/component/CustomData.d.ts'
import type { SlotCollection } from '../../../../net/minecraft/world/item/slot/SlotCollection.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Explosion } from '../../../../net/minecraft/world/level/Explosion.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Mirror } from '../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Portal } from '../../../../net/minecraft/world/level/block/Portal.d.ts'
import type { Rotation } from '../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { EntityAccess } from '../../../../net/minecraft/world/level/entity/EntityAccess.d.ts'
import type { EntityInLevelCallback } from '../../../../net/minecraft/world/level/entity/EntityInLevelCallback.d.ts'
import type { DynamicGameEventListener } from '../../../../net/minecraft/world/level/gameevent/DynamicGameEventListener.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { PushReaction } from '../../../../net/minecraft/world/level/material/PushReaction.d.ts'
import type { TeleportTransition } from '../../../../net/minecraft/world/level/portal/TeleportTransition.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { HitResult } from '../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { PlayerTeam } from '../../../../net/minecraft/world/scores/PlayerTeam.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
import type { Team } from '../../../../net/minecraft/world/scores/Team.d.ts'
export abstract class Entity extends Object implements IEntity, FeetBlockCachingEntity, MaybeInLevelObject, EntityAccessor, AttachmentTarget, EntityLoadData, PermissionContextOwner, AttachmentTargetImpl, EntityLoadDataSetter, EntityAccessor_2, TypedInstance<EntityType<any>>, DataComponentGetter, SyncedDataHolder, DebugValueSource, Nameable, ItemOwner, SlotProvider, EntityAccess, ScoreHolder {
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static CONTENTS_SLOT_INDEX: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DEFAULT_BELOW_NAME_DISTANCE: number;
    static DEFAULT_NAME_TAG_DISTANCE: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static FREEZE_HURT_FREQUENCY: number;
    static INVALID_ENTITY_ID: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static MAX_NAME_TAG_DISTANCE: number;
    static NBT_ATTACHMENT_KEY: string;
    static TAG_AIR: string;
    static TAG_CUSTOM_NAME: string;
    static TAG_DATA: string;
    static TAG_FALL_DISTANCE: string;
    static TAG_FIRE: string;
    static TAG_GLOWING: string;
    static TAG_ID: string;
    static TAG_INVULNERABLE: string;
    static TAG_MOTION: string;
    static TAG_NO_GRAVITY: string;
    static TAG_ON_GROUND: string;
    static TAG_PASSENGERS: string;
    static TAG_PORTAL_COOLDOWN: string;
    static TAG_POS: string;
    static TAG_ROTATION: string;
    static TAG_SILENT: string;
    static TAG_UUID: string;
    static TOTAL_AIR_SUPPLY: number;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static collideBoundingBox(paramsource: CollisionContext, parammovement: Vec3, paramboundingBox: AABB, paramlevel: Level, paramentityColliders: VoxelShape[]): Vec3;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<any>, level: Level)
    // private attachedChangedListeners: Map<Object, Object>;
    // private bb: AABB;
    // private blockPosition: BlockPos;
    blocksBuilding: boolean;
    // private boardingCooldown: number;
    // private chunkPosition: ChunkPos;
    // private context: PermissionContext;
    // private crystalSoundIntensity: number;
    // private customData: CustomData;
    // private dataAttachments: Map<Object, Object>;
    // private deferredSyncedAttachments: (Object | null)[];
    readonly deltaMovement: Vec3;
    dimensions: EntityDimensions;
    readonly entityData: SynchedEntityData;
    readonly eyeHeight: number;
    // private fabric_isLoadedFromDisk: boolean;
    // private fabric_spawnReason: EntitySpawnReason;
    fallDistance: number;
    // private finalMovementsThisTick: Entity$Movement[];
    // private firstTick: boolean;
    readonly fluidInteraction: EntityFluidInteraction;
    flyDist: number;
    // private hasGlowingTag: boolean;
    // private hasVisualFire: boolean;
    horizontalCollision: boolean;
    hurtMarked: boolean;
    readonly id: number;
    readonly inBlockState: BlockState;
    // private insideEffectCollector: InsideBlockEffectApplier$StepBasedCollector;
    readonly invulnerable: boolean;
    invulnerableTime: number;
    isInPowderSnow: boolean;
    // private lastCrystalSoundPlayTick: number;
    // private lastKnownPosition: Vec3;
    // private lastKnownSpeed: Vec3;
    // private level: Level;
    readonly levelCallback: EntityInLevelCallback;
    mainSupportingBlockPos: Optional<BlockPos>;
    minorHorizontalCollision: boolean;
    moveDist: number;
    // private movementThisTick: Entity$Movement[];
    needsSync: boolean;
    // private nextStep: number;
    noPhysics: boolean;
    // private onGroundNoBlocks: boolean;
    // private packetPositionCodec: VecDeltaCodec;
    readonly passengers: Entity[];
    // private pistonDeltas: number[];
    // private pistonDeltasGameTime: number;
    readonly portalCooldown: number;
    portalProcess: PortalProcessor;
    // private position: Vec3;
    readonly random: RandomSource;
    readonly remainingFireTicks: number;
    readonly removalReason: Entity$RemovalReason;
    readonly requiresPrecisePosition: boolean;
    stringUUID: string;
    // private stuckSpeedMultiplier: Vec3;
    syncPosition: boolean;
    // private syncedAttachments: Map<Object, Object>;
    // private tags: string[];
    tickCount: number;
    readonly type: EntityType<any>;
    // private uuid: UUID;
    readonly vehicle: Entity;
    verticalCollision: boolean;
    verticalCollisionBelow: boolean;
    // private viaFabricPlus$isInLoadedChunkAndShouldTick: boolean;
    // private visitedBlocks: (Object | null)[];
    // private wasEyeInWater: boolean;
    wasInPowderSnow: boolean;
    // private wasTouchingWater: boolean;
    xOld: number;
    // private xRot: number;
    xRotO: number;
    xo: number;
    yOld: number;
    // private yRot: number;
    yRotO: number;
    yo: number;
    zOld: number;
    zo: number;
    absSnapRotationTo(yRot: number, xRot: number): void;
    absSnapTo(x: number, y: number, z: number): void;
    absSnapTo(x: number, y: number, z: number, yRot: number, xRot: number): void;
    // private acknowledgeSynced(arg0: AttachmentType<Object>, arg1: Object): void;
    // private acknowledgeSyncedEntry(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    addAdditionalSaveData(output: ValueOutput): void;
    addDeltaMovement(momentum: Vec3): void;
    // private addMovementThisTick(movement: Entity$Movement): void;
    addPassenger(passenger: Entity): void;
    // private addPassengersDeep(arg0: Object[]): void;
    // private addPassengersDeepFirst(arg0: Object[]): void;
    addTag(tag: string): boolean;
    adjustSpawnLocation(level: ServerLevel, spawnSuggestion: BlockPos): BlockPos;
    animateHurt(direction: number): void;
    applyComponentsFromItemStack(stack: ItemStack): void;
    applyEffectsFromBlocks(): void;
    // private applyEffectsFromBlocks(movements: Entity$Movement[]): void;
    applyEffectsFromBlocks(from: Vec3, to: Vec3): void;
    applyEffectsFromBlocksForLastMovements(): void;
    applyGravity(): void;
    applyImplicitComponent<T extends unknown>(type: DataComponentType<T>, value: T): boolean;
    applyImplicitComponentIfPresent<T extends unknown>(components: DataComponentGetter, type: DataComponentType<T>): boolean;
    applyImplicitComponents(components: DataComponentGetter): void;
    // private applyMovementEmissionAndPlaySound(emission: Entity$MovementEmission, clippedMovement: Vec3, effectPos: BlockPos, effectState: BlockState): void;
    // private applyPistonMovementRestriction(axis: Direction$Axis, amount: number): number;
    asLivingEntity(): LivingEntity;
    awardKillScore(victim: Entity, killingBlow: DamageSource): void;
    baseTick(): void;
    belowNameDisplay(): Component;
    blockPosition(): BlockPos;
    broadcastToPlayer(player: ServerPlayer): boolean;
    // private calculatePassengerTransition(transition: TeleportTransition, passenger: Entity): TeleportTransition;
    calculateUpVector(xRot: number, yRot: number): Vec3;
    calculateViewVector(xRot: number, yRot: number): Vec3;
    canAddPassenger(passenger: Entity): boolean;
    canBeCollidedWith(other: Entity): boolean;
    canBeHitByProjectile(): boolean;
    canBePickedFromInside(): boolean;
    canCollideWith(entity: Entity): boolean;
    canControlVehicle(): boolean;
    canFreeze(): boolean;
    canInteractWithLevel(): boolean;
    canRide(vehicle: Entity): boolean;
    canSimulateMovement(): boolean;
    canSpawnSprintParticle(): boolean;
    canSprint(): boolean;
    canTeleport(from: Level, to: Level): boolean;
    canUsePortal(ignorePassenger: boolean): boolean;
    causeFallDamage(fallDistance: number, damageModifier: number, damageSource: DamageSource): boolean;
    checkBelowWorld(): void;
    checkDespawn(): void;
    checkFallDamage(ya: number, onGround: boolean, onState: BlockState, pos: BlockPos): void;
    checkFallDistanceAccumulation(): void;
    // private checkInsideBlocks(movements: Entity$Movement[], effectCollector: InsideBlockEffectApplier$StepBasedCollector): void;
    // private checkInsideBlocks(from: Vec3, to: Vec3, effectCollector: InsideBlockEffectApplier$StepBasedCollector, visitedBlocks: (Object | null)[], maxMovementIterations: number): number;
    checkPermission<T extends unknown>(arg0: PermissionNode<T>): T;
    checkPermission<T extends unknown>(arg0: PermissionNode<T>, arg1: T): T;
    checkPermission(arg0: Identifier): TriState;
    checkPermission(arg0: Identifier, arg1: boolean): boolean;
    checkPermission(arg0: Identifier, arg1: PermissionLevel): boolean;
    checkSupportingBlock(onGround: boolean, movement: Vec3): void;
    chunkPosition(): ChunkPos;
    clearFire(): void;
    clearFreeze(): void;
    clearMovementThisTick(): void;
    closerThan(other: Entity, distance: number): boolean;
    closerThan(other: Entity, distanceXZ: number, distanceY: number): boolean;
    // private collide(movement: Vec3): Vec3;
    collidedWithFluid(fluidState: FluidState, blockPos: BlockPos, from: Vec3, to: Vec3): boolean;
    collidedWithShapeMovingFrom(from: Vec3, to: Vec3, aabbs: AABB[]): boolean;
    computeSpeed(): void;
    considersEntityAsAlly(other: Entity): boolean;
    copyPosition(target: Entity): void;
    couldAcceptPassenger(): boolean;
    countPlayerPassengers(): number;
    createCommandSourceStackForNameResolution(level: ServerLevel): CommandSourceStack;
    createHoverEvent(): HoverEvent;
    damageSources(): DamageSources;
    dampensVibrations(): boolean;
    // private debugBlockIntersection(level: ServerLevel, pos: BlockPos, insideBlock: boolean, insideFluid: boolean): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    deflection(projectile: Projectile): (param0: Projectile, param1: Entity, param2: RandomSource) => void;
    discard(): void;
    dismountTo(x: number, y: number, z: number): void;
    dismountsUnderwater(): boolean;
    displayFireAnimation(): boolean;
    distanceTo(entity: Entity): number;
    distanceToSqr(x2: number, y2: number, z2: number): number;
    distanceToSqr(entity: Entity): number;
    distanceToSqr(pos: Vec3): number;
    doCheckFallDamage(xa: number, ya: number, za: number, onGround: boolean): void;
    doWaterSplashEffect(): void;
    dropAllLeashConnections(player: Player): boolean;
    ejectPassengers(): void;
    entityTags(): string[];
    equals(obj: Object | null): boolean;
    extinguishFire(): void;
    fabric_clearDeferredSyncChanges(): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: AttachmentChange) => void): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: Object) => void): void;
    fabric_getAttachments(): Map<AttachmentType<Object>, Object | null>;
    fabric_getAttachments(): Map<Object | null, Object | null>;
    fabric_getRegistryAccess(): RegistryAccess;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_hasPersistentAttachments(): boolean;
    fabric_markChanged(arg0: AttachmentType<Object>): void;
    fabric_readAttachmentsFromNbt(arg0: ValueInput): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: ServerPlayer[]): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: (Object | null)[]): void;
    fabric_setLoadedFromDisk(arg0: boolean): void;
    fabric_setSpawnReason(arg0: EntitySpawnReason): void;
    fabric_shouldDeferSync(): boolean;
    fabric_shouldTryToSync(): boolean;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_updateSyncTarget<T extends unknown>(arg0: AttachmentTargetInfo<T>, arg1: AttachmentTargetInfo<T>): void;
    fabric_updateSyncTarget(arg0: AttachmentTargetInfo<Object>, arg1: AttachmentTargetInfo<Object>): void;
    fabric_writeAttachmentsToNbt(arg0: ValueOutput): void;
    fillCrashReportCategory(category: CrashReportCategory): void;
    fireImmune(): boolean;
    fixupDimensions(): void;
    forceSetRotation(yRot: number, relativeY: boolean, xRot: number, relativeX: boolean): void;
    fudgePositionAfterSizeChange(previousDimensions: EntityDimensions): boolean;
    gameEvent(event: Holder<GameEvent>): void;
    gameEvent(event: Holder<GameEvent>, sourceEntity: Entity): void;
    get<T extends unknown>(type: DataComponentType<T>): T;
    getAddEntityPacket(serverEntity: ServerEntity): Packet<ClientGamePacketListener>;
    getAirDrag(): number;
    getAirSupply(): number;
    getAttached<A extends unknown>(arg0: AttachmentType<A>): A;
    getAttached(arg0: AttachmentType<Object>): Object;
    getAttachedOrCreate<A extends unknown>(arg0: AttachmentType<A>): A;
    getAttachedOrCreate<A extends unknown>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrElse<A extends unknown>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrGet<A extends unknown>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrSet<A extends unknown>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrThrow<A extends unknown>(arg0: AttachmentType<A>): A;
    getAttachments(): EntityAttachments;
    getAvailableSpaceBelow(maxDistance: number): number;
    getBbHeight(): number;
    getBbWidth(): number;
    // private getBlockBounciness(onBlock: Block): number;
    getBlockExplosionResistance(explosion: Explosion, level: BlockGetter, pos: BlockPos, block: BlockState, fluid: FluidState, resistance: number): number;
    getBlockJumpFactor(): number;
    getBlockPosBelowThatAffectsMyMovement(): BlockPos;
    getBlockSpeedFactor(): number;
    getBlockStateOn(): BlockState;
    getBlockStateOnLegacy(): BlockState;
    getBlockX(): number;
    getBlockY(): number;
    getBlockZ(): number;
    getBoundingBox(): AABB;
    getChangeListener(): EntityInLevelCallback;
    getControlledVehicle(): Entity;
    getControllingPassenger(): LivingEntity;
    getCustomName(): Component;
    getDefaultGravity(): number;
    getDeltaMovement(): Vec3;
    getDimensionChangingDelay(): number;
    getDimensions(pose: Pose): EntityDimensions;
    getDirection(): Direction;
    getDismountLocationForPassenger(passenger: LivingEntity): Vec3;
    getDisplayName(): Component;
    getEffectiveGravity(): number;
    getEncodeId(): string;
    getEntityBounciness(): number;
    getEntityData(): SynchedEntityData;
    getEyeHeight(): number;
    getEyeHeight(pose: Pose): number;
    getEyePosition(): Vec3;
    getEyePosition(partialTickTime: number): Vec3;
    getEyeY(): number;
    getFeedbackDisplayName(): Component;
    getFireImmuneTicks(): number;
    getFirstPassenger(): Entity;
    getFluidHeight(type: TagKey<Fluid>): number;
    getFluidInteraction(): EntityFluidInteraction;
    getFluidInteractionBox(): AABB;
    getFluidJumpThreshold(): number;
    getForward(): Vec3;
    getGravity(): number;
    getHandHoldingItemAngle(item: Item): Vec3;
    getHeadLookAngle(): Vec3;
    getId(): number;
    getInBlockState(): BlockState;
    getIndirectPassengers(): (Object | null)[];
    // private getIndirectPassengersStream(): Stream<Object>;
    getInterpolation(): InterpolationHandler;
    getKnownMovement(): Vec3;
    getKnownSpeed(): Vec3;
    getLightLevelDependentMagicValue(): number;
    getLightProbePosition(partialTickTime: number): Vec3;
    getLookAngle(): Vec3;
    getLootTable(): Optional<ResourceKey<LootTable>>;
    getMaxAirSupply(): number;
    getMaxFallDistance(): number;
    getMotionDirection(): Direction;
    getMovementEmission(): Entity$MovementEmission;
    getName(): Component;
    getNearestViewDirection(): Direction;
    getOnPos(): BlockPos;
    getOnPos(offset: number): BlockPos;
    getOnPosLegacy(): BlockPos;
    getOrDefault<T extends unknown>(type: DataComponentType<T>, defaultValue: T): T;
    getPassengerAttachmentPoint(passenger: Entity, dimensions: EntityDimensions, scale: number): Vec3;
    getPassengerRidingPosition(passenger: Entity): Vec3;
    getPassengers(): Entity[];
    getPassengersAndSelf(): Stream<Object>;
    getPercentFrozen(): number;
    getPermissionContext(): PermissionContext;
    getPickRadius(): number;
    getPickResult(): ItemStack;
    getPistonPushReaction(): PushReaction;
    getPlainTextName(): string;
    getPortalCooldown(): number;
    getPose(): Pose;
    getPosition(partialTickTime: number): Vec3;
    getPositionCodec(): VecDeltaCodec;
    getPreciseBodyRotation(partial: number): number;
    getPrimaryStepSoundBlockPos(affectingPos: BlockPos): BlockPos;
    getQuadLeashHolderOffsets(): Vec3[];
    getRandom(): RandomSource;
    getRandomX(spread: number): number;
    getRandomY(): number;
    getRandomY(spread: number): number;
    getRandomZ(spread: number): number;
    getRelativePortalPosition(axis: Direction$Axis, portalArea: BlockUtil$FoundRectangle): Vec3;
    getRemainingFireTicks(): number;
    getRemovalReason(): Entity$RemovalReason;
    getRequiresPrecisePosition(): boolean;
    getRootVehicle(): Entity;
    getRopeHoldPosition(partialTickTime: number): Vec3;
    getRotationVector(): Vec2;
    getScoreboardName(): string;
    getSelfAndPassengers(): Stream<Object>;
    getSharedFlag(flag: number): boolean;
    getSlot(slot: number): SlotAccess;
    getSlotsFromRange(slots: (Object | null)[]): SlotCollection;
    getSoundSource(): SoundSource;
    getStringUUID(): string;
    getSwimHighSpeedSplashSound(): SoundEvent;
    getSwimSound(): SoundEvent;
    getSwimSplashSound(): SoundEvent;
    getTeam(): PlayerTeam;
    getTeamColor(): number;
    getTicksFrozen(): number;
    getTicksRequiredToFreeze(): number;
    getType(): EntityType<any>;
    getTypeName(): Component;
    getTyped<T extends unknown>(type: DataComponentType<T>): TypedDataComponent<T>;
    getUUID(): UUID;
    getUpVector(a: number): Vec3;
    getVehicle(): Entity;
    getVehicleAttachmentPoint(vehicle: Entity): Vec3;
    getViewVector(a: number): Vec3;
    getViewXRot(a: number): number;
    getViewYRot(a: number): number;
    getVisualRotationYInDegrees(): number;
    getWeaponItem(): ItemStack;
    getX(): number;
    getX(progress: number): number;
    getXRot(): number;
    getXRot(partialTicks: number): number;
    getY(): number;
    getY(progress: number): number;
    getYHeadRot(): number;
    getYRot(): number;
    getYRot(partialTicks: number): number;
    getZ(): number;
    getZ(progress: number): number;
    handleDamageEvent(source: DamageSource): void;
    handleEntityEvent(id: number): void;
    handlePortal(): void;
    hasAttached(arg0: AttachmentType<Object>): boolean;
    hasControllingPassenger(): boolean;
    hasCustomName(): boolean;
    hasExactlyOnePlayerPassenger(): boolean;
    hasGlowingTag(): boolean;
    hasIndirectPassenger(entity: Entity): boolean;
    hasMovedHorizontallyRecently(): boolean;
    hasPassenger(test: (param0: Entity) => boolean): boolean;
    hasPassenger(entity: Entity): boolean;
    hasPose(pose: Pose): boolean;
    hashCode(): number;
    hurt(source: DamageSource, damage: number): void;
    hurtClient(source: DamageSource): boolean;
    hurtOrSimulate(source: DamageSource, damage: number): boolean;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    igniteForSeconds(numberOfSeconds: number): void;
    igniteForTicks(numberOfTicks: number): void;
    ignoreExplosion(explosion: Explosion): boolean;
    interact(player: Player, hand: InteractionHand, location: Vec3): InteractionResult;
    is(rawType: EntityType<any>): boolean;
    is(type: Holder<EntityType<any>>): boolean;
    is(set: Holder<EntityType<any>>[]): boolean;
    is(type: ResourceKey<EntityType<any>>): boolean;
    is(tag: TagKey<EntityType<any>>): boolean;
    is(other: Entity): boolean;
    isAffectedByBlocks(): boolean;
    isAlive(): boolean;
    isAlliedTo(other: Entity): boolean;
    isAlliedTo(other: Team): boolean;
    isAlwaysTicking(): boolean;
    isAttackable(): boolean;
    isClientAuthoritative(): boolean;
    isColliding(pos: BlockPos, state: BlockState): boolean;
    isCrouching(): boolean;
    isCurrentlyGlowing(): boolean;
    isCustomNameVisible(): boolean;
    isDescending(): boolean;
    isDiscrete(): boolean;
    isEffectiveAi(): boolean;
    isEyeInFluid(type: TagKey<Fluid>): boolean;
    isFlapping(): boolean;
    isFlyingVehicle(): boolean;
    isFree(xa: number, ya: number, za: number): boolean;
    // private isFree(box: AABB): boolean;
    isFreezing(): boolean;
    isFullyFrozen(): boolean;
    isHorizontalCollisionMinor(movement: Vec3): boolean;
    isIgnoringBlockTriggers(): boolean;
    isInClouds(): boolean;
    isInLava(): boolean;
    isInLiquid(): boolean;
    // private isInRain(): boolean;
    isInShallowWater(): boolean;
    isInWall(): boolean;
    isInWater(): boolean;
    isInWaterOrRain(): boolean;
    isInterpolating(): boolean;
    isInvisible(): boolean;
    isInvisibleTo(player: Player): boolean;
    isInvulnerable(): boolean;
    isInvulnerableToBase(source: DamageSource): boolean;
    isInvulnerableToPiercingWeapon(): boolean;
    isLoadedFromDisk(): boolean;
    isLocalClientAuthoritative(): boolean;
    isLocalInstanceAuthoritative(): boolean;
    isNoGravity(): boolean;
    isOnFire(): boolean;
    isOnPortalCooldown(): boolean;
    isOnRails(): boolean;
    isPassenger(): boolean;
    isPassengerOfSameVehicle(other: Entity): boolean;
    isPickable(): boolean;
    isPushable(): boolean;
    isPushedByFluid(): boolean;
    isRemoved(): boolean;
    isShiftKeyDown(): boolean;
    isSilent(): boolean;
    isSpectator(): boolean;
    isSprinting(): boolean;
    // private isStateClimbable(state: BlockState): boolean;
    isSteppingCarefully(): boolean;
    isSupportedBy(pos: BlockPos): boolean;
    isSuppressingBounce(): boolean;
    isSwimming(): boolean;
    isUnderWater(): boolean;
    isVehicle(): boolean;
    isVisuallyCrawling(): boolean;
    isVisuallySwimming(): boolean;
    kill(level: ServerLevel): void;
    killedEntity(level: ServerLevel, entity: LivingEntity, source: DamageSource): boolean;
    lavaHurt(): void;
    lavaIgnite(): void;
    lerpHeadTo(yRot: number, steps: number): void;
    lerpMotion(movement: Vec3): void;
    lerpPositionAndRotationStep(stepsToTarget: number, targetX: number, targetY: number, targetZ: number, targetYRot: number, targetXRot: number): void;
    level(): Level;
    limitPistonMovement(vec: Vec3): Vec3;
    liquid_bounce$isClientPlayer(): boolean;
    lithium$OnFeetBlockCacheDeleted(): void;
    lithium$OnFeetBlockCacheSet(arg0: BlockState): void;
    lithium$SetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
    lithium$getCachedFeetBlockState(): BlockState;
    lithium$handleAddedToLevel(arg0: Level): void;
    lithium$handleRemovedFromLevel(arg0: Level): void;
    lithium$isInLevel(): boolean;
    load(input: ValueInput): void;
    lookAt(anchor: EntityAnchorArgument$Anchor, pos: Vec3): void;
    makeBoundingBox(): AABB;
    makeBoundingBox(position: Vec3): AABB;
    makeStuckInBlock(blockState: BlockState, speedMultiplier: Vec3): void;
    markHurt(): void;
    maxUpStep(): number;
    mayInteract(level: ServerLevel, pos: BlockPos): boolean;
    maybeBackOffFromEdge(delta: Vec3, moverType: MoverType): Vec3;
    mirror(mirror: Mirror): number;
    modifyAttached<A extends unknown>(arg0: AttachmentType<A>, arg1: (param0: A) => A): A;
    modifyPassengerFluidInteractionBox(passengerBox: AABB): AABB;
    move(moverType: MoverType, delta: Vec3): void;
    moveOrInterpolateTo(position: Optional<Vec3>, yRot: Optional<number>, xRot: Optional<number>): void;
    moveOrInterpolateTo(yRot: number, xRot: number): void;
    moveOrInterpolateTo(position: Vec3): void;
    moveOrInterpolateTo(position: Vec3, yRot: number, xRot: number): void;
    moveRelative(speed: number, input: Vec3): void;
    moveTowardsClosestSpace(x: number, y: number, z: number): void;
    nextStep(): number;
    notifyLeashHolder(entity: Leashable): void;
    notifyLeasheeRemoved(entity: Leashable): void;
    oldPosition(): Vec3;
    omnidirectionalAirMover(): boolean;
    onAboveBubbleColumn(dragDown: boolean, pos: BlockPos): void;
    onAttachedSet<A extends unknown>(arg0: AttachmentType<A>): Event<(param0: A, param1: A) => void>;
    onAttachedSet(arg0: AttachmentType<Object>): Event<Object>;
    onBelowWorld(): void;
    onClientRemoval(): void;
    onExplosionHit(explosionCausedBy: Entity): void;
    onFlap(): void;
    onGround(): boolean;
    onInsideBlock(state: BlockState): void;
    onInsideBubbleColumn(dragDown: boolean): void;
    onPassengerTurned(passenger: Entity): void;
    onRemoval(reason: Entity$RemovalReason): void;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    pick(range: number, a: number, withLiquids: boolean): HitResult;
    placePortalTicket(ticketPosition: BlockPos): void;
    // private playAmethystStepSound(): void;
    playCombinationStepSounds(primaryStepSound: BlockState, secondaryStepSound: BlockState): void;
    playEntityOnFireExtinguishedSound(): void;
    playMuffledStepSound(blockState: BlockState): void;
    playSound(sound: SoundEvent): void;
    playSound(sound: SoundEvent, volume: number, pitch: number): void;
    playStepSound(pos: BlockPos, blockState: BlockState): void;
    playSwimSound(volume: number): void;
    playerTouch(player: Player): void;
    position(): Vec3;
    positionRider(passenger: Entity): void;
    positionRider(passenger: Entity, moveFunction: (param0: Entity, param1: number, param2: number, param3: number) => void): void;
    problemPath(): () => string;
    processFlappingMovement(): void;
    processPortalCooldown(): void;
    propagateFallToPassengers(fallDistance: number, damageModifier: number, damageSource: DamageSource): void;
    push(xa: number, ya: number, za: number): void;
    push(entity: Entity): void;
    push(impulse: Vec3): void;
    readAdditionalSaveData(input: ValueInput): void;
    reapplyPosition(): void;
    recreateFromPacket(packet: ClientboundAddEntityPacket): void;
    refreshDimensions(): void;
    registerDebugValues(level: ServerLevel, registration: DebugValueSource$Registration): void;
    registryAccess(): RegistryAccess;
    remove(reason: Entity$RemovalReason): void;
    removeAfterChangingDimensions(): void;
    removeAttached<A extends unknown>(arg0: AttachmentType<A>): A;
    removeLatestMovementRecording(): void;
    removePassenger(passenger: Entity): void;
    removeTag(tag: string): boolean;
    removeVehicle(): void;
    repositionEntityAfterLoad(): boolean;
    resetFallDistance(): void;
    // private restituteMovementAfterCollisions(effectState: BlockState, xCollision: boolean, zCollision: boolean, movement: Vec3): void;
    restoreFrom(oldEntity: Entity): void;
    rideTick(): void;
    rotate(rotation: Rotation): number;
    save(output: ValueOutput): boolean;
    saveAsPassenger(output: ValueOutput): boolean;
    saveWithoutId(output: ValueOutput): void;
    // private sendTeleportTransitionToRidingPlayers(transition: TeleportTransition): void;
    setAirSupply(supply: number): void;
    setAsInsidePortal(portal: Portal, pos: BlockPos): void;
    setAttached<A extends unknown>(arg0: AttachmentType<A>, arg1: A): A;
    setAttached(arg0: AttachmentType<Object>, arg1: Object): Object;
    setBoundingBox(bb: AABB): void;
    setComponent<T extends unknown>(type: DataComponentType<T>, value: T): void;
    setCustomName(name: Component): void;
    setCustomNameVisible(visible: boolean): void;
    setDeltaMovement(xd: number, yd: number, zd: number): void;
    setDeltaMovement(deltaMovement: Vec3): void;
    setGlowingTag(value: boolean): void;
    setId(id: number): void;
    setInvisible(invisible: boolean): void;
    setInvulnerable(invulnerable: boolean): void;
    setIsInPowderSnow(isInPowderSnow: boolean): void;
    setLevel(level: Level): void;
    setLevelCallback(levelCallback: EntityInLevelCallback): void;
    setNoGravity(noGravity: boolean): void;
    setOldPos(): void;
    // private setOldPos(position: Vec3): void;
    setOldPosAndRot(): void;
    setOldPosAndRot(position: Vec3, yRot: number, xRot: number): void;
    setOldRot(): void;
    // private setOldRot(yRot: number, xRot: number): void;
    setOnGround(onGround: boolean): void;
    setOnGroundWithMovement(onGround: boolean, horizontalCollision: boolean, movement: Vec3): void;
    setOnGroundWithMovement(onGround: boolean, movement: Vec3): void;
    setPortalCooldown(): void;
    setPortalCooldown(portalCooldown: number): void;
    setPos(x: number, y: number, z: number): void;
    setPos(pos: Vec3): void;
    setPosRaw(x: number, y: number, z: number): void;
    setPose(pose: Pose): void;
    setRemainingFireTicks(remainingTicks: number): void;
    setRemoved(reason: Entity$RemovalReason): void;
    setRequiresPrecisePosition(requiresPrecisePosition: boolean): void;
    setRot(yRot: number, xRot: number): void;
    setSharedFlag(flag: number, value: boolean): void;
    setSharedFlagOnFire(value: boolean): void;
    setShiftKeyDown(shiftKeyDown: boolean): void;
    setSilent(silent: boolean): void;
    setSprinting(isSprinting: boolean): void;
    setSwimming(swimming: boolean): void;
    setTicksFrozen(ticks: number): void;
    setUUID(uuid: UUID): void;
    setXRot(xRot: number): void;
    setYBodyRot(yBodyRot: number): void;
    setYHeadRot(yHeadRot: number): void;
    setYRot(yRot: number): void;
    shearOffAllLeashConnections(player: Player): boolean;
    shouldBeSaved(): boolean;
    shouldBlockExplode(explosion: Explosion, level: BlockGetter, pos: BlockPos, state: BlockState, power: number): boolean;
    // private shouldPlayAmethystStepSound(affectingState: BlockState): boolean;
    shouldPlayLavaHurtSound(): boolean;
    shouldRender(camX: number, camY: number, camZ: number): boolean;
    shouldRenderAtSqrDistance(distance: number): boolean;
    shouldShowName(): boolean;
    showVehicleHealth(): boolean;
    skipAttackInteraction(source: Entity): boolean;
    snapTo(x: number, y: number, z: number): void;
    snapTo(x: number, y: number, z: number, yRot: number, xRot: number): void;
    snapTo(spawnPos: BlockPos, yRot: number, xRot: number): void;
    snapTo(pos: Vec3): void;
    snapTo(spawnPos: Vec3, yRot: number, xRot: number): void;
    spawnAtLocation(level: ServerLevel, itemStack: ItemStack): ItemEntity;
    spawnAtLocation(level: ServerLevel, itemStack: ItemStack, offset: number): ItemEntity;
    spawnAtLocation(level: ServerLevel, itemStack: ItemStack, offset: Vec3): ItemEntity;
    spawnAtLocation(level: ServerLevel, resource: ItemLike): ItemEntity;
    spawnReason(): EntitySpawnReason;
    spawnSprintParticle(): void;
    startRiding(entity: Entity): boolean;
    startRiding(entityToRide: Entity, force: boolean, sendEventAndTriggers: boolean): boolean;
    startSeenByPlayer(player: ServerPlayer): void;
    stopRiding(): void;
    stopSeenByPlayer(player: ServerPlayer): void;
    supportQuadLeashAsHolder(): boolean;
    syncPacketPositionCodec(x: number, y: number, z: number): void;
    tags(): Stream<TagKey<EntityType<any>>>;
    teleport(transition: TeleportTransition): Entity;
    // private teleportCrossDimension(oldLevel: ServerLevel, newLevel: ServerLevel, transition: TeleportTransition): Entity;
    // private teleportPassengers(): void;
    teleportRelative(dx: number, dy: number, dz: number): void;
    // private teleportSameDimension(level: ServerLevel, transition: TeleportTransition): Entity;
    teleportSetPosition(destination: PositionMoveRotation, relatives: Relative[]): void;
    teleportSetPosition(currentValues: PositionMoveRotation, destination: PositionMoveRotation, relatives: Relative[]): void;
    teleportSpectators(transition: TeleportTransition, oldLevel: ServerLevel): void;
    teleportTo(x: number, y: number, z: number): void;
    teleportTo(level: ServerLevel, x: number, y: number, z: number, relatives: Relative[], newYRot: number, newXRot: number, resetCamera: boolean): boolean;
    thunderHit(level: ServerLevel, lightningBolt: LightningBolt): void;
    tick(): void;
    toString(): string;
    touchingUnloadedChunk(): boolean;
    trackingPosition(): Vec3;
    turn(xo: number, yo: number): void;
    typeHolder(): Holder<EntityType<any>>;
    unRide(): void;
    unsetRemoved(): void;
    updateDataBeforeSync(): void;
    updateDynamicGameEventListener(action: (param0: DynamicGameEventListener<any>, param1: ServerLevel) => void): void;
    updateFluidInteraction(): boolean;
    updateSwimming(): void;
    viaFabricPlus$isInLoadedChunkAndShouldTick(): boolean;
    viaFabricPlus$setInLoadedChunkAndShouldTick(arg0: boolean): void;
    // private vibrationAndSoundEffectsFromBlock(pos: BlockPos, blockState: BlockState, shouldSound: boolean, shouldVibrate: boolean, clippedMovement: Vec3): boolean;
    // private walkingStepSound(onPos: BlockPos, onState: BlockState): void;
    waterSwimSound(): void;
}