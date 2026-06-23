import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientboundBlockEntityDataPacket } from '../../../../../../net/minecraft/network/protocol/game/ClientboundBlockEntityDataPacket.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { TheEndPortalBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TheEndPortalBlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TheEndGatewayBlockEntity extends TheEndPortalBlockEntity {
    static NBT_ATTACHMENT_KEY: string;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static beamAnimationTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: TheEndGatewayBlockEntity): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static portalTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: TheEndGatewayBlockEntity): void;
    static triggerCooldown(paramlevel: Level, parampos: BlockPos, paramblockState: BlockState, paramentity: TheEndGatewayBlockEntity): void;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    // private age: number;
    // private exactTeleport: boolean;
    // private exitPortal: BlockPos;
    // private teleportCooldown: number;
    getCooldownPercent(a: number): number;
    getParticleAmount(): number;
    getPortalPosition(currentLevel: ServerLevel, portalEntryPos: BlockPos): Vec3;
    getSpawnPercent(a: number): number;
    getUpdatePacket(): ClientboundBlockEntityDataPacket;
    getUpdateTag(registries: HolderLookup$Provider): CompoundTag;
    isCoolingDown(): boolean;
    isSpawning(): boolean;
    loadAdditional(input: ValueInput): void;
    saveAdditional(output: ValueOutput): void;
    setExitPosition(exactPosition: BlockPos, exact: boolean): void;
    shouldRenderFace(direction: Direction): boolean;
    triggerEvent(b0: number, b1: number): boolean;
}