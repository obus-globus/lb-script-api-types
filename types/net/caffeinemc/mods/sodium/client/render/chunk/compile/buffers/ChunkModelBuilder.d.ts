import type { VertexConsumer } from '../../../../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadFacing } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
import type { Material } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/material/Material.d.ts'
import type { TranslucentGeometryCollector } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/TranslucentGeometryCollector.d.ts'
import type { ChunkMeshBufferBuilder } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/builder/ChunkMeshBufferBuilder.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export interface ChunkModelBuilder extends Object{
    addSprite(arg0: TextureAtlasSprite): void;
    asFallbackVertexConsumer(arg0: Material, arg1: TranslucentGeometryCollector): VertexConsumer;
    getVertexBuffer(arg0: ModelQuadFacing): ChunkMeshBufferBuilder;
}