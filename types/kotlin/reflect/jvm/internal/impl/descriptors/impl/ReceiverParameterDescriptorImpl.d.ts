import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AbstractReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractReceiverParameterDescriptor.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ReceiverValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
export class ReceiverParameterDescriptorImpl extends AbstractReceiverParameterDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: DeclarationDescriptor, arg1: ReceiverValue, arg2: AnnotationDescriptor[])
    constructor(arg0: DeclarationDescriptor, arg1: ReceiverValue, arg2: AnnotationDescriptor[], arg3: Name)
    readonly containingDeclaration: DeclarationDescriptor;
    readonly value: ReceiverValue;
    getContainingDeclaration(): DeclarationDescriptor;
    getValue(): ReceiverValue;
}