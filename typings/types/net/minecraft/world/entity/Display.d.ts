import type { Transformation } from '../../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$Builder } from '../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Brightness } from '../../../../net/minecraft/util/Brightness.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Display$BillboardConstraints } from '../../../../net/minecraft/world/entity/Display$BillboardConstraints.d.ts'
import type { Display$RenderState } from '../../../../net/minecraft/world/entity/Display$RenderState.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { InterpolationHandler } from '../../../../net/minecraft/world/entity/InterpolationHandler.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { PushReaction } from '../../../../net/minecraft/world/level/material/PushReaction.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export abstract class Display extends Entity {
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
    static NO_BRIGHTNESS_OVERRIDE: number;
    static TAG_AIR: string;
    static TAG_BILLBOARD: string;
    static TAG_BRIGHTNESS: string;
    static TAG_CUSTOM_NAME: string;
    static TAG_DATA: string;
    static TAG_FALL_DISTANCE: string;
    static TAG_FIRE: string;
    static TAG_GLOWING: string;
    static TAG_GLOW_COLOR_OVERRIDE: string;
    static TAG_HEIGHT: string;
    static TAG_ID: string;
    static TAG_INVULNERABLE: string;
    static TAG_MOTION: string;
    static TAG_NO_GRAVITY: string;
    static TAG_ON_GROUND: string;
    static TAG_PASSENGERS: string;
    static TAG_PORTAL_COOLDOWN: string;
    static TAG_POS: string;
    static TAG_POS_ROT_INTERPOLATION_DURATION: string;
    static TAG_ROTATION: string;
    static TAG_SHADOW_RADIUS: string;
    static TAG_SHADOW_STRENGTH: string;
    static TAG_SILENT: string;
    static TAG_TRANSFORMATION: string;
    static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
    static TAG_TRANSFORMATION_START_INTERPOLATION: string;
    static TAG_UUID: string;
    static TAG_VIEW_RANGE: string;
    static TAG_WIDTH: string;
    static TOTAL_AIR_SUPPLY: number;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<Object>, level: Level)
    // private cullingBoundingBox: AABB;
    readonly interpolation: InterpolationHandler;
    // private interpolationDuration: number;
    // private interpolationStartClientTick: number;
    // private lastProgress: number;
    // private noCulling: boolean;
    // private renderState: Display$RenderState;
    // private updateInterpolationDuration: boolean;
    // private updateRenderState: boolean;
    // private updateStartTick: boolean;
    addAdditionalSaveData(output: ValueOutput): void;
    affectedByCulling(): boolean;
    calculateInterpolationProgress(partialTickTime: number): number;
    // private createFreshRenderState(): Display$RenderState;
    // private createInterpolatedRenderState(previousState: Display$RenderState, progress: number): Display$RenderState;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    getBillboardConstraints(): Display$BillboardConstraints;
    getBoundingBoxForCulling(): AABB;
    getBrightnessOverride(): Brightness;
    getGlowColorOverride(): number;
    getHeight(): number;
    getInterpolation(): InterpolationHandler;
    getPackedBrightnessOverride(): number;
    getPistonPushReaction(): PushReaction;
    getPosRotInterpolationDuration(): number;
    getShadowRadius(): number;
    getShadowStrength(): number;
    getTeamColor(): number;
    getTransformationInterpolationDelay(): number;
    getTransformationInterpolationDuration(): number;
    getViewRange(): number;
    getWidth(): number;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    isIgnoringBlockTriggers(): boolean;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    readAdditionalSaveData(input: ValueInput): void;
    renderState(): Display$RenderState;
    setBillboardConstraints(constraints: Display$BillboardConstraints): void;
    setBrightnessOverride(brightness: Brightness): void;
    setGlowColorOverride(value: number): void;
    setHeight(width: number): void;
    setPos(x: number, y: number, z: number): void;
    setPos(pos: Vec3): void;
    setPosRotInterpolationDuration(duration: number): void;
    setShadowRadius(size: number): void;
    setShadowStrength(strength: number): void;
    setTransformation(transformation: Transformation): void;
    setTransformationInterpolationDelay(ticks: number): void;
    setTransformationInterpolationDuration(duration: number): void;
    setViewRange(range: number): void;
    setWidth(width: number): void;
    shouldRenderAtSqrDistance(distanceSqr: number): boolean;
    tick(): void;
    // private updateCulling(): void;
    updateRenderSubState(shouldInterpolate: boolean, progress: number): void;
}