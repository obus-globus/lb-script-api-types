import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DisplayContext$Type extends Enum<DisplayContext$Type> {
    static CAPITALIZATION: DisplayContext$Type;
    static DIALECT_HANDLING: DisplayContext$Type;
    static DISPLAY_LENGTH: DisplayContext$Type;
    static SUBSTITUTE_HANDLING: DisplayContext$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DisplayContext$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "DIALECT_HANDLING" | "CAPITALIZATION" | "DISPLAY_LENGTH" | "SUBSTITUTE_HANDLING";
}