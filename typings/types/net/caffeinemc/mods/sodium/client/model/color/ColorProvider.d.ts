import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { LevelSlice } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
export interface ColorProvider<T extends unknown> extends Object{
    getColors(arg0: LevelSlice, arg1: BlockPos, arg2: BlockPos$MutableBlockPos, arg3: T, arg4: ModelQuadView, arg5: number[], arg6: boolean): void;
}