import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SimpleDateFormat$ContextValue extends Enum<SimpleDateFormat$ContextValue> {
    static CAPITALIZATION_FOR_BEGINNING_OF_SENTENCE: SimpleDateFormat$ContextValue;
    static CAPITALIZATION_FOR_MIDDLE_OF_SENTENCE: SimpleDateFormat$ContextValue;
    static CAPITALIZATION_FOR_STANDALONE: SimpleDateFormat$ContextValue;
    static CAPITALIZATION_FOR_UI_LIST_OR_MENU: SimpleDateFormat$ContextValue;
    static UNKNOWN: SimpleDateFormat$ContextValue;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SimpleDateFormat$ContextValue;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNKNOWN" | "CAPITALIZATION_FOR_MIDDLE_OF_SENTENCE" | "CAPITALIZATION_FOR_BEGINNING_OF_SENTENCE" | "CAPITALIZATION_FOR_UI_LIST_OR_MENU" | "CAPITALIZATION_FOR_STANDALONE";
}