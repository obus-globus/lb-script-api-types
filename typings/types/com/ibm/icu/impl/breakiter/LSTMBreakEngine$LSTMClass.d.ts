import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LSTMBreakEngine$LSTMClass extends Enum<LSTMBreakEngine$LSTMClass> {
    static BEGIN: LSTMBreakEngine$LSTMClass;
    static END: LSTMBreakEngine$LSTMClass;
    static INSIDE: LSTMBreakEngine$LSTMClass;
    static SINGLE: LSTMBreakEngine$LSTMClass;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LSTMBreakEngine$LSTMClass;
    static values(): LSTMBreakEngine$LSTMClass[];
    private constructor()
    name(): "BEGIN" | "INSIDE" | "END" | "SINGLE";
}