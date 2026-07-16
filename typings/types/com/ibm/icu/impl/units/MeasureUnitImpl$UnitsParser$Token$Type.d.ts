import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MeasureUnitImpl$UnitsParser$Token$Type extends Enum<MeasureUnitImpl$UnitsParser$Token$Type> {
    static TYPE_ALIAS: MeasureUnitImpl$UnitsParser$Token$Type;
    static TYPE_COMPOUND_PART: MeasureUnitImpl$UnitsParser$Token$Type;
    static TYPE_INITIAL_COMPOUND_PART: MeasureUnitImpl$UnitsParser$Token$Type;
    static TYPE_POWER_PART: MeasureUnitImpl$UnitsParser$Token$Type;
    static TYPE_PREFIX: MeasureUnitImpl$UnitsParser$Token$Type;
    static TYPE_SIMPLE_UNIT: MeasureUnitImpl$UnitsParser$Token$Type;
    static TYPE_UNDEFINED: MeasureUnitImpl$UnitsParser$Token$Type;
    static TYPE_UNIT_CONSTANT: MeasureUnitImpl$UnitsParser$Token$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MeasureUnitImpl$UnitsParser$Token$Type;
    static values(): MeasureUnitImpl$UnitsParser$Token$Type[];
    private constructor()
    name(): "TYPE_UNDEFINED" | "TYPE_PREFIX" | "TYPE_COMPOUND_PART" | "TYPE_INITIAL_COMPOUND_PART" | "TYPE_POWER_PART" | "TYPE_SIMPLE_UNIT" | "TYPE_UNIT_CONSTANT" | "TYPE_ALIAS";
}