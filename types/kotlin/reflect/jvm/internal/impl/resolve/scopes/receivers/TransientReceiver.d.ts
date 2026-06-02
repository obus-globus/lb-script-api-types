import type { AbstractReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/AbstractReceiverValue.d.ts'
import type { ReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class TransientReceiver extends AbstractReceiverValue {
    constructor(arg0: KotlinType)
    private constructor(arg0: KotlinType, arg1: ReceiverValue)
    toString(): string;
}