import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export abstract class AbstractReceiverValue extends Object implements ReceiverValue {
    constructor(arg0: KotlinType, arg1: ReceiverValue)
    // private original: ReceiverValue;
    // private receiverType: KotlinType;
    getType(): KotlinType;
}