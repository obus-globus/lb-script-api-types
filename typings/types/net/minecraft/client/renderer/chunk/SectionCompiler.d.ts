import type { BufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/BufferBuilder.d.ts'
import type { VertexSorting } from '../../../../../com/mojang/blaze3d/vertex/VertexSorting.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockColors } from '../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { SectionBufferBuilderPack } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { BlockStateModelSet } from '../../../../../net/minecraft/client/renderer/block/BlockStateModelSet.d.ts'
import type { FluidStateModelSet } from '../../../../../net/minecraft/client/renderer/block/FluidStateModelSet.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { RenderSectionRegion } from '../../../../../net/minecraft/client/renderer/chunk/RenderSectionRegion.d.ts'
import type { SectionCompiler$Results } from '../../../../../net/minecraft/client/renderer/chunk/SectionCompiler$Results.d.ts'
import type { SectionPos } from '../../../../../net/minecraft/core/SectionPos.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class SectionCompiler extends Object {
    constructor(ambientOcclusion: boolean, cutoutLeaves: boolean, blockModelSet: BlockStateModelSet, fluidModelSet: FluidStateModelSet, blockColors: BlockColors)
    // private ambientOcclusion: boolean;
    // private blockColors: BlockColors;
    // private blockModelSet: BlockStateModelSet;
    // private cutoutLeaves: boolean;
    // private fluidModelSet: FluidStateModelSet;
    compile(sectionPos: SectionPos, region: RenderSectionRegion, vertexSorting: VertexSorting, builders: SectionBufferBuilderPack): SectionCompiler$Results;
    // private getOrBeginLayer(startedLayers: { [key in ChunkSectionLayer]: BufferBuilder }, buffers: SectionBufferBuilderPack, layer: ChunkSectionLayer): BufferBuilder;
    // private handleBlockEntity<E extends BlockEntity>(results: SectionCompiler$Results, blockEntity: E): void;
}