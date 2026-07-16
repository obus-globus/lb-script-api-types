import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NFAExport$StateStyle extends Enum<NFAExport$StateStyle> {
    static ANCHORED_FINAL: NFAExport$StateStyle;
    static ANCHORED_INITIAL: NFAExport$StateStyle;
    static REGULAR: NFAExport$StateStyle;
    static UN_ANCHORED_FINAL: NFAExport$StateStyle;
    static UN_ANCHORED_INITIAL: NFAExport$StateStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NFAExport$StateStyle;
    static values(): NFAExport$StateStyle[];
    private constructor()
    name(): "ANCHORED_INITIAL" | "UN_ANCHORED_INITIAL" | "ANCHORED_FINAL" | "UN_ANCHORED_FINAL" | "REGULAR";
}