import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { SculkSpreader } from '../../../../../net/minecraft/world/level/block/SculkSpreader.d.ts'
import type { SculkSpreader$ChargeCursor } from '../../../../../net/minecraft/world/level/block/SculkSpreader$ChargeCursor.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface SculkBehaviour extends Object{
    attemptSpreadVein(level: LevelAccessor, pos: BlockPos, state: BlockState, facings: E[], postProcess: boolean): boolean;
    attemptUseCharge(cursor: SculkSpreader$ChargeCursor, level: LevelAccessor, originPos: BlockPos, random: RandomSource, spreader: SculkSpreader, spreadVeins: boolean): number;
    canChangeBlockStateOnSpread(): boolean;
    depositCharge(level: LevelAccessor, pos: BlockPos, random: RandomSource): boolean;
    getSculkSpreadDelay(): number;
    onDischarged(level: LevelAccessor, state: BlockState, pos: BlockPos, random: RandomSource): void;
    updateDecayDelay(age: number): number;
}