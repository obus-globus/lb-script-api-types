import type { DoubleDoubleImmutablePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoubleImmutablePair.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { ServerEntity } from '../../../../../net/minecraft/server/level/ServerEntity.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityReference } from '../../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TraceableEntity } from '../../../../../net/minecraft/world/entity/TraceableEntity.d.ts'
import type { Projectile$ProjectileFactory } from '../../../../../net/minecraft/world/entity/projectile/Projectile$ProjectileFactory.d.ts'
import type { ProjectileDeflection } from '../../../../../net/minecraft/world/entity/projectile/ProjectileDeflection.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { EntityHitResult } from '../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
import type { HitResult } from '../../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export abstract class Projectile extends Entity implements TraceableEntity {
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
    static spawnProjectile(paramprojectile: Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack): Projectile | null;
    static spawnProjectile(paramprojectile: Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramshootFunction: (param0: Projectile | null) => void): Projectile | null;
    static spawnProjectileFromRotation(paramcreator: (param0: ServerLevel, param1: LivingEntity, param2: ItemStack) => Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramsource: LivingEntity, paramyOffset: number, parampow: number, paramuncertainty: number): Projectile | null;
    static spawnProjectileUsingShoot(paramprojectile: Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramtargetX: number, paramtargetY: number, paramtargetZ: number, parampow: number, paramuncertainty: number): Projectile | null;
    static spawnProjectileUsingShoot(paramcreator: (param0: ServerLevel, param1: LivingEntity, param2: ItemStack) => Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramsource: LivingEntity, paramtargetX: number, paramtargetY: number, paramtargetZ: number, parampow: number, paramuncertainty: number): Projectile | null;
    constructor(type: EntityType<Projectile>, level: Level)
    // private hasBeenShot: boolean;
    // private lastDeflectedBy: Entity;
    // private leftOwner: boolean;
    // private leftOwnerChecked: boolean;
    owner: EntityReference<Entity>;
    addAdditionalSaveData(output: ValueOutput): void;
    applyOnProjectileSpawned(serverLevel: ServerLevel, pickupItemStack: ItemStack): void;
    calculateHorizontalHurtKnockbackDirection(hurtEntity: LivingEntity, damageSource: DamageSource): DoubleDoubleImmutablePair;
    canHitEntity(entity: Entity): boolean;
    checkLeftOwner(): void;
    deflect(deflection: (param0: Projectile, param1: Entity, param2: RandomSource) => void, deflectingEntity: Entity, newOwner: EntityReference<Entity>, byAttack: boolean): boolean;
    getAddEntityPacket(serverEntity: ServerEntity): Packet<ClientGamePacketListener>;
    getDimensionChangingDelay(): number;
    getEffectSource(): Entity;
    getMovementToShoot(xd: number, yd: number, zd: number, pow: number, uncertainty: number): Vec3;
    getOwner(): Entity;
    getPickRadius(): number;
    hitTargetOrDeflectSelf(hitResult: HitResult): (param0: Projectile, param1: Entity, param2: RandomSource) => void;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    // private isOutsideOwnerCollisionRange(): boolean;
    isPickable(): boolean;
    mayBreak(level: ServerLevel): boolean;
    mayInteract(level: ServerLevel, pos: BlockPos): boolean;
    onAboveBubbleColumn(dragDown: boolean, pos: BlockPos): void;
    onDeflection(byAttack: boolean): void;
    onHit(hitResult: HitResult): void;
    onHitBlock(hitResult: BlockHitResult): void;
    onHitEntity(hitResult: EntityHitResult): void;
    onInsideBubbleColumn(dragDown: boolean): void;
    onItemBreak(item: Item): void;
    ownedBy(entity: Entity): boolean;
    readAdditionalSaveData(input: ValueInput): void;
    recreateFromPacket(packet: ClientboundAddEntityPacket): void;
    restoreFrom(oldEntity: Entity): void;
    setOwner(owner: Entity): void;
    setOwner(owner: EntityReference<Entity>): void;
    shoot(xd: number, yd: number, zd: number, pow: number, uncertainty: number): void;
    shootFromRotation(source: Entity, xRot: number, yRot: number, yOffset: number, pow: number, uncertainty: number): void;
    shouldBounceOnWorldBorder(): boolean;
    tick(): void;
    updateRotation(): void;
}