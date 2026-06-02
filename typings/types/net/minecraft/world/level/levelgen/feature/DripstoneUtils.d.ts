import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class DripstoneUtils extends Object {
    static isDripstoneBase(paramstate: BlockState): boolean;
    static isDripstoneBaseOrLava(paramstate: BlockState): boolean;
    static isEmptyOrWater(paramstate: BlockState): boolean;
    static isEmptyOrWaterOrLava(paramstate: BlockState): boolean;
    static isNeitherEmptyNorWater(paramstate: BlockState): boolean;
    constructor()
}