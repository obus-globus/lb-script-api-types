import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { OutlineBufferSource } from '../../../../../net/minecraft/client/renderer/OutlineBufferSource.d.ts'
import type { SubmitNodeStorage } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { BlockFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/BlockFeatureRenderer.d.ts'
import type { CustomFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/CustomFeatureRenderer.d.ts'
import type { FlameFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/FlameFeatureRenderer.d.ts'
import type { ItemFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/ItemFeatureRenderer.d.ts'
import type { LeashFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/LeashFeatureRenderer.d.ts'
import type { ModelFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer.d.ts'
import type { ModelPartFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/ModelPartFeatureRenderer.d.ts'
import type { NameTagFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/NameTagFeatureRenderer.d.ts'
import type { ParticleFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/ParticleFeatureRenderer.d.ts'
import type { ShadowFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/ShadowFeatureRenderer.d.ts'
import type { TextFeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/TextFeatureRenderer.d.ts'
import type { GameRenderState } from '../../../../../net/minecraft/client/renderer/state/GameRenderState.d.ts'
import type { ModelManager } from '../../../../../net/minecraft/client/resources/model/ModelManager.d.ts'
import type { AtlasManager } from '../../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
export class FeatureRenderDispatcher extends Object implements AutoCloseable {
    constructor(submitNodeStorage: SubmitNodeStorage, modelManager: ModelManager, bufferSource: MultiBufferSource$BufferSource, atlasManager: AtlasManager, outlineBufferSource: OutlineBufferSource, crumblingBufferSource: MultiBufferSource$BufferSource, font: Font, gameRenderState: GameRenderState)
    // private atlasManager: AtlasManager;
    // private blockFeatureRenderer: BlockFeatureRenderer;
    // private bufferSource: MultiBufferSource$BufferSource;
    // private crumblingBufferSource: MultiBufferSource$BufferSource;
    // private customFeatureRenderer: CustomFeatureRenderer;
    // private flameFeatureRenderer: FlameFeatureRenderer;
    // private font: Font;
    // private gameRenderState: GameRenderState;
    // private itemFeatureRenderer: ItemFeatureRenderer;
    // private leashFeatureRenderer: LeashFeatureRenderer;
    // private modelFeatureRenderer: ModelFeatureRenderer;
    // private modelManager: ModelManager;
    // private modelPartFeatureRenderer: ModelPartFeatureRenderer;
    // private nameTagFeatureRenderer: NameTagFeatureRenderer;
    // private outlineBufferSource: OutlineBufferSource;
    // private particleFeatureRenderer: ParticleFeatureRenderer;
    // private shadowFeatureRenderer: ShadowFeatureRenderer;
    readonly submitNodeStorage: SubmitNodeStorage;
    // private textFeatureRenderer: TextFeatureRenderer;
    clearSubmitNodes(): void;
    close(): void;
    endFrame(): void;
    getSubmitNodeStorage(): SubmitNodeStorage;
    renderAllFeatures(): void;
    renderSolidFeatures(): void;
    renderTranslucentFeatures(): void;
    renderTranslucentParticles(): void;
}