import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { EntityDataAccessor } from '../../../../../net/minecraft/network/syncher/EntityDataAccessor.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { SynchedEntityData$DataValue } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$DataValue.d.ts'
import type { ServerEntity } from '../../../../../net/minecraft/server/level/ServerEntity.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { MoverType } from '../../../../../net/minecraft/world/entity/MoverType.d.ts'
import type { SlotAccess } from '../../../../../net/minecraft/world/entity/SlotAccess.d.ts'
import type { HangingEntity } from '../../../../../net/minecraft/world/entity/decoration/HangingEntity.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { MapId } from '../../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class ItemFrame extends HangingEntity {
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
    static NUM_ROTATIONS: number;
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
    constructor(type: EntityType<ItemFrame>, level: Level)
    constructor(type: EntityType<ItemFrame>, level: Level, pos: BlockPos, direction: Direction)
    constructor(level: Level, pos: BlockPos, direction: Direction)
    // private dropChance: number;
    // private fixed: boolean;
    addAdditionalSaveData(output: ValueOutput): void;
    calculateBoundingBox(blockPos: BlockPos, direction: Direction): AABB;
    // private createBoundingBox(blockPos: BlockPos, direction: Direction, hasFramedMap: boolean): AABB;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    dropItem(level: ServerLevel, causedBy: Entity): void;
    // private dropItem(level: ServerLevel, causedBy: Entity, withFrame: boolean): void;
    getAddEntityPacket(serverEntity: ServerEntity): Packet<ClientGamePacketListener>;
    getAddItemSound(): SoundEvent;
    getAnalogOutput(): number;
    getBreakSound(): SoundEvent;
    getFrameItemStack(): ItemStack;
    getFramedMapId(itemStack: ItemStack): MapId;
    getItem(): ItemStack;
    getPickResult(): ItemStack;
    getPlaceSound(): SoundEvent;
    getPopBox(): AABB;
    getRemoveItemSound(): SoundEvent;
    getRotateItemSound(): SoundEvent;
    getRotation(): number;
    getSlot(slot: number): SlotAccess;
    getVisualRotationYInDegrees(): number;
    hasFramedMap(): boolean;
    hurtClient(source: DamageSource): boolean;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    interact(player: Player, hand: InteractionHand, location: Vec3): InteractionResult;
    kill(level: ServerLevel): void;
    move(moverType: MoverType, delta: Vec3): void;
    // private onItemChanged(item: ItemStack): void;
    onSyncedDataUpdated(updatedItems: SynchedEntityData$DataValue<Object>[]): void;
    onSyncedDataUpdated(accessor: EntityDataAccessor<Object>): void;
    playPlacementSound(): void;
    push(xa: number, ya: number, za: number): void;
    push(entity: Entity): void;
    push(impulse: Vec3): void;
    readAdditionalSaveData(input: ValueInput): void;
    recalculateBoundingBox(): void;
    recreateFromPacket(packet: ClientboundAddEntityPacket): void;
    // private removeFramedMap(itemStack: ItemStack): void;
    setDirection(direction: Direction): void;
    setItem(itemStack: ItemStack): void;
    setItem(itemStack: ItemStack, updateNeighbours: boolean): void;
    setRotation(rotation: number): void;
    // private setRotation(rotation: number, updateNeighbours: boolean): void;
    // private shouldDamageDropItem(source: DamageSource): boolean;
    shouldRenderAtSqrDistance(distance: number): boolean;
    survives(): boolean;
}