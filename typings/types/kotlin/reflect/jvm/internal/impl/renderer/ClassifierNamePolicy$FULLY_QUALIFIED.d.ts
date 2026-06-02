import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { ClassifierNamePolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/ClassifierNamePolicy.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
export class ClassifierNamePolicy$FULLY_QUALIFIED extends Object implements ClassifierNamePolicy {
    static INSTANCE: ClassifierNamePolicy$FULLY_QUALIFIED;
    private constructor()
    renderClassifier(arg0: ClassifierDescriptor, arg1: DescriptorRenderer): string;
}