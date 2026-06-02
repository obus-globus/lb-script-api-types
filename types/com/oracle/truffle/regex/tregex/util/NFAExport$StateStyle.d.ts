import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NFAExport$StateStyle extends Enum<NFAExport$StateStyle> {
    static ANCHORED_FINAL: NFAExport$StateStyle;
    static ANCHORED_INITIAL: NFAExport$StateStyle;
    static REGULAR: NFAExport$StateStyle;
    static UN_ANCHORED_FINAL: NFAExport$StateStyle;
    static UN_ANCHORED_INITIAL: NFAExport$StateStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NFAExport$StateStyle;
    static values(): (Object | null)[];
    private constructor()
    name(): "ANCHORED_INITIAL" | "UN_ANCHORED_INITIAL" | "ANCHORED_FINAL" | "UN_ANCHORED_FINAL" | "REGULAR";
}