import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCSdpType extends Enum<RTCSdpType> {
    static ANSWER: RTCSdpType;
    static OFFER: RTCSdpType;
    static PR_ANSWER: RTCSdpType;
    static ROLLBACK: RTCSdpType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RTCSdpType;
    static values(): RTCSdpType[];
    private constructor()
    name(): "OFFER" | "PR_ANSWER" | "ANSWER" | "ROLLBACK";
}