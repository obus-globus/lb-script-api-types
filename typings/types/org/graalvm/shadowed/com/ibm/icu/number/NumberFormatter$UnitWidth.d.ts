import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class NumberFormatter$UnitWidth extends Enum<NumberFormatter$UnitWidth> {
    static FORMAL: NumberFormatter$UnitWidth;
    static FULL_NAME: NumberFormatter$UnitWidth;
    static HIDDEN: NumberFormatter$UnitWidth;
    static ISO_CODE: NumberFormatter$UnitWidth;
    static NARROW: NumberFormatter$UnitWidth;
    static SHORT: NumberFormatter$UnitWidth;
    static VARIANT: NumberFormatter$UnitWidth;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NumberFormatter$UnitWidth;
    static values(): NumberFormatter$UnitWidth[];
    private constructor()
    name(): "NARROW" | "SHORT" | "FULL_NAME" | "ISO_CODE" | "FORMAL" | "VARIANT" | "HIDDEN";
}