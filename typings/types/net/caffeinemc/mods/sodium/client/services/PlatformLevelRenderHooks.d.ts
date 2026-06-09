import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LevelSlice } from '../../../../../../net/caffeinemc/mods/sodium/client/world/LevelSlice.d.ts'
import type { Camera } from '../../../../../../net/minecraft/client/Camera.d.ts'
import type { LevelRenderer } from '../../../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { ChunkSectionLayer } from '../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { Frustum } from '../../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Matrix4f } from '../../../../../../org/joml/Matrix4f.d.ts'
export interface PlatformLevelRenderHooks extends Object {
    retrieveChunkMeshAppenders(arg0: Level, arg1: BlockPos): (Object | null)[];
    runChunkLayerEvents(arg0: RenderType, arg1: Level, arg2: LevelRenderer, arg3: Matrix4f, arg4: Matrix4f, arg5: number, arg6: Camera, arg7: Frustum): void;
    runChunkMeshAppenders(arg0: (Object | null)[], arg1: (param0: ChunkSectionLayer) => VertexConsumer, arg2: LevelSlice, arg3: BlockPos): void;
}