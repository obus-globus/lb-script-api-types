import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
export interface NoiseChunk$BlockStateFiller extends Object{
    calculate(context: DensityFunction$FunctionContext): BlockState;
}