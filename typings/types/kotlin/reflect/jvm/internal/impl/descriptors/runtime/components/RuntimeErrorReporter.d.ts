import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ErrorReporter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ErrorReporter.d.ts'
export class RuntimeErrorReporter extends Object implements ErrorReporter {
    static DO_NOTHING: ErrorReporter;
    static INSTANCE: RuntimeErrorReporter;
    private constructor()
    reportCannotInferVisibility(arg0: CallableMemberDescriptor): void;
    reportIncompleteHierarchy(arg0: ClassDescriptor, arg1: string[]): void;
}