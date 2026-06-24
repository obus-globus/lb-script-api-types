import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { RenderBuffers } from '../../../../../net/minecraft/client/renderer/RenderBuffers.d.ts'
import type { StagedVertexBuffer } from '../../../../../net/minecraft/client/renderer/StagedVertexBuffer.d.ts'
import type { SubmitNodeStorage } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRenderDispatcher$PreparedFrame } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher$PreparedFrame.d.ts'
import type { FeatureRendererMap } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererMap.d.ts'
import type { GameRenderState } from '../../../../../net/minecraft/client/renderer/state/GameRenderState.d.ts'
import type { ModelManager } from '../../../../../net/minecraft/client/resources/model/ModelManager.d.ts'
import type { AtlasManager } from '../../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
export class FeatureRenderDispatcher extends Object implements AutoCloseable {
    constructor(renderBuffers: RenderBuffers, modelManager: ModelManager, atlasManager: AtlasManager, font: Font, gameRenderState: GameRenderState)
    // private atlasManager: AtlasManager;
    // private featureRenderers: FeatureRendererMap;
    // private font: Font;
    // private gameRenderState: GameRenderState;
    // private modelManager: ModelManager;
    // private preparedFrame: FeatureRenderDispatcher$PreparedFrame;
    // private stagedVertexBuffer: StagedVertexBuffer;
    close(): void;
    prepareFrame(submitNodeStorage: SubmitNodeStorage): FeatureRenderDispatcher$PreparedFrame;
    // private prepareFrameWithContext(context: FeatureFrameContext, submitNodeStorage: SubmitNodeStorage): FeatureRenderDispatcher$PreparedFrame;
    renderAllFeatures(submitNodeStorage: SubmitNodeStorage): void;
}