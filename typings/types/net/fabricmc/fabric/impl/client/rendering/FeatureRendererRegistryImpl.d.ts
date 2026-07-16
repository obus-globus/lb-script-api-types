import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureRenderer } from '../../../../../../net/minecraft/client/renderer/feature/FeatureRenderer.d.ts'
import type { FeatureRendererMap } from '../../../../../../net/minecraft/client/renderer/feature/FeatureRendererMap.d.ts'
import type { FeatureRendererType } from '../../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class FeatureRendererRegistryImpl extends Object {
    static register<T extends SubmitNode>(paramarg0: FeatureRendererType<T>, paramarg1: () => FeatureRenderer<T>): void;
    static registerRenderers(paramarg0: FeatureRendererMap): void;
    constructor()
}