import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorNonRoot } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorNonRoot.d.ts'
import type { DeclarationDescriptorWithSource } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorWithSource.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { DeclarationDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export abstract class DeclarationDescriptorNonRootImpl extends DeclarationDescriptorImpl implements DeclarationDescriptorNonRoot {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: DeclarationDescriptor, arg1: AnnotationDescriptor[], arg2: Name, arg3: SourceElement)
    readonly containingDeclaration: DeclarationDescriptor;
    readonly source: SourceElement;
    getContainingDeclaration(): DeclarationDescriptor;
    getOriginal(): DeclarationDescriptorWithSource;
    getSource(): SourceElement;
}