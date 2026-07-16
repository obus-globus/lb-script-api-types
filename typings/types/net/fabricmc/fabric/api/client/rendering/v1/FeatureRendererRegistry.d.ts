import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureRenderer } from '../../../../../../../net/minecraft/client/renderer/feature/FeatureRenderer.d.ts'
import type { FeatureRendererType } from '../../../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class FeatureRendererRegistry extends Object {
    static register<T extends SubmitNode>(paramarg0: FeatureRendererType<T>, paramarg1: () => FeatureRenderer<T>): void;
    private constructor()
}