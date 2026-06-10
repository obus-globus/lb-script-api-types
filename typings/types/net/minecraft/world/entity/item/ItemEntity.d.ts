import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChangePublisher } from '../../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangePublisher.d.ts'
import type { ChangeSubscriber } from '../../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber.d.ts'
import type { ChangeSubscriber$CountChangeSubscriber } from '../../../../../net/caffeinemc/mods/lithium/common/util/change_tracking/ChangeSubscriber$CountChangeSubscriber.d.ts'
import type { ItemEntityAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/util/accessors/ItemEntityAccessor.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$MovementEmission } from '../../../../../net/minecraft/world/entity/Entity$MovementEmission.d.ts'
import type { EntityReference } from '../../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { SlotAccess } from '../../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { TraceableEntity } from '../../../../../net/minecraft/world/entity/TraceableEntity.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Explosion } from '../../../../../net/minecraft/world/level/Explosion.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { TeleportTransition } from '../../../../../net/minecraft/world/level/portal/TeleportTransition.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class ItemEntity extends Entity implements ChangePublisher<Object>, ChangeSubscriber$CountChangeSubscriber<Object>, ItemEntityAccessor, TraceableEntity {
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static CONTENTS_SLOT_INDEX: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DEFAULT_HEALTH: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static EYE_HEIGHT: number;
    static FREEZE_HURT_FREQUENCY: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
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
    static areMergable(paramthisItemStack: ItemStack, paramotherItemStack: ItemStack): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getSpin(paramageInTicks: number, parambobOffset: number): number;
    static getViewScale(): number;
    static merge(paramtoStack: ItemStack, paramfromStack: ItemStack, parammaxCount: number): ItemStack;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<ItemEntity>, level: Level)
    constructor(level: Level, x: number, y: number, z: number, itemStack: ItemStack)
    constructor(level: Level, x: number, y: number, z: number, itemStack: ItemStack, deltaX: number, deltaY: number, deltaZ: number)
    readonly age: number;
    bobOffs: number;
    // private health: number;
    // private pickupDelay: number;
    // private subscriber: ChangeSubscriber<Object>;
    // private subscriberData: number;
    readonly target: UUID;
    readonly thrower: EntityReference<Entity>;
    addAdditionalSaveData(output: ValueOutput): void;
    dampensVibrations(): boolean;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    fireImmune(): boolean;
    getAge(): number;
    getBlockPosBelowThatAffectsMyMovement(): BlockPos;
    getDefaultGravity(): number;
    getItem(): ItemStack;
    getMovementEmission(): Entity$MovementEmission;
    getName(): Component;
    getOwner(): Entity;
    getSlot(slot: number): SlotAccess;
    getSoundSource(): SoundSource;
    getVisualRotationYInDegrees(): number;
    hasPickUpDelay(): boolean;
    hurtClient(source: DamageSource): boolean;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    ignoreExplosion(explosion: Explosion): boolean;
    isAttackable(): boolean;
    // private isMergable(): boolean;
    lithium$forceUnsubscribe(arg0: ItemStack, arg1: number): void;
    lithium$isSubscribedWithData(arg0: ChangeSubscriber<ItemStack>, arg1: number): boolean;
    lithium$notify(arg0: ItemStack, arg1: number): void;
    lithium$notifyCount(arg0: ItemStack, arg1: number, arg2: number): void;
    lithium$subscribe(arg0: ChangeSubscriber<Object>, arg1: number): void;
    lithium$unsubscribe(arg0: ChangeSubscriber<Object>): number;
    lithium$unsubscribeWithData(arg0: ChangeSubscriber<Object>, arg1: number): void;
    makeFakeItem(): void;
    // private mergeWithNeighbours(): void;
    playerTouch(player: Player): void;
    readAdditionalSaveData(input: ValueInput): void;
    restoreFrom(oldEntity: Entity): void;
    setDefaultPickUpDelay(): void;
    setExtendedLifetime(): void;
    // private setFluidMovement(multiplier: number): void;
    setItem(itemStack: ItemStack): void;
    setNeverPickUp(): void;
    setNoPickUpDelay(): void;
    setPickUpDelay(ticks: number): void;
    setTarget(target: UUID): void;
    setThrower(thrower: Entity): void;
    // private setUnderLavaMovement(): void;
    // private setUnderwaterMovement(): void;
    setUnlimitedLifetime(): void;
    shouldPlayLavaHurtSound(): boolean;
    // private startTrackingChanges(): void;
    teleport(transition: TeleportTransition): Entity;
    tick(): void;
    // private tryToMerge(other: ItemEntity): void;
}