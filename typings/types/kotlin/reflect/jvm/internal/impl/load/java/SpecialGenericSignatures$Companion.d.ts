import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpecialGenericSignatures$Companion$NameAndSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/SpecialGenericSignatures$Companion$NameAndSignature.d.ts'
import type { SpecialGenericSignatures$SpecialSignatureInfo } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/SpecialGenericSignatures$SpecialSignatureInfo.d.ts'
import type { SpecialGenericSignatures$TypeSafeBarrierDescription } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/SpecialGenericSignatures$TypeSafeBarrierDescription.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class SpecialGenericSignatures$Companion extends Object {
    private constructor()
    getBuiltinFunctionNamesByJvmName(arg0: Name): Name;
    getERASED_COLLECTION_PARAMETER_SIGNATURES(): string[];
    getERASED_VALUE_PARAMETERS_SHORT_NAMES(): Name[];
    getERASED_VALUE_PARAMETERS_SIGNATURES(): string[];
    getJVM_SHORT_NAME_TO_BUILTIN_SHORT_NAMES_MAP(): Map<Name, Name>;
    getORIGINAL_SHORT_NAMES(): Name[];
    getREMOVE_AT_NAME_AND_SIGNATURE(): SpecialGenericSignatures$Companion$NameAndSignature;
    getSIGNATURE_TO_DEFAULT_VALUES_MAP(): { [key: string]: SpecialGenericSignatures$TypeSafeBarrierDescription };
    getSIGNATURE_TO_JVM_REPRESENTATION_NAME(): { [key: string]: Name };
    getSameAsRenamedInJvmBuiltin(arg0: Name): boolean;
    getSpecialSignatureInfo(arg0: string): SpecialGenericSignatures$SpecialSignatureInfo;
    // private method(arg0: string, arg1: string, arg2: string, arg3: string): SpecialGenericSignatures$Companion$NameAndSignature;
    // private method(arg0: string, arg1: Name, arg2: string, arg3: string): SpecialGenericSignatures$Companion$NameAndSignature;
}