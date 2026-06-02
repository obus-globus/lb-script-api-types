import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { ModelQuadView } from '../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { LevelSlice } from '../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { BlockTintSource } from '../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class FabricColorProviders$FabricFluidAdapter extends Object implements ColorProvider<FluidState> {
    constructor(arg0: BlockTintSource)
    // private handler: BlockTintSource;
    getColors(arg0: LevelSlice, arg1: BlockPos, arg2: BlockPos$MutableBlockPos, arg3: FluidState, arg4: ModelQuadView, arg5: number[], arg6: boolean): void;
}