import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { ItemSupplier } from '../../../../../net/minecraft/world/entity/projectile/ItemSupplier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class EyeOfEnder extends Entity implements ItemSupplier {
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
    constructor(type: EntityType<EyeOfEnder>, level: Level)
    constructor(level: Level, x: number, y: number, z: number)
    // private life: number;
    // private surviveAfterDeath: boolean;
    // private target: Vec3;
    addAdditionalSaveData(output: ValueOutput): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    // private getDefaultItem(): ItemStack;
    getItem(): ItemStack;
    getLightLevelDependentMagicValue(): number;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    isAttackable(): boolean;
    readAdditionalSaveData(input: ValueInput): void;
    setItem(source: ItemStack): void;
    shouldRenderAtSqrDistance(distance: number): boolean;
    signalTo(target: Vec3): void;
    // private spawnParticles(origin: Vec3, movement: Vec3): void;
    tick(): void;
}