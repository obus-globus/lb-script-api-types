import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SignatureKind extends Enum<SignatureKind> implements Serializable {
    static FIELD_IN_JAVA_CLASS: SignatureKind;
    static FUNCTION: SignatureKind;
    static PROPERTY: SignatureKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): SignatureKind;
    static values(): SignatureKind[];
    private constructor()
    name(): "FUNCTION" | "PROPERTY" | "FIELD_IN_JAVA_CLASS";
}