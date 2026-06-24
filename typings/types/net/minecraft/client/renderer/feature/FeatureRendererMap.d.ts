import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderer.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class FeatureRendererMap extends Object implements AutoCloseable {
    constructor()
    // private renderers: FeatureRenderer<any>[];
    close(): void;
    get<Submit extends SubmitNode>(type: FeatureRendererType<Submit>): FeatureRenderer<Submit>;
    getOrThrow<Submit extends SubmitNode>(type: FeatureRendererType<Submit>): FeatureRenderer<Submit>;
    put<Submit extends SubmitNode>(type: FeatureRendererType<Submit>, renderer: FeatureRenderer<Submit>): void;
    values(): FeatureRenderer<any>[];
}