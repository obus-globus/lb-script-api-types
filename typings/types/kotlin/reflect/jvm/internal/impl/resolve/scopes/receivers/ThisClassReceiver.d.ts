import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ReceiverValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
export interface ThisClassReceiver extends Object, ReceiverValue{
    getClassDescriptor(): ClassDescriptor;
}