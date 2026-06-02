import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { BlendedColorProvider } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/blender/BlendedColorProvider.d.ts'
import type { LevelSlice } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class DefaultColorProviders$GrassColorProvider<T extends Object | number | string | boolean> extends BlendedColorProvider<T> {
    static BLOCKS: ColorProvider<BlockState>;
    private constructor()
    getColor(arg0: LevelSlice, arg1: T, arg2: BlockPos): number;
}