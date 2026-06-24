import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$Builder } from '../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityReference } from '../../../../net/minecraft/world/entity/EntityReference.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Pose } from '../../../../net/minecraft/world/entity/Pose.d.ts'
import type { TraceableEntity } from '../../../../net/minecraft/world/entity/TraceableEntity.d.ts'
import type { PotionContents } from '../../../../net/minecraft/world/item/alchemy/PotionContents.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { PushReaction } from '../../../../net/minecraft/world/level/material/PushReaction.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class AreaEffectCloud extends Entity implements TraceableEntity {
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static CONTENTS_SLOT_INDEX: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DEFAULT_BELOW_NAME_DISTANCE: number;
    static DEFAULT_LINGERING_DURATION: number;
    static DEFAULT_NAME_TAG_DISTANCE: number;
    static DEFAULT_WIDTH: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static FREEZE_HURT_FREQUENCY: number;
    static HEIGHT: number;
    static INFINITE_DURATION: number;
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
    constructor(type: EntityType<AreaEffectCloud>, level: Level)
    constructor(level: Level, x: number, y: number, z: number)
    readonly customParticle: ParticleOptions;
    readonly duration: number;
    readonly durationOnUse: number;
    readonly owner: EntityReference<LivingEntity>;
    potionContents: PotionContents;
    readonly potionDurationScale: number;
    readonly radiusOnUse: number;
    readonly radiusPerTick: number;
    // private reapplicationDelay: number;
    // private victims: Map<Entity, number>;
    readonly waitTime: number;
    addAdditionalSaveData(output: ValueOutput): void;
    addEffect(effect: MobEffectInstance): void;
    applyImplicitComponent<T extends unknown>(type: DataComponentType<T>, value: T): boolean;
    applyImplicitComponents(components: DataComponentGetter): void;
    // private clientTick(): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    get<T extends unknown>(type: DataComponentType<T>): T;
    getDimensions(pose: Pose): EntityDimensions;
    getDuration(): number;
    getDurationOnUse(): number;
    getOwner(): LivingEntity;
    getParticle(): ParticleOptions;
    getPistonPushReaction(): PushReaction;
    getRadius(): number;
    getRadiusOnUse(): number;
    getRadiusPerTick(): number;
    getWaitTime(): number;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    isWaiting(): boolean;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    readAdditionalSaveData(input: ValueInput): void;
    refreshDimensions(): void;
    // private serverTick(serverLevel: ServerLevel): void;
    setCustomParticle(customParticle: ParticleOptions): void;
    setDuration(duration: number): void;
    setDurationOnUse(durationOnUse: number): void;
    setOwner(owner: LivingEntity): void;
    setPotionContents(contents: PotionContents): void;
    setPotionDurationScale(scale: number): void;
    setRadius(radius: number): void;
    setRadiusOnUse(radiusOnUse: number): void;
    setRadiusPerTick(radiusPerTick: number): void;
    setWaitTime(waitTime: number): void;
    setWaiting(waiting: boolean): void;
    tick(): void;
    // private updateParticle(): void;
}