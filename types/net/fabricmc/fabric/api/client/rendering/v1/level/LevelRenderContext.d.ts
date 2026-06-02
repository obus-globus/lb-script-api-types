import type { PoseStack } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelTerrainRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelTerrainRenderContext.d.ts'
import type { LevelRenderContextBackwardsCompatHack } from '../../../../../../../../net/fabricmc/fabric/impl/client/rendering/LevelRenderContextBackwardsCompatHack.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { SubmitNodeCollector } from '../../../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
export interface LevelRenderContext extends Object, LevelTerrainRenderContext, LevelRenderContextBackwardsCompatHack{
    bufferSource(): MultiBufferSource$BufferSource;
    poseStack(): PoseStack;
    submitNodeCollector(): SubmitNodeCollector;
}