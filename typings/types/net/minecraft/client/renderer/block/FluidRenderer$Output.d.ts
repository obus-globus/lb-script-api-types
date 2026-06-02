import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
export interface FluidRenderer$Output extends Object{
    getBuilder(layer: ChunkSectionLayer): VertexConsumer;
}