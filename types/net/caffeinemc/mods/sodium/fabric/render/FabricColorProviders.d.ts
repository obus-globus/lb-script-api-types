import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { BlockTintSource } from '../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { FluidState } from '../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class FabricColorProviders extends Object {
    static adapt(paramarg0: BlockTintSource): ColorProvider<FluidState>;
    constructor()
}