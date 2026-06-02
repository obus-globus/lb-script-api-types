import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockTintSource } from '../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { Material$Baked } from '../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
export class FluidModel extends Record {
    constructor(layer: ChunkSectionLayer, stillMaterial: Material$Baked, flowingMaterial: Material$Baked, overlayMaterial: Material$Baked, tintSource: BlockTintSource)
    // private flowingMaterial: Material$Baked;
    // private layer: ChunkSectionLayer;
    // private overlayMaterial: Material$Baked;
    // private stillMaterial: Material$Baked;
    // private tintSource: BlockTintSource;
    equals(o: Object | null): boolean;
    flowingMaterial(): Material$Baked;
    hashCode(): number;
    layer(): ChunkSectionLayer;
    overlayMaterial(): Material$Baked;
    stillMaterial(): Material$Baked;
    tintSource(): BlockTintSource;
    toString(): string;
}