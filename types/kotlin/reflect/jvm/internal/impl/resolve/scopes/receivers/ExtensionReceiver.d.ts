import type { CallableDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { AbstractReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/AbstractReceiverValue.d.ts'
import type { ImplicitReceiver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ImplicitReceiver.d.ts'
import type { ReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class ExtensionReceiver extends AbstractReceiverValue implements ImplicitReceiver {
    constructor(arg0: CallableDescriptor, arg1: KotlinType, arg2: ReceiverValue)
    // private descriptor: CallableDescriptor;
    toString(): string;
}