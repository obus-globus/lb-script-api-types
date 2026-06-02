import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
import type { SynchedEntityData$Builder } from '../../../../../net/minecraft/network/syncher/SynchedEntityData$Builder.d.ts'
import type { ServerEntity } from '../../../../../net/minecraft/server/level/ServerEntity.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$MovementEmission } from '../../../../../net/minecraft/world/entity/Entity$MovementEmission.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { TeleportTransition } from '../../../../../net/minecraft/world/level/portal/TeleportTransition.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { ScoreHolder } from '../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class FallingBlockEntity extends Entity {
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
    static fall(paramlevel: Level, parampos: BlockPos, paramstate: BlockState): FallingBlockEntity;
    static getInputVector(paraminput: Vec3, paramspeed: number, paramyRot: number): Vec3;
    static getViewScale(): number;
    static setViewScale(paramviewScale: number): void;
    constructor(type: EntityType<FallingBlockEntity>, level: Level)
    private constructor(level: Level, x: number, y: number, z: number, blockState: BlockState)
    blockData: CompoundTag;
    readonly blockState: BlockState;
    // private cancelDrop: boolean;
    dropItem: boolean;
    // private fallDamageMax: number;
    // private fallDamagePerDistance: number;
    forceTickAfterTeleportToDuplicate: boolean;
    // private hurtEntities: boolean;
    time: number;
    addAdditionalSaveData(output: ValueOutput): void;
    callOnBrokenAfterFall(block: Block, pos: BlockPos): void;
    causeFallDamage(fallDistance: number, damageModifier: number, damageSource: DamageSource): boolean;
    defineSynchedData(entityData: SynchedEntityData$Builder): void;
    disableDrop(): void;
    displayFireAnimation(): boolean;
    fillCrashReportCategory(category: CrashReportCategory): void;
    getAddEntityPacket(serverEntity: ServerEntity): Packet<ClientGamePacketListener>;
    getBlockState(): BlockState;
    getDefaultGravity(): number;
    getMovementEmission(): Entity$MovementEmission;
    getStartPos(): BlockPos;
    getTypeName(): Component;
    hurtServer(level: ServerLevel, source: DamageSource, damage: number): boolean;
    isAttackable(): boolean;
    isPickable(): boolean;
    readAdditionalSaveData(input: ValueInput): void;
    recreateFromPacket(packet: ClientboundAddEntityPacket): void;
    setHurtsEntities(damagePerDistance: number, damageMax: number): void;
    setStartPos(pos: BlockPos): void;
    teleport(transition: TeleportTransition): Entity;
    tick(): void;
}