import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AbstractReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractReceiverParameterDescriptor.d.ts'
import type { ImplicitClassReceiver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ImplicitClassReceiver.d.ts'
import type { ReceiverValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
export class LazyClassReceiverParameterDescriptor extends AbstractReceiverParameterDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: ClassDescriptor)
    // private descriptor: ClassDescriptor;
    // private receiverValue: ImplicitClassReceiver;
    getContainingDeclaration(): DeclarationDescriptor;
    getValue(): ReceiverValue;
    toString(): string;
}