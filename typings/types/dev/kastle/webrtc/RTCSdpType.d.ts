import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class RTCSdpType extends Enum<RTCSdpType> {
    static ANSWER: RTCSdpType;
    static OFFER: RTCSdpType;
    static PR_ANSWER: RTCSdpType;
    static ROLLBACK: RTCSdpType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RTCSdpType;
    static values(): (Object | null)[];
    private constructor()
    name(): "OFFER" | "PR_ANSWER" | "ANSWER" | "ROLLBACK";
}