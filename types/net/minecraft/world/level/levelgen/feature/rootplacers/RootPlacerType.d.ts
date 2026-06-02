import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MangroveRootPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/MangroveRootPlacer.d.ts'
import type { RootPlacer } from '../../../../../../../net/minecraft/world/level/levelgen/feature/rootplacers/RootPlacer.d.ts'
export class RootPlacerType<P extends RootPlacer> extends Object {
    static MANGROVE_ROOT_PLACER: RootPlacerType<MangroveRootPlacer>;
    constructor(codec: MapCodec<P>)
    // private codec: MapCodec<P>;
    codec(): MapCodec<P>;
}