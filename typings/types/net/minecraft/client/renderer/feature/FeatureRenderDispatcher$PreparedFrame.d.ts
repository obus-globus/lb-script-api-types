import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeStorage } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRenderDispatcher } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher.d.ts'
import type { FeatureRenderDispatcher$PreparedGroup } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher$PreparedGroup.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { FeatureRenderPhase } from '../../../../../net/minecraft/client/renderer/feature/phase/FeatureRenderPhase.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class FeatureRenderDispatcher$PreparedFrame extends Object implements AutoCloseable {
    constructor(null_: FeatureRenderDispatcher)
    // private allSubmits: SubmitNode[];
    // private context: FeatureFrameContext;
    // private groupsByFeature: Map<FeatureRendererType<any>, FeatureRenderDispatcher$PreparedGroup<any>[]>;
    // private groupsByPhase: Map<FeatureRenderPhase<any>, FeatureRenderDispatcher$PreparedGroup<any>[]>;
    // private submitNodeStorage: SubmitNodeStorage;
    // private begin(context: FeatureFrameContext, submitNodeStorage: SubmitNodeStorage): FeatureRenderDispatcher$PreparedFrame;
    close(): void;
    executeAlwaysOnTop(): void;
    executeOutline(): void;
    // private executePhase(phase: FeatureRenderPhase<any>, context: FeatureFrameContext): void;
    executeSolid(): void;
    executeTranslucent(): void;
    executeTranslucentAfterTerrain(): void;
    hasAnyAlwaysOnTop(): boolean;
    hasAnyOutline(): boolean;
}