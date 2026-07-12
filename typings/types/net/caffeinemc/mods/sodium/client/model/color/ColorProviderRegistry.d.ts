import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { BlockColors } from '../../../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class ColorProviderRegistry extends Object {
    constructor(arg0: BlockColors)
    // private blocks: Map<Block, ColorProvider<BlockState>>;
    // private fluids: Map<Fluid, ColorProvider<FluidState>>;
    // private overridenBlocks: Block[];
    getColorProvider(arg0: Block): ColorProvider<BlockState>;
    getColorProvider(arg0: Fluid): ColorProvider<FluidState>;
    // private installOverrides(): void;
    // private registerBlocks(arg0: ColorProvider<BlockState>, ...arg1: Block[]): void;
    // private registerFluids(arg0: ColorProvider<FluidState>, ...arg1: Fluid[]): void;
}