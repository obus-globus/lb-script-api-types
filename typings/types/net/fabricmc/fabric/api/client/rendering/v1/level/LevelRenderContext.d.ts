import type { PoseStack } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LevelTerrainRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelTerrainRenderContext.d.ts'
import type { LevelRenderContextBackwardsCompatHack } from '../../../../../../../../net/fabricmc/fabric/impl/client/rendering/LevelRenderContextBackwardsCompatHack.d.ts'
import type { GameRenderer } from '../../../../../../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { LevelRenderer } from '../../../../../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { SubmitNodeCollector } from '../../../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { ChunkSectionsToRender } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionsToRender.d.ts'
import type { LevelRenderState } from '../../../../../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
export interface LevelRenderContext extends Object, LevelTerrainRenderContext, LevelRenderContextBackwardsCompatHack{
    bufferSource(): MultiBufferSource$BufferSource;
    gameRenderer(): GameRenderer;
    levelRenderer(): LevelRenderer;
    levelState(): LevelRenderState;
    poseStack(): PoseStack;
    sectionsToRender(): ChunkSectionsToRender;
    submitNodeCollector(): SubmitNodeCollector;
}