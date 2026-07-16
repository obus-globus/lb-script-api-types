import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class SimpleDateFormat$ContextValue extends Enum<SimpleDateFormat$ContextValue> {
    static CAPITALIZATION_FOR_BEGINNING_OF_SENTENCE: SimpleDateFormat$ContextValue;
    static CAPITALIZATION_FOR_MIDDLE_OF_SENTENCE: SimpleDateFormat$ContextValue;
    static CAPITALIZATION_FOR_STANDALONE: SimpleDateFormat$ContextValue;
    static CAPITALIZATION_FOR_UI_LIST_OR_MENU: SimpleDateFormat$ContextValue;
    static UNKNOWN: SimpleDateFormat$ContextValue;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SimpleDateFormat$ContextValue;
    static values(): SimpleDateFormat$ContextValue[];
    private constructor()
    name(): "UNKNOWN" | "CAPITALIZATION_FOR_MIDDLE_OF_SENTENCE" | "CAPITALIZATION_FOR_BEGINNING_OF_SENTENCE" | "CAPITALIZATION_FOR_UI_LIST_OR_MENU" | "CAPITALIZATION_FOR_STANDALONE";
}