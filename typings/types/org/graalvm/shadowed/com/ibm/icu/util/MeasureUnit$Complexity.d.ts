import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MeasureUnit$Complexity extends Enum<MeasureUnit$Complexity> {
    static COMPOUND: MeasureUnit$Complexity;
    static MIXED: MeasureUnit$Complexity;
    static SINGLE: MeasureUnit$Complexity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MeasureUnit$Complexity;
    static values(): MeasureUnit$Complexity[];
    private constructor()
    name(): "SINGLE" | "COMPOUND" | "MIXED";
}