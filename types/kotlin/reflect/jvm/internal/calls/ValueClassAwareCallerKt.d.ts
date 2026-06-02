import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Caller } from '../../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { CallableMemberDescriptor } from '../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SimpleType } from '../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class ValueClassAwareCallerKt extends Object {
    static coerceToExpectedReceiverType(paramarg0: Object, paramarg1: CallableMemberDescriptor): Object;
    static createValueClassAwareCallerIfNeeded(paramarg0: Caller<Object>, paramarg1: CallableMemberDescriptor, paramarg2: boolean): Caller<Object>;
    static getInlineClassUnboxMethod(paramarg0: Class<Object>, paramarg1: CallableMemberDescriptor): Method;
    static getMfvcUnboxMethods(paramarg0: SimpleType): Method[];
    static toInlineClass(paramarg0: DeclarationDescriptor): Class<Object>;
    static toJvmDescriptor(paramarg0: ClassifierDescriptor): string;
}