import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityTicker } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityTicker.d.ts'
import type { BlockEntityType } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ValueInput } from '../../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PotentSulfurBlockEntity extends BlockEntity {
    static CLIENT_GEYSER_PLUME_TICKER: (param0: SoundEvent) => (param0: Level, param1: BlockPos, param2: BlockState, param3: PotentSulfurBlockEntity) => void;
    static CLIENT_NOXIOUS_GAS_TICKER: (param0: Level, param1: BlockPos, param2: BlockState, param3: PotentSulfurBlockEntity) => void;
    static EFFECT_RANGE: number;
    static GEYSER_SALT: number;
    static LAUNCH_ENTITY_TICKER: (param0: Level, param1: BlockPos, param2: BlockState, param3: PotentSulfurBlockEntity) => void;
    static NBT_ATTACHMENT_KEY: string;
    static PARTICLE_FREQUENCY_TICKS: number;
    static SERVER_NAUSEA_EFFECT_TICKER: (param0: Level, param1: BlockPos, param2: BlockState, param3: PotentSulfurBlockEntity) => void;
    static SERVER_WAITING_COUNTDOWN_TICKER: (param0: Level, param1: BlockPos, param2: BlockState, param3: PotentSulfurBlockEntity) => void;
    static SOUND_FREQUENCY_TICKS: number;
    static addEntityType(paramoutput: ValueOutput, paramtype: BlockEntityType<any>): void;
    static canBeReachedByNoxiousGas(paramlevel: Level, paramsourceBlock: BlockPos, parampos: Vec3): boolean;
    static getPosFromTag(parambase: ChunkPos, paramentityTag: CompoundTag): BlockPos;
    static geyserPositional(paramlevel: ServerLevel, parampos: BlockPos): RandomSource;
    static loadStatic(parampos: BlockPos, paramstate: BlockState, paramtag: CompoundTag, paramregistries: HolderLookup$Provider): BlockEntity;
    static parseCustomNameSafe(paraminput: ValueInput, paramname: string): Component;
    constructor(worldPosition: BlockPos, blockState: BlockState)
    eruptionTick: number;
    waitingCountdown: number;
    loadAdditional(input: ValueInput): void;
    resetCountdown(): void;
    saveAdditional(output: ValueOutput): void;
    setLevel(level: Level): void;
}