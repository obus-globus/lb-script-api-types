import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ClassifierDescriptorWithTypeParameters } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptorWithTypeParameters.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
export class DescriptorRenderer$Companion extends Object {
    private constructor()
    getClassifierKindPrefix(arg0: ClassifierDescriptorWithTypeParameters): string;
    withOptions(arg0: Function1<DescriptorRendererOptions, void>): DescriptorRenderer;
}