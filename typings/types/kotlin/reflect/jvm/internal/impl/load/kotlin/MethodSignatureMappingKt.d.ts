import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { JvmType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/JvmType.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class MethodSignatureMappingKt extends Object {
    static computeJvmDescriptor(paramarg0: FunctionDescriptor, paramarg1: boolean, paramarg2: boolean): string;
    static computeJvmSignature(paramarg0: CallableDescriptor): string;
    static forceSingleValueParameterBoxing(paramarg0: CallableDescriptor): boolean;
    static getInternalName(paramarg0: ClassDescriptor): string;
    static mapToJvmType(paramarg0: KotlinType): JvmType;
}