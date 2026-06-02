import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ClassifierNamePolicy } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/ClassifierNamePolicy.d.ts'
import type { DescriptorRenderer } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/DescriptorRenderer.d.ts'
export class ClassifierNamePolicy$SOURCE_CODE_QUALIFIED extends Object implements ClassifierNamePolicy {
    static INSTANCE: ClassifierNamePolicy$SOURCE_CODE_QUALIFIED;
    private constructor()
    // private qualifiedNameForSourceCode(arg0: ClassifierDescriptor): string;
    // private qualifierName(arg0: DeclarationDescriptor): string;
    renderClassifier(arg0: ClassifierDescriptor, arg1: DescriptorRenderer): string;
}