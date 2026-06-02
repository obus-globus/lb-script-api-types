import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { SpecialGenericSignatures } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/SpecialGenericSignatures.d.ts'
import type { SpecialGenericSignatures$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/SpecialGenericSignatures$Companion.d.ts'
import type { SpecialGenericSignatures$SpecialSignatureInfo } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/SpecialGenericSignatures$SpecialSignatureInfo.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class BuiltinMethodsWithSpecialGenericSignature extends SpecialGenericSignatures {
    static Companion: SpecialGenericSignatures$Companion;
    static INSTANCE: BuiltinMethodsWithSpecialGenericSignature;
    static getOverriddenBuiltinFunctionWithErasedValueParametersInJava(paramarg0: FunctionDescriptor): FunctionDescriptor;
    static getSpecialSignatureInfo(paramarg0: CallableMemberDescriptor): SpecialGenericSignatures$SpecialSignatureInfo;
    private constructor()
    // private getHasErasedValueParametersInJava(arg0: CallableMemberDescriptor): boolean;
    getSameAsBuiltinMethodWithErasedValueParameters(arg0: Name): boolean;
}