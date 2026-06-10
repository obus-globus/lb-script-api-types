import type { DoubleDoubleImmutablePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoubleImmutablePair.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FireworkRocketEntityAddition } from '../../../../../net/ccbluex/liquidbounce/additions/FireworkRocketEntityAddition.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemSupplier } from '../../../../../net/minecraft/world/entity/projectile/ItemSupplier.d.ts'
import type { Projectile } from '../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { Projectile$ProjectileFactory } from '../../../../../net/minecraft/world/entity/projectile/Projectile$ProjectileFactory.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { FireworkExplosion } from '../../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { EntityHitResult } from '../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class FireworkRocketEntity extends Projectile implements FireworkRocketEntityAddition, ItemSupplier {
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
    static spawnProjectile(paramprojectile: Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack): Projectile | null;
    static spawnProjectile(paramprojectile: Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramshootFunction: (param0: Projectile | null) => void): Projectile | null;
    static spawnProjectileFromRotation(paramcreator: (param0: ServerLevel, param1: LivingEntity, param2: ItemStack) => Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramsource: LivingEntity, paramyOffset: number, parampow: number, paramuncertainty: number): Projectile | null;
    static spawnProjectileUsingShoot(paramprojectile: Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramtargetX: number, paramtargetY: number, paramtargetZ: number, parampow: number, paramuncertainty: number): Projectile | null;
    static spawnProjectileUsingShoot(paramcreator: (param0: ServerLevel, param1: LivingEntity, param2: ItemStack) => Projectile | null, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramsource: LivingEntity, paramtargetX: number, paramtargetY: number, paramtargetZ: number, parampow: number, paramuncertainty: number): Projectile | null;
    constructor(type: EntityType<FireworkRocketEntity>, level: Level)
    constructor(level: Level, x: number, y: number, z: number, sourceItemStack: ItemStack)
    constructor(level: Level, owner: Entity, x: number, y: number, z: number, sourceItemStack: ItemStack)
    constructor(level: Level, sourceItemStack: ItemStack, x: number, y: number, z: number, shotAtAngle: boolean)
    constructor(level: Level, sourceItemStack: ItemStack, owner: Entity, x: number, y: number, z: number, shotAtAngle: boolean)
    constructor(level: Level, sourceItemStack: ItemStack, stuckTo: LivingEntity)
    // private attachedToEntity: LivingEntity;
    // private life: number;
    // private lifetime: number;
    addAdditionalSaveData(output: ValueOutput): void;
    calculateHorizontalHurtKnockbackDirection(hurtEntity: LivingEntity, damageSource: DamageSource): DoubleDoubleImmutablePair;
    // private dealExplosionDamage(level: ServerLevel): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    // private explode(level: ServerLevel): void;
    // private getExplosions(): FireworkExplosion[];
    getItem(): ItemStack;
    handleEntityEvent(id: number): void;
    // private hasExplosion(): boolean;
    // private isAttachedToEntity(): boolean;
    isAttackable(): boolean;
    isShotAtAngle(): boolean;
    liquidbounce$getShooter(): LivingEntity | null;
    onHitBlock(hitResult: BlockHitResult): void;
    onHitEntity(hitResult: EntityHitResult): void;
    readAdditionalSaveData(input: ValueInput): void;
    shouldRender(camX: number, camY: number, camZ: number): boolean;
    shouldRenderAtSqrDistance(distance: number): boolean;
    tick(): void;
}