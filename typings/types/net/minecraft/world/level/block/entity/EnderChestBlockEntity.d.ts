import type { SleepingBlockEntity } from '../../../../../../net/caffeinemc/mods/lithium/common/block/entity/SleepingBlockEntity.d.ts'
import type { WrappedBlockEntityTickInvokerAccessor } from '../../../../../../net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping/WrappedBlockEntityTickInvokerAccessor.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ContainerUser } from '../../../../../../net/minecraft/world/entity/ContainerUser.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { ChestLidController } from '../../../../../../net/minecraft/world/level/block/entity/ChestLidController.d.ts'
import type { ContainerOpenersCounter } from '../../../../../../net/minecraft/world/level/block/entity/ContainerOpenersCounter.d.ts'
import type { LidBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/LidBlockEntity.d.ts'
import type { TickingBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class EnderChestBlockEntity extends BlockEntity implements SleepingBlockEntity, LidBlockEntity {
    static NBT_ATTACHMENT_KEY: string;
    static SLEEPING_BLOCK_ENTITY_TICKER: TickingBlockEntity;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static lidAnimateTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: EnderChestBlockEntity): void;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    // private chestLidController: ChestLidController;
    // private openersCounter: ContainerOpenersCounter;
    // private sleepingTicker: TickingBlockEntity;
    // private tickWrapper: WrappedBlockEntityTickInvokerAccessor;
    // private checkSleep(): void;
    getOpenNess(a: number): number;
    isSleeping(): boolean;
    lithium$getSleepingTicker(): TickingBlockEntity;
    lithium$getTickWrapper(): WrappedBlockEntityTickInvokerAccessor;
    lithium$setSleepingTicker(arg0: TickingBlockEntity): void;
    lithium$setTickWrapper(arg0: WrappedBlockEntityTickInvokerAccessor): void;
    lithium$startSleeping(): boolean;
    recheckOpen(): void;
    setTicker(arg0: TickingBlockEntity): void;
    sleepOnlyCurrentTick(): void;
    startOpen(containerUser: ContainerUser): void;
    stillValid(player: Player): boolean;
    stopOpen(containerUser: ContainerUser): void;
    triggerEvent(b0: number, b1: number): boolean;
    wakeUpNow(): void;
}