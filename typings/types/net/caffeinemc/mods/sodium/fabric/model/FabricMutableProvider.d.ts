import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { ModelQuadView } from '../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { LevelSlice } from '../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class FabricMutableProvider extends Object implements ColorProvider<BlockState> {
    constructor()
    // private list: (Object | null)[];
    // private pos: BlockPos$MutableBlockPos;
    // private slice: LevelSlice;
    // private state: BlockState;
    getColors(arg0: LevelSlice, arg1: BlockPos, arg2: BlockPos$MutableBlockPos, arg3: BlockState, arg4: ModelQuadView, arg5: number[], arg6: boolean): void;
}