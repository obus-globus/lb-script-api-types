import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SignatureState extends Enum<SignatureState> {
    static INVALID: SignatureState;
    static SIGNED: SignatureState;
    static UNSIGNED: SignatureState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SignatureState;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNSIGNED" | "INVALID" | "SIGNED";
}