import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class NetherVines extends Object {
    static GROW_PER_TICK_PROBABILITY: number;
    static getBlocksToGrowWhenBonemealed(paramrandom: RandomSource): number;
    static isValidGrowthState(paramstate: BlockState): boolean;
    constructor()
}