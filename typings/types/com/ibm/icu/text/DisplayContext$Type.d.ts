import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DisplayContext$Type extends Enum<DisplayContext$Type> {
    static CAPITALIZATION: DisplayContext$Type;
    static DIALECT_HANDLING: DisplayContext$Type;
    static DISPLAY_LENGTH: DisplayContext$Type;
    static SUBSTITUTE_HANDLING: DisplayContext$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DisplayContext$Type;
    static values(): DisplayContext$Type[];
    private constructor()
    name(): "DIALECT_HANDLING" | "CAPITALIZATION" | "DISPLAY_LENGTH" | "SUBSTITUTE_HANDLING";
}