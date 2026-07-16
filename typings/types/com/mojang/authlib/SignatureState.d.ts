import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SignatureState extends Enum<SignatureState> {
    static INVALID: SignatureState;
    static SIGNED: SignatureState;
    static UNSIGNED: SignatureState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SignatureState;
    static values(): SignatureState[];
    private constructor()
    name(): "UNSIGNED" | "INVALID" | "SIGNED";
}