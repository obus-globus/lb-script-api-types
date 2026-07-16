import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ConstrainedFieldPosition$ConstraintType extends Enum<ConstrainedFieldPosition$ConstraintType> {
    static CLASS: ConstrainedFieldPosition$ConstraintType;
    static FIELD: ConstrainedFieldPosition$ConstraintType;
    static NONE: ConstrainedFieldPosition$ConstraintType;
    static VALUE: ConstrainedFieldPosition$ConstraintType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ConstrainedFieldPosition$ConstraintType;
    static values(): ConstrainedFieldPosition$ConstraintType[];
    private constructor()
    name(): "NONE" | "CLASS" | "FIELD" | "VALUE";
}