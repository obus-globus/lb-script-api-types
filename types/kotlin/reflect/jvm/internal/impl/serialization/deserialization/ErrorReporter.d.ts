import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
export interface ErrorReporter extends Object{
    reportCannotInferVisibility(arg0: CallableMemberDescriptor): void;
    reportIncompleteHierarchy(arg0: ClassDescriptor, arg1: string[]): void;
}