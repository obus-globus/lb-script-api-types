import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { BlockTintSource } from '../../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class DefaultColorProviders extends Object {
    static adapt(paramarg0: BlockTintSource): ColorProvider<BlockState>;
    static adapt(paramarg0: (Object | null)[]): ColorProvider<BlockState>;
    constructor()
}