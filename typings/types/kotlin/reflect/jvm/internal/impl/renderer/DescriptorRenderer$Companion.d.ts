import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { ClassifierDescriptorWithTypeParameters } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptorWithTypeParameters.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
import type { DescriptorRendererOptions } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRendererOptions.d.ts'
export class DescriptorRenderer$Companion extends Object {
    constructor(arg0: DefaultConstructorMarker)
    getClassifierKindPrefix(arg0: ClassifierDescriptorWithTypeParameters): string;
    withOptions(arg0: (param0: DescriptorRendererOptions) => void): DescriptorRenderer;
}