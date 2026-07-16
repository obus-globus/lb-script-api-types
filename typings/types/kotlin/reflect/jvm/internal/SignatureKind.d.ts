import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SignatureKind extends Enum<SignatureKind> implements Serializable {
    static FIELD_IN_JAVA_CLASS: SignatureKind;
    static FUNCTION: SignatureKind;
    static PROPERTY: SignatureKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SignatureKind;
    static values(): SignatureKind[];
    private constructor()
    name(): "FUNCTION" | "PROPERTY" | "FIELD_IN_JAVA_CLASS";
}