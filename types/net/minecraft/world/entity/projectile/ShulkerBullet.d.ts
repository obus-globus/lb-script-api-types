import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityReference } from '../../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Projectile } from '../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { Projectile$ProjectileFactory } from '../../../../../net/minecraft/world/entity/projectile/Projectile$ProjectileFactory.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { EntityHitResult } from '../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
import type { HitResult } from '../../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class ShulkerBullet extends Projectile {
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
    constructor(type: EntityType<ShulkerBullet>, level: Level)
    constructor(level: Level, owner: LivingEntity, target: Entity, invalidStartAxis: Direction$Axis)
    // private currentMoveDirection: Direction;
    // private finalTarget: EntityReference<Entity>;
    // private flightSteps: number;
    // private targetDeltaX: number;
    // private targetDeltaY: number;
    // private targetDeltaZ: number;
    addAdditionalSaveData(output: ValueOutput): void;
    canHitEntity(entity: Entity): boolean;
    checkDespawn(): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    // private destroy(): void;
    getDefaultGravity(): number;
    getLightLevelDependentMagicValue(): number;
    // private getMoveDirection(): Direction;
    getSoundSource(): SoundSource;
    hurtClient(source: DamageSource): boolean;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    isAffectedByBlocks(): boolean;
    isOnFire(): boolean;
    isPickable(): boolean;
    onHit(hitResult: HitResult): void;
    onHitBlock(hitResult: BlockHitResult): void;
    onHitEntity(hitResult: EntityHitResult): void;
    readAdditionalSaveData(input: ValueInput): void;
    recreateFromPacket(packet: ClientboundAddEntityPacket): void;
    // private selectNextMoveDirection(avoidAxis: Direction$Axis, target: Entity): void;
    // private setMoveDirection(direction: Direction): void;
    shouldRenderAtSqrDistance(distance: number): boolean;
    tick(): void;
}