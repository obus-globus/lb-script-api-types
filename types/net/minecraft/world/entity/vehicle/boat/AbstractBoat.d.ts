import type { IAbstractBoat } from '../../../../../../com/viaversion/viafabricplus/injection/access/entity/legacy_boat_model/IAbstractBoat.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { BlockUtil$FoundRectangle } from '../../../../../../net/minecraft/util/BlockUtil$FoundRectangle.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$MoveFunction } from '../../../../../../net/minecraft/world/entity/Entity$MoveFunction.d.ts'
import type { Entity$MovementEmission } from '../../../../../../net/minecraft/world/entity/Entity$MovementEmission.d.ts'
import type { Entity$RemovalReason } from '../../../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { EntityDimensions } from '../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { InterpolationHandler } from '../../../../../../net/minecraft/world/entity/InterpolationHandler.d.ts'
import type { Leashable } from '../../../../../../net/minecraft/world/entity/Leashable.d.ts'
import type { Leashable$LeashData } from '../../../../../../net/minecraft/world/entity/Leashable$LeashData.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { VehicleEntity } from '../../../../../../net/minecraft/world/entity/vehicle/VehicleEntity.d.ts'
import type { AbstractBoat$Status } from '../../../../../../net/minecraft/world/entity/vehicle/boat/AbstractBoat$Status.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export abstract class AbstractBoat extends VehicleEntity implements IAbstractBoat, Leashable {
    static AXIS_SPECIFIC_ELASTICITY: Vec3;
    static BASE_SAFE_FALL_DISTANCE: number;
    static BASE_TICKS_REQUIRED_TO_FREEZE: number;
    static BOARDING_COOLDOWN: number;
    static BUBBLE_TIME: number;
    static CONTENTS_SLOT_INDEX: number;
    static DEFAULT_BB_HEIGHT: number;
    static DEFAULT_BB_WIDTH: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
    static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
    static ENTITY_ATTACHMENT_POINT: Vec3[];
    static FREEZE_HURT_FREQUENCY: number;
    static LEASHER_ATTACHMENT_POINT: Vec3[];
    static LEASH_ELASTIC_DIST: number;
    static LEASH_TAG: string;
    static LEASH_TOO_FAR_DIST: number;
    static MAXIMUM_ALLOWED_LEASHED_DIST: number;
    static MAX_ENTITY_TAG_COUNT: number;
    static MAX_MOVEMENTS_HANDELED_PER_TICK: number;
    static NBT_ATTACHMENT_KEY: string;
    static PADDLE_LEFT: number;
    static PADDLE_RIGHT: number;
    static PADDLE_SOUND_TIME: number;
    static SHARED_QUAD_ATTACHMENT_POINTS: Vec3[];
    static SPRING_DAMPENING: number;
    static STIFFNESS: number;
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
    static TORSIONAL_ELASTICITY: number;
    static TOTAL_AIR_SUPPLY: number;
    static WILDCARD: ScoreHolder;
    static WILDCARD_NAME: string;
    static angularFriction(paramentity: Object | null): number;
    static canVehicleCollide(paramvehicle: Entity, paramentity: Entity): boolean;
    static collectAllColliders(paramsource: Entity, paramlevel: Level, paramboundingBox: AABB): VoxelShape[];
    static collideBoundingBox(paramarg0: Entity, paramarg1: Vec3, paramarg2: AABB, paramarg3: Level, paramarg4: (Object | null)[]): Vec3;
    static createQuadLeashOffsets(paramentity: Entity, paramfrontOffset: number, paramfrontBack: number, paramleftRight: number, paramheight: number): (Object | null)[];
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static leashableInArea(paramentity: Entity, paramtest: (param0: Leashable) => kotlin.Boolean): Leashable[];
    static leashableInArea(paramlevel: Level, parampos: Vec3, paramtest: (param0: Leashable) => kotlin.Boolean): Leashable[];
    static leashableLeashedTo(paramentity: Entity): Leashable[];
    static setViewScale(paramviewScale: number): void;
    static tickLeash(paramlevel: ServerLevel, paramentity: Object | null): void;
    constructor(type: EntityType<AbstractBoat>, level: Level, dropItem: () => Item)
    // private bubbleAngle: number;
    // private bubbleAngleO: number;
    // private bubbleColumnDirectionIsDown: boolean;
    // private bubbleMultiplier: number;
    // private deltaRotation: number;
    // private dropItem: () => Item;
    // private inputDown: boolean;
    // private inputLeft: boolean;
    // private inputRight: boolean;
    // private inputUp: boolean;
    readonly interpolation: InterpolationHandler;
    // private isAboveBubbleColumn: boolean;
    // private landFriction: number;
    // private lastYd: number;
    readonly leashData: Leashable$LeashData;
    // private oldStatus: AbstractBoat$Status;
    // private outOfControlTicks: number;
    // private paddlePositions: number[];
    // private status: AbstractBoat$Status;
    // private viaFabricPlus$boatInterpolationSteps: number;
    // private viaFabricPlus$boatVelocity: Vec3;
    // private viaFabricPlus$positionInterpolator: InterpolationHandler;
    // private viaFabricPlus$speedMultiplier: number;
    // private waterLevel: number;
    addAdditionalSaveData(output: ValueOutput): void;
    animateHurt(yaw: number): void;
    canAddPassenger(passenger: Entity): boolean;
    canBeCollidedWith(other: Entity): boolean;
    canBeLeashed(): boolean;
    canCollideWith(entity: Entity): boolean;
    canHaveALeashAttachedTo(entity: Entity): boolean;
    checkElasticInteractions(leashHolder: Entity, leashData: Leashable$LeashData): boolean;
    checkFallDamage(ya: number, onGround: boolean, onState: BlockState, pos: BlockPos): void;
    // private checkInWater(): boolean;
    clampRotation(passenger: Entity): void;
    closeRangeLeashBehaviour(leashHolder: Entity): void;
    // private controlBoat(): void;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    dropLeash(): void;
    // private floatBoat(): void;
    getBubbleAngle(a: number): number;
    // private getBubbleTime(): number;
    getControllingPassenger(): LivingEntity;
    getDefaultGravity(): number;
    getDismountLocationForPassenger(passenger: LivingEntity): Vec3;
    getDropItem(): Item;
    getGroundFriction(): number;
    getInterpolation(): InterpolationHandler;
    getLeashData(): Leashable$LeashData;
    getLeashHolder(): Entity;
    getLeashOffset(): Vec3;
    getLeashOffset(partialTicks: number): Vec3;
    getLeashOffset(): Vec3;
    getMaxPassengers(): number;
    getMotionDirection(): Direction;
    getMovementEmission(): Entity$MovementEmission;
    getPaddleSound(): SoundEvent;
    getPaddleState(side: number): boolean;
    getPassengerAttachmentPoint(passenger: Entity, dimensions: EntityDimensions, scale: number): Vec3;
    getPickResult(): ItemStack;
    getQuadLeashOffsets(): Vec3[];
    getQuadLeashOffsets(): Vec3[];
    getRelativePortalPosition(axis: Direction$Axis, portalArea: BlockUtil$FoundRectangle): Vec3;
    getRowingTime(side: number, a: number): number;
    getSinglePassengerXOffset(): number;
    // private getStatus(): AbstractBoat$Status;
    getWaterLevelAbove(): number;
    hasEnoughSpaceFor(entity: Entity): boolean;
    interact(player: Player, hand: InteractionHand, location: Vec3): InteractionResult;
    isLeashed(): boolean;
    isPickable(): boolean;
    isPushable(): boolean;
    isUnderWater(): boolean;
    // private isUnderwater(): AbstractBoat$Status;
    leashDistanceTo(entity: Entity): number;
    leashElasticDistance(): number;
    leashSnapDistance(): number;
    leashTooFarBehaviour(): void;
    lerpMotion(arg0: Vec3): void;
    mayBeLeashed(): boolean;
    modifyPassengerFluidInteractionBox(passengerBox: AABB): AABB;
    onAboveBubbleColumn(dragDown: boolean, pos: BlockPos): void;
    onElasticLeashPull(): void;
    onLeashRemoved(): void;
    onPassengerTurned(passenger: Entity): void;
    positionRider(passenger: Entity, moveFunction: (param0: Entity, param1: number, param2: number, param3: number) => void): void;
    push(entity: Entity): void;
    readAdditionalSaveData(input: ValueInput): void;
    readLeashData(input: ValueInput): void;
    remove(reason: Entity$RemovalReason): void;
    removeLeash(): void;
    rideHeight(dimensions: EntityDimensions): number;
    // private setBubbleTime(val: number): void;
    setDelayedLeashHolderId(entityId: number): void;
    setInitialPos(x: number, y: number, z: number): void;
    setInput(left: boolean, right: boolean, up: boolean, down: boolean): void;
    setLeashData(leashData: Leashable$LeashData): void;
    setLeashedTo(holder: Entity, synch: boolean): void;
    setPaddleState(left: boolean, right: boolean): void;
    supportQuadLeash(): boolean;
    supportQuadLeash(): boolean;
    tick(): void;
    // private tickBubbleColumn(): void;
    viaFabricPlus$getBoatVelocity(): Vec3;
    viaFabricPlus$setBoatInterpolationSteps(arg0: number): void;
    viaFabricPlus$setBoatVelocity(arg0: Vec3): void;
    whenLeashedTo(leashHolder: Entity): void;
    writeLeashData(output: ValueOutput, leashData: Leashable$LeashData): void;
}