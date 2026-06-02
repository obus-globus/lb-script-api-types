import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { SpecialGenericSignatures } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/SpecialGenericSignatures.d.ts'
import type { SpecialGenericSignatures$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/SpecialGenericSignatures$Companion.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class BuiltinMethodsWithDifferentJvmName extends SpecialGenericSignatures {
    static Companion: SpecialGenericSignatures$Companion;
    static INSTANCE: BuiltinMethodsWithDifferentJvmName;
    private constructor()
    getJvmName(arg0: SimpleFunctionDescriptor): Name;
    isBuiltinFunctionWithDifferentNameInJvm(arg0: SimpleFunctionDescriptor): boolean;
    isRemoveAtByIndex(arg0: SimpleFunctionDescriptor): boolean;
}