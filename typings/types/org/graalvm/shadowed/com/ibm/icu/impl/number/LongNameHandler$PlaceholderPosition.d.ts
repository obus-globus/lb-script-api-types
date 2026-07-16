import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LongNameHandler$PlaceholderPosition extends Enum<LongNameHandler$PlaceholderPosition> {
    static BEGINNING: LongNameHandler$PlaceholderPosition;
    static END: LongNameHandler$PlaceholderPosition;
    static MIDDLE: LongNameHandler$PlaceholderPosition;
    static NONE: LongNameHandler$PlaceholderPosition;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LongNameHandler$PlaceholderPosition;
    static values(): LongNameHandler$PlaceholderPosition[];
    private constructor()
    name(): "NONE" | "BEGINNING" | "MIDDLE" | "END";
}