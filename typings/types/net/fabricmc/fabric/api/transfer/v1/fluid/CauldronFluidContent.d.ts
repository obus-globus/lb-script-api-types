import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { IntegerProperty } from '../../../../../../../net/minecraft/world/level/block/state/properties/IntegerProperty.d.ts'
import type { Fluid } from '../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class CauldronFluidContent extends Object {
    static getForBlock(paramarg0: Block): CauldronFluidContent;
    static getForFluid(paramarg0: Fluid): CauldronFluidContent;
    static registerCauldron(paramarg0: Block, paramarg1: Fluid, paramarg2: number, paramarg3: IntegerProperty): CauldronFluidContent;
    private constructor(arg0: Block, arg1: Fluid, arg2: number, arg3: number, arg4: IntegerProperty)
    amountPerLevel: number;
    block: Block;
    fluid: Fluid;
    levelProperty: IntegerProperty;
    maxLevel: number;
    currentLevel(arg0: BlockState): number;
}