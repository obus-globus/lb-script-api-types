import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface SuperCallReceiverValue extends Object, ReceiverValue{
    getThisType(): KotlinType;
    getType(): KotlinType;
}