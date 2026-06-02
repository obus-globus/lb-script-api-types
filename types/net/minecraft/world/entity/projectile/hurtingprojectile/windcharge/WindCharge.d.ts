import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityReference } from '../../../../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Projectile } from '../../../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { Projectile$ProjectileFactory } from '../../../../../../../net/minecraft/world/entity/projectile/Projectile$ProjectileFactory.d.ts'
import type { ProjectileDeflection } from '../../../../../../../net/minecraft/world/entity/projectile/ProjectileDeflection.d.ts'
import type { AbstractWindCharge } from '../../../../../../../net/minecraft/world/entity/projectile/hurtingprojectile/windcharge/AbstractWindCharge.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ExplosionDamageCalculator } from '../../../../../../../net/minecraft/world/level/ExplosionDamageCalculator.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class WindCharge extends AbstractWindCharge {
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static CONTENTS_SLOT_INDEX: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DEFLECTION_SCALE: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static EXPLOSION_DAMAGE_CALCULATOR: ExplosionDamageCalculator;
    static FREEZE_HURT_FREQUENCY: number;
    static INITAL_ACCELERATION_POWER: number;
    static JUMP_SCALE: number;
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
    constructor(type: EntityType<AbstractWindCharge>, level: Level)
    constructor(player: Player, level: Level, x: number, y: number, z: number)
    constructor(level: Level, x: number, y: number, z: number, direction: Vec3)
    // private noDeflectTicks: number;
    deflect(deflection: (param0: Projectile, param1: Entity, param2: RandomSource) => void, deflectingEntity: Entity, newOwner: EntityReference<Entity>, byAttack: boolean): boolean;
    explode(position: Vec3): void;
    shouldRenderAtSqrDistance(distance: number): boolean;
    tick(): void;
}