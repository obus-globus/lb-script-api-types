import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SleepingBlockEntity } from '../../../../../../net/caffeinemc/mods/lithium/common/block/entity/SleepingBlockEntity.d.ts'
import type { WrappedBlockEntityTickInvokerAccessor } from '../../../../../../net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping/WrappedBlockEntityTickInvokerAccessor.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { TickingBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { GameEvent } from '../../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEventListener$Provider } from '../../../../../../net/minecraft/world/level/gameevent/GameEventListener$Provider.d.ts'
import type { VibrationSystem } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem.d.ts'
import type { VibrationSystem$Data } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem$Data.d.ts'
import type { VibrationSystem$Listener } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem$Listener.d.ts'
import type { VibrationSystem$User } from '../../../../../../net/minecraft/world/level/gameevent/vibrations/VibrationSystem$User.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class SculkSensorBlockEntity extends BlockEntity implements SleepingBlockEntity, GameEventListener$Provider<VibrationSystem$Listener>, VibrationSystem {
    static NBT_ATTACHMENT_KEY: string;
    static NO_VIBRATION_FREQUENCY: number;
    static RESONANCE_EVENTS: ResourceKey<GameEvent>[];
    static SLEEPING_BLOCK_ENTITY_TICKER: TickingBlockEntity;
    static VIBRATION_FREQUENCY_FOR_EVENT: (param0: ResourceKey<GameEvent>) => number;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<Object>): void;
    static getGameEventFrequency(paramevent: Holder<GameEvent>): number;
    static getGameEventFrequency(paramevent: ResourceKey<GameEvent>): number;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static getRedstoneStrengthForDistance(paramdistance: number, paramlistenerRadius: number): number;
    static getResonanceEventByFrequency(paramvibrationFrequency: number): ResourceKey<GameEvent>;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    constructor(type: BlockEntityType<Object>, worldPosition: BlockPos, blockState: BlockState)
    readonly lastVibrationFrequency: number;
    // private sleepingTicker: TickingBlockEntity;
    // private tickWrapper: WrappedBlockEntityTickInvokerAccessor;
    readonly vibrationData: VibrationSystem$Data;
    // private vibrationListener: VibrationSystem$Listener;
    readonly vibrationUser: VibrationSystem$User;
    createVibrationUser(): VibrationSystem$User;
    getLastVibrationFrequency(): number;
    getListener(): VibrationSystem$Listener;
    getVibrationData(): VibrationSystem$Data;
    getVibrationUser(): VibrationSystem$User;
    isSleeping(): boolean;
    lithium$getSleepingTicker(): TickingBlockEntity;
    lithium$getTickWrapper(): WrappedBlockEntityTickInvokerAccessor;
    lithium$setSleepingTicker(arg0: TickingBlockEntity): void;
    lithium$setTickWrapper(arg0: WrappedBlockEntityTickInvokerAccessor): void;
    lithium$startSleeping(): boolean;
    loadAdditional(input: ValueInput): void;
    saveAdditional(output: ValueOutput): void;
    setLastVibrationFrequency(lastVibrationFrequency: number): void;
    setTicker(arg0: TickingBlockEntity): void;
    sleepOnlyCurrentTick(): void;
    wakeUpNow(): void;
}