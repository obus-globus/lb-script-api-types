import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class SpecialGenericSignatures$SpecialSignatureInfo extends Enum<SpecialGenericSignatures$SpecialSignatureInfo> {
    static OBJECT_PARAMETER_GENERIC: SpecialGenericSignatures$SpecialSignatureInfo;
    static OBJECT_PARAMETER_NON_GENERIC: SpecialGenericSignatures$SpecialSignatureInfo;
    static ONE_COLLECTION_PARAMETER: SpecialGenericSignatures$SpecialSignatureInfo;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SpecialGenericSignatures$SpecialSignatureInfo;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: boolean)
    // private isObjectReplacedWithTypeParameter: boolean;
    // private valueParametersSignature: string;
    name(): "ONE_COLLECTION_PARAMETER" | "OBJECT_PARAMETER_NON_GENERIC" | "OBJECT_PARAMETER_GENERIC";
}