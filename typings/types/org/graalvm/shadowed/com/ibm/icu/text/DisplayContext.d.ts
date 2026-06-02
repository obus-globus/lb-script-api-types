import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { DisplayContext$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DisplayContext$Type.d.ts'
export class DisplayContext extends Enum<DisplayContext> {
    static CAPITALIZATION_FOR_BEGINNING_OF_SENTENCE: DisplayContext;
    static CAPITALIZATION_FOR_MIDDLE_OF_SENTENCE: DisplayContext;
    static CAPITALIZATION_FOR_STANDALONE: DisplayContext;
    static CAPITALIZATION_FOR_UI_LIST_OR_MENU: DisplayContext;
    static CAPITALIZATION_NONE: DisplayContext;
    static DIALECT_NAMES: DisplayContext;
    static LENGTH_FULL: DisplayContext;
    static LENGTH_SHORT: DisplayContext;
    static NO_SUBSTITUTE: DisplayContext;
    static STANDARD_NAMES: DisplayContext;
    static SUBSTITUTE: DisplayContext;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DisplayContext;
    static values(): (Object | null)[];
    private constructor(type: DisplayContext$Type, value: number)
    // private type: DisplayContext$Type;
    // private value: number;
    type(): DisplayContext$Type;
    value(): number;
    name(): "STANDARD_NAMES" | "DIALECT_NAMES" | "CAPITALIZATION_NONE" | "CAPITALIZATION_FOR_MIDDLE_OF_SENTENCE" | "CAPITALIZATION_FOR_BEGINNING_OF_SENTENCE" | "CAPITALIZATION_FOR_UI_LIST_OR_MENU" | "CAPITALIZATION_FOR_STANDALONE" | "LENGTH_FULL" | "LENGTH_SHORT" | "SUBSTITUTE" | "NO_SUBSTITUTE";
}