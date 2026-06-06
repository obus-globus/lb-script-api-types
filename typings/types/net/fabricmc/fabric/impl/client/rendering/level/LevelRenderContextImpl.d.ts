import type { PoseStack } from '../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractLevelRenderContext } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/AbstractLevelRenderContext.d.ts'
import type { LevelRenderContext } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelRenderContext.d.ts'
import type { LevelTerrainRenderContext } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/level/LevelTerrainRenderContext.d.ts'
import type { GameRenderer } from '../../../../../../../net/minecraft/client/renderer/GameRenderer.d.ts'
import type { LevelRenderer } from '../../../../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { SubmitNodeCollector } from '../../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { ChunkSectionsToRender } from '../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionsToRender.d.ts'
import type { LevelRenderState } from '../../../../../../../net/minecraft/client/renderer/state/level/LevelRenderState.d.ts'
export class LevelRenderContextImpl extends Object implements AbstractLevelRenderContext, LevelRenderContext, LevelTerrainRenderContext {
    constructor()
    // private bufferSource: MultiBufferSource$BufferSource;
    // private gameRenderer: GameRenderer;
    // private levelRenderState: LevelRenderState;
    // private levelRenderer: LevelRenderer;
    // private nodeCollector: SubmitNodeCollector;
    // private sectionsToRender: ChunkSectionsToRender;
    bufferSource(): MultiBufferSource$BufferSource;
    gameRenderer(): GameRenderer;
    levelRenderer(): LevelRenderer;
    levelState(): LevelRenderState;
    poseStack(): PoseStack;
    prepare(arg0: GameRenderer, arg1: LevelRenderer, arg2: LevelRenderState, arg3: ChunkSectionsToRender, arg4: SubmitNodeCollector, arg5: MultiBufferSource$BufferSource): void;
    sectionsToRender(): ChunkSectionsToRender;
    setPoseStack(arg0: PoseStack): void;
    submitNodeCollector(): SubmitNodeCollector;
}