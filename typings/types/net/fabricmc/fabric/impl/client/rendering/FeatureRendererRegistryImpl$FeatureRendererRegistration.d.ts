import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureRenderer } from '../../../../../../net/minecraft/client/renderer/feature/FeatureRenderer.d.ts'
import type { FeatureRendererMap } from '../../../../../../net/minecraft/client/renderer/feature/FeatureRendererMap.d.ts'
import type { FeatureRendererType } from '../../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { SubmitNode } from '../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class FeatureRendererRegistryImpl$FeatureRendererRegistration<T extends SubmitNode> extends Record {
    private constructor(type: FeatureRendererType<T>, renderer: () => FeatureRenderer<T>)
    // private renderer: () => FeatureRenderer<T>;
    // private type: FeatureRendererType<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    // private register(arg0: FeatureRendererMap): void;
    renderer(): () => FeatureRenderer<T>;
    toString(): string;
    type(): FeatureRendererType<T>;
}