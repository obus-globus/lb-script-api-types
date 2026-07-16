import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Llama } from '../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
import type { Projectile } from '../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { Projectile$ProjectileFactory } from '../../../../../net/minecraft/world/entity/projectile/Projectile$ProjectileFactory.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { EntityHitResult } from '../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class LlamaSpit extends Projectile {
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
    static spawnProjectile<T extends Projectile>(paramprojectile: T, paramserverLevel: ServerLevel, paramitemStack: ItemStack): T;
    static spawnProjectile<T extends Projectile>(paramprojectile: T, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramshootFunction: (param0: T) => void): T;
    static spawnProjectileFromRotation<T extends Projectile>(paramcreator: (param0: ServerLevel, param1: LivingEntity, param2: ItemStack) => T, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramsource: LivingEntity, paramyOffset: number, parampow: number, paramuncertainty: number): T;
    static spawnProjectileUsingShoot<T extends Projectile>(paramprojectile: T, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramtargetX: number, paramtargetY: number, paramtargetZ: number, parampow: number, paramuncertainty: number): T;
    static spawnProjectileUsingShoot<T extends Projectile>(paramcreator: (param0: ServerLevel, param1: LivingEntity, param2: ItemStack) => T, paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramsource: LivingEntity, paramtargetX: number, paramtargetY: number, paramtargetZ: number, parampow: number, paramuncertainty: number): T;
    constructor(type: EntityType<LlamaSpit>, level: Level)
    constructor(level: Level, owner: Llama)
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    getAirDrag(): number;
    getDefaultGravity(): number;
    onHitBlock(hitResult: BlockHitResult): void;
    onHitEntity(hitResult: EntityHitResult): void;
    recreateFromPacket(packet: ClientboundAddEntityPacket): void;
    tick(): void;
}