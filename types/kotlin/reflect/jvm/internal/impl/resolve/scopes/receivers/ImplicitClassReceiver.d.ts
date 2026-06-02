import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ImplicitReceiver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ImplicitReceiver.d.ts'
import type { ThisClassReceiver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ThisClassReceiver.d.ts'
import type { SimpleType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class ImplicitClassReceiver extends Object implements ImplicitReceiver, ThisClassReceiver {
    constructor(arg0: ClassDescriptor, arg1: ImplicitClassReceiver)
    readonly classDescriptor: ClassDescriptor;
    // private declarationDescriptor: ClassDescriptor;
    // private original: ImplicitClassReceiver;
    equals(arg0: Object | null): boolean;
    getClassDescriptor(): ClassDescriptor;
    getType(): SimpleType;
    hashCode(): number;
    toString(): string;
}