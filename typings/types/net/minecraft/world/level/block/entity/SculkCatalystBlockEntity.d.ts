import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SleepingBlockEntity } from '../../../../../../net/caffeinemc/mods/lithium/common/block/entity/SleepingBlockEntity.d.ts'
import type { WrappedBlockEntityTickInvokerAccessor } from '../../../../../../net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping/WrappedBlockEntityTickInvokerAccessor.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { SculkCatalystBlockEntity$CatalystListener } from '../../../../../../net/minecraft/world/level/block/entity/SculkCatalystBlockEntity$CatalystListener.d.ts'
import type { TickingBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { GameEventListener$Provider } from '../../../../../../net/minecraft/world/level/gameevent/GameEventListener$Provider.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class SculkCatalystBlockEntity extends BlockEntity implements SleepingBlockEntity, GameEventListener$Provider<SculkCatalystBlockEntity$CatalystListener> {
    static NBT_ATTACHMENT_KEY: string;
    static SLEEPING_BLOCK_ENTITY_TICKER: TickingBlockEntity;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    static serverTick(paramlevel: Level, parampos: BlockPos, paramstate: BlockState, paramentity: SculkCatalystBlockEntity): void;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    // private catalystListener: SculkCatalystBlockEntity$CatalystListener;
    // private sleepingTicker: TickingBlockEntity;
    // private tickWrapper: WrappedBlockEntityTickInvokerAccessor;
    getListener(): SculkCatalystBlockEntity$CatalystListener;
    isSleeping(): boolean;
    lithium$getSleepingTicker(): TickingBlockEntity;
    lithium$getTickWrapper(): WrappedBlockEntityTickInvokerAccessor;
    lithium$setSleepingTicker(arg0: TickingBlockEntity): void;
    lithium$setTickWrapper(arg0: WrappedBlockEntityTickInvokerAccessor): void;
    lithium$startSleeping(): boolean;
    loadAdditional(input: ValueInput): void;
    saveAdditional(output: ValueOutput): void;
    setTicker(arg0: TickingBlockEntity): void;
    sleepOnlyCurrentTick(): void;
    wakeUpNow(): void;
}