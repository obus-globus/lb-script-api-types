import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { EntityDataAccessor } from '../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$Builder } from '../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { Display } from '../../../../net/minecraft/world/entity/Display.d.ts'
import type { Display$TextDisplay$Align } from '../../../../net/minecraft/world/entity/Display$TextDisplay$Align.d.ts'
import type { Display$TextDisplay$CachedInfo } from '../../../../net/minecraft/world/entity/Display$TextDisplay$CachedInfo.d.ts'
import type { Display$TextDisplay$LineSplitter } from '../../../../net/minecraft/world/entity/Display$TextDisplay$LineSplitter.d.ts'
import type { Display$TextDisplay$TextRenderState } from '../../../../net/minecraft/world/entity/Display$TextDisplay$TextRenderState.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class Display$TextDisplay extends Display {
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static CONTENTS_SLOT_INDEX: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static FLAG_ALIGN_LEFT: number;
    static FLAG_ALIGN_RIGHT: number;
    static FLAG_SEE_THROUGH: number;
    static FLAG_SHADOW: number;
    static FLAG_USE_DEFAULT_BACKGROUND: number;
    static FREEZE_HURT_FREQUENCY: number;
    static INITIAL_BACKGROUND: number;
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
    static TAG_TEXT: string;
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
    static getAlign(paramflags: number): Display$TextDisplay$Align;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<Object>, level: Level)
    // private clientDisplayCache: Display$TextDisplay$CachedInfo;
    // private textRenderState: Display$TextDisplay$TextRenderState;
    addAdditionalSaveData(output: ValueOutput): void;
    cacheDisplay(splitter: (param0: Component, param1: number) => net.minecraft.world.entity.Display.TextDisplay.CachedInfo): Display$TextDisplay$CachedInfo;
    // private createFreshTextRenderState(): Display$TextDisplay$TextRenderState;
    // private createInterpolatedTextRenderState(previous: Display$TextDisplay$TextRenderState, progress: number): Display$TextDisplay$TextRenderState;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    getBackgroundColor(): number;
    getFlags(): number;
    getLineWidth(): number;
    getText(): Component;
    getTextOpacity(): number;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    readAdditionalSaveData(input: ValueInput): void;
    setBackgroundColor(color: number): void;
    setFlags(flags: number): void;
    setLineWidth(width: number): void;
    setText(text: Component): void;
    setTextOpacity(opacity: number): void;
    textRenderState(): Display$TextDisplay$TextRenderState;
    updateRenderSubState(shouldInterpolate: boolean, progress: number): void;
}