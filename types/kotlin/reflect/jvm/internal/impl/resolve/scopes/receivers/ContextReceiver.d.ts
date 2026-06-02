import type { CallableDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { AbstractReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/AbstractReceiverValue.d.ts'
import type { ImplicitContextReceiver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ImplicitContextReceiver.d.ts'
import type { ReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class ContextReceiver extends AbstractReceiverValue implements ImplicitContextReceiver {
    constructor(arg0: CallableDescriptor, arg1: KotlinType, arg2: Name, arg3: ReceiverValue)
    readonly customLabelName: Name;
    readonly declarationDescriptor: CallableDescriptor;
    getCustomLabelName(): Name;
    getDeclarationDescriptor(): CallableDescriptor;
    toString(): string;
}