import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
export interface ClassifierNamePolicy extends Object{
    renderClassifier(arg0: ClassifierDescriptor, arg1: DescriptorRenderer): string;
}