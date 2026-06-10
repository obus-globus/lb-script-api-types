import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockUtil$FoundRectangle } from '../../../../../../net/minecraft/util/BlockUtil$FoundRectangle.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$MovementEmission } from '../../../../../../net/minecraft/world/entity/Entity$MovementEmission.d.ts'
import type { EntityDimensions } from '../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntitySpawnReason } from '../../../../../../net/minecraft/world/entity/EntitySpawnReason.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { InterpolationHandler } from '../../../../../../net/minecraft/world/entity/InterpolationHandler.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MoverType } from '../../../../../../net/minecraft/world/entity/MoverType.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { VehicleEntity } from '../../../../../../net/minecraft/world/entity/vehicle/VehicleEntity.d.ts'
import type { MinecartBehavior } from '../../../../../../net/minecraft/world/entity/vehicle/minecart/MinecartBehavior.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { RailShape } from '../../../../../../net/minecraft/world/level/block/state/properties/RailShape.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export abstract class AbstractMinecart extends VehicleEntity {
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
    static createMinecart(paramlevel: Level, paramx: number, paramy: number, paramz: number, paramtype: EntityType<AbstractMinecart>, paramreason: EntitySpawnReason, paramitemStack: ItemStack, paramplayer: Player): AbstractMinecart | null;
    static exits(paramshape: RailShape): Pair<Vec3i, Vec3i>;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static setViewScale(paramviewScale: number): void;
    static useExperimentalMovement(paramlevel: Level): boolean;
    constructor(type: EntityType<Object>, level: Level)
    constructor(type: EntityType<Object>, level: Level, x: number, y: number, z: number)
    readonly behavior: MinecartBehavior;
    readonly flipped: boolean;
    readonly onRails: boolean;
    activateMinecart(level: ServerLevel, xt: number, yt: number, zt: number, state: boolean): void;
    addAdditionalSaveData(output: ValueOutput): void;
    animateHurt(yaw: number): void;
    applyEffectsFromBlocks(): void;
    applyEffectsFromBlocks(from: Vec3, to: Vec3): void;
    applyGravity(): void;
    applyNaturalSlowdown(movement: Vec3): Vec3;
    canCollideWith(entity: Entity): boolean;
    comeOffTrack(level: ServerLevel): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    getBehavior(): MinecartBehavior;
    getBlockSpeedFactor(): number;
    getCurrentBlockPosOrRailBelow(): BlockPos;
    // private getCustomDisplayBlockState(): Optional<BlockState>;
    getDefaultDisplayBlockState(): BlockState;
    getDefaultDisplayOffset(): number;
    getDefaultGravity(): number;
    getDismountLocationForPassenger(passenger: LivingEntity): Vec3;
    getDisplayBlockState(): BlockState;
    getDisplayOffset(): number;
    getInterpolation(): InterpolationHandler;
    getKnownMovement(): Vec3;
    getMaxSpeed(level: ServerLevel): number;
    getMotionDirection(): Direction;
    getMovementEmission(): Entity$MovementEmission;
    getPassengerAttachmentPoint(passenger: Entity, dimensions: EntityDimensions, scale: number): Vec3;
    getPickResult(): ItemStack;
    getRedstoneDirection(pos: BlockPos): Vec3;
    getRelativePortalPosition(axis: Direction$Axis, portalArea: BlockUtil$FoundRectangle): Vec3;
    isFirstTick(): boolean;
    isFlipped(): boolean;
    isFurnace(): boolean;
    isOnRails(): boolean;
    isPickable(): boolean;
    isPushable(): boolean;
    isRedstoneConductor(pos: BlockPos): boolean;
    isRideable(): boolean;
    lerpMotion(movement: Vec3): void;
    lerpPositionAndRotationStep(stepsToTarget: number, targetX: number, targetY: number, targetZ: number, targetYRot: number, targetXRot: number): void;
    makeStepAlongTrack(pos: BlockPos, shape: RailShape, movementLeft: number): number;
    move(moverType: MoverType, delta: Vec3): void;
    moveAlongTrack(level: ServerLevel): void;
    push(xa: number, ya: number, za: number): void;
    push(entity: Entity): void;
    push(impulse: Vec3): void;
    // private pushOtherMinecart(otherMinecart: AbstractMinecart, xa: number, za: number): void;
    readAdditionalSaveData(input: ValueInput): void;
    reapplyPosition(): void;
    recreateFromPacket(packet: ClientboundAddEntityPacket): void;
    setCustomDisplayBlockState(state: Optional<BlockState>): void;
    setDisplayOffset(offset: number): void;
    setFlipped(flipped: boolean): void;
    setInitialPos(x: number, y: number, z: number): void;
    setOnRails(onRails: boolean): void;
    tick(): void;
    updateFluidInteraction(): boolean;
}