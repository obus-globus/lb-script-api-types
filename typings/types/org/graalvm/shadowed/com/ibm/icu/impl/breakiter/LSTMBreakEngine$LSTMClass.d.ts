import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LSTMBreakEngine$LSTMClass extends Enum<LSTMBreakEngine$LSTMClass> {
    static BEGIN: LSTMBreakEngine$LSTMClass;
    static END: LSTMBreakEngine$LSTMClass;
    static INSIDE: LSTMBreakEngine$LSTMClass;
    static SINGLE: LSTMBreakEngine$LSTMClass;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LSTMBreakEngine$LSTMClass;
    static values(): (Object | null)[];
    private constructor()
    name(): "BEGIN" | "INSIDE" | "END" | "SINGLE";
}