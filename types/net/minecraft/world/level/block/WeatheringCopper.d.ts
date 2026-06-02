import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ChangeOverTimeBlock } from '../../../../../net/minecraft/world/level/block/ChangeOverTimeBlock.d.ts'
import type { WeatheringCopper$WeatherState } from '../../../../../net/minecraft/world/level/block/WeatheringCopper$WeatherState.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface WeatheringCopper extends Object, ChangeOverTimeBlock<WeatheringCopper$WeatherState>{
    changeOverTime(state: BlockState, level: ServerLevel, pos: BlockPos, random: RandomSource): void;
    getChanceModifier(): number;
    getNext(state: BlockState): Optional<BlockState>;
    getNextState(state: BlockState, level: ServerLevel, pos: BlockPos, random: RandomSource): Optional<BlockState>;
}