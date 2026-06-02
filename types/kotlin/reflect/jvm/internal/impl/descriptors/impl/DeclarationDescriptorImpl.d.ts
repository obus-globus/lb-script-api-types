import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AnnotatedImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotatedImpl.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export abstract class DeclarationDescriptorImpl extends AnnotatedImpl implements DeclarationDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: AnnotationDescriptor[], arg1: Name)
    readonly name: Name;
    getName(): Name;
    getOriginal(): DeclarationDescriptor;
    toString(): string;
}