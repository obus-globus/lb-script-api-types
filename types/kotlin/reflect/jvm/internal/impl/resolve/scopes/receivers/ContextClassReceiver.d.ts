import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { AbstractReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/AbstractReceiverValue.d.ts'
import type { ImplicitContextReceiver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ImplicitContextReceiver.d.ts'
import type { ReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class ContextClassReceiver extends AbstractReceiverValue implements ImplicitContextReceiver {
    constructor(arg0: ClassDescriptor, arg1: KotlinType, arg2: Name, arg3: ReceiverValue)
    // private classDescriptor: ClassDescriptor;
    readonly customLabelName: Name;
    getCustomLabelName(): Name;
    toString(): string;
}