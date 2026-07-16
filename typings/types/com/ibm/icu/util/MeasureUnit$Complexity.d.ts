import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MeasureUnit$Complexity extends Enum<MeasureUnit$Complexity> {
    static COMPOUND: MeasureUnit$Complexity;
    static MIXED: MeasureUnit$Complexity;
    static SINGLE: MeasureUnit$Complexity;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MeasureUnit$Complexity;
    static values(): MeasureUnit$Complexity[];
    private constructor()
    name(): "SINGLE" | "COMPOUND" | "MIXED";
}