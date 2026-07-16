import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class InvertableSetOptionState$Limitation extends Enum<InvertableSetOptionState$Limitation> {
    static MULTIPLE: InvertableSetOptionState$Limitation;
    static NONE: InvertableSetOptionState$Limitation;
    static SINGLE: InvertableSetOptionState$Limitation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): InvertableSetOptionState$Limitation;
    static values(): InvertableSetOptionState$Limitation[];
    private constructor()
    name(): "NONE" | "SINGLE" | "MULTIPLE";
}