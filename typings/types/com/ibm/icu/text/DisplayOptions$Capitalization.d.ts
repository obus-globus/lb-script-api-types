import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DisplayOptions$Capitalization extends Enum<DisplayOptions$Capitalization> {
    static BEGINNING_OF_SENTENCE: DisplayOptions$Capitalization;
    static MIDDLE_OF_SENTENCE: DisplayOptions$Capitalization;
    static STANDALONE: DisplayOptions$Capitalization;
    static UI_LIST_OR_MENU: DisplayOptions$Capitalization;
    static UNDEFINED: DisplayOptions$Capitalization;
    static VALUES: DisplayOptions$Capitalization[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DisplayOptions$Capitalization;
    static values(): DisplayOptions$Capitalization[];
    private constructor()
    name(): "UNDEFINED" | "BEGINNING_OF_SENTENCE" | "MIDDLE_OF_SENTENCE" | "STANDALONE" | "UI_LIST_OR_MENU";
}