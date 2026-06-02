import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class LongNameHandler$PlaceholderPosition extends Enum<LongNameHandler$PlaceholderPosition> {
    static BEGINNING: LongNameHandler$PlaceholderPosition;
    static END: LongNameHandler$PlaceholderPosition;
    static MIDDLE: LongNameHandler$PlaceholderPosition;
    static NONE: LongNameHandler$PlaceholderPosition;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LongNameHandler$PlaceholderPosition;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "BEGINNING" | "MIDDLE" | "END";
}