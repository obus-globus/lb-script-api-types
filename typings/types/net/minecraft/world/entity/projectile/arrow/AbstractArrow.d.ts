import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { EntityDataAccessor } from '../../../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DamageSource } from '../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$MovementEmission } from '../../../../../../net/minecraft/world/entity/Entity$MovementEmission.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MoverType } from '../../../../../../net/minecraft/world/entity/MoverType.d.ts'
import type { SlotAccess } from '../../../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Projectile } from '../../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { Projectile$ProjectileFactory } from '../../../../../../net/minecraft/world/entity/projectile/Projectile$ProjectileFactory.d.ts'
import type { ProjectileDeflection } from '../../../../../../net/minecraft/world/entity/projectile/ProjectileDeflection.d.ts'
import type { AbstractArrow$Pickup } from '../../../../../../net/minecraft/world/entity/projectile/arrow/AbstractArrow$Pickup.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { EntityHitResult } from '../../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export abstract class AbstractArrow extends Projectile {
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static CONTENTS_SLOT_INDEX: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
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
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static setViewScale(paramviewScale: number): void;
    static spawnProjectile(paramprojectile: Object | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack): Object | null;
    static spawnProjectile(paramprojectile: Object | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramshootFunction: (param0: Object | null) => void): Object | null;
    static spawnProjectileFromRotation(paramcreator: (param0: Object | null, param1: ServerLevel, param2: LivingEntity) => unknown, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramsource: LivingEntity, paramyOffset: number, parampow: number, paramuncertainty: number): Object | null;
    static spawnProjectileUsingShoot(paramprojectile: Object | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramtargetX: number, paramtargetY: number, paramtargetZ: number, parampow: number, paramuncertainty: number): Object | null;
    static spawnProjectileUsingShoot(paramcreator: (param0: Object | null, param1: ServerLevel, param2: LivingEntity) => unknown, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramsource: LivingEntity, paramtargetX: number, paramtargetY: number, paramtargetZ: number, parampow: number, paramuncertainty: number): Object | null;
    constructor(type: EntityType<AbstractArrow>, x: number, y: number, z: number, level: Level, pickupItemStack: ItemStack, firedFromWeapon: ItemStack)
    constructor(type: EntityType<AbstractArrow>, mob: LivingEntity, level: Level, pickupItemStack: ItemStack, firedFromWeapon: ItemStack)
    constructor(type: EntityType<AbstractArrow>, level: Level)
    readonly baseDamage: number;
    // private firedFromWeapon: ItemStack;
    // private inGroundTime: number;
    // private lastState: BlockState;
    // private life: number;
    pickup: AbstractArrow$Pickup;
    // private pickupItemStack: ItemStack;
    // private piercedAndKilledEntities: Entity[];
    // private piercingIgnoreEntityIds: (Object | null)[];
    shakeTime: number;
    readonly soundEvent: SoundEvent;
    addAdditionalSaveData(output: ValueOutput): void;
    // private addBubbleParticles(position: Vec3): void;
    // private applyInertia(inertia: number): void;
    canHitEntity(entity: Entity): boolean;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    doKnockback(mob: LivingEntity, damageSource: DamageSource): void;
    doPostHurtEffects(mob: LivingEntity): void;
    findHitEntities(from: Vec3, to: Vec3): E[];
    findHitEntity(from: Vec3, to: Vec3): EntityHitResult;
    getDefaultGravity(): number;
    getDefaultHitGroundSoundEvent(): SoundEvent;
    getDefaultPickupItem(): ItemStack;
    getHitGroundSoundEvent(): SoundEvent;
    getMovementEmission(): Entity$MovementEmission;
    getPickupItem(): ItemStack;
    getPickupItemStackOrigin(): ItemStack;
    getPierceLevel(): number;
    getSlot(slot: number): SlotAccess;
    getWaterInertia(): number;
    getWeaponItem(): ItemStack;
    hitBlockEnchantmentEffects(serverLevel: ServerLevel, hitResult: BlockHitResult, weapon: ItemStack): void;
    // private hitTargetsOrDeflectSelf(entityHitResults: E[]): (param0: Projectile, param1: Entity, param2: RandomSource) => void;
    isAttackable(): boolean;
    isCritArrow(): boolean;
    isInGround(): boolean;
    isNoPhysics(): boolean;
    isPickable(): boolean;
    isPushedByFluid(): boolean;
    lerpMotion(movement: Vec3): void;
    move(moverType: MoverType, delta: Vec3): void;
    onAboveBubbleColumn(dragDown: boolean, pos: BlockPos): void;
    onHitBlock(hitResult: BlockHitResult): void;
    onHitEntity(hitResult: EntityHitResult): void;
    onInsideBubbleColumn(dragDown: boolean): void;
    onItemBreak(item: Item): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    playerTouch(player: Player): void;
    push(xa: number, ya: number, za: number): void;
    readAdditionalSaveData(input: ValueInput): void;
    // private resetPiercedEntities(): void;
    setBaseDamage(baseDamage: number): void;
    setBaseDamageFromMob(power: number): void;
    setCritArrow(critArrow: boolean): void;
    // private setFlag(flag: number, value: boolean): void;
    setInGround(inGround: boolean): void;
    setNoPhysics(noPhysics: boolean): void;
    setOwner(owner: Entity): void;
    setPickupItemStack(itemStack: ItemStack): void;
    // private setPierceLevel(pieceLevel: number): void;
    setSoundEvent(soundEvent: SoundEvent): void;
    shoot(xd: number, yd: number, zd: number, pow: number, uncertainty: number): void;
    shouldBounceOnWorldBorder(): boolean;
    // private shouldFall(): boolean;
    shouldRenderAtSqrDistance(distance: number): boolean;
    // private startFalling(): void;
    // private stepMoveAndHit(blockHitResult: BlockHitResult): void;
    tick(): void;
    tickDespawn(): void;
    tryPickup(player: Player): boolean;
}