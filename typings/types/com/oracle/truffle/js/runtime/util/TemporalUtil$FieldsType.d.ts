import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$FieldsType extends Enum<TemporalUtil$FieldsType> {
    static DATE: TemporalUtil$FieldsType;
    static MONTH_DAY: TemporalUtil$FieldsType;
    static YEAR_MONTH: TemporalUtil$FieldsType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalUtil$FieldsType;
    static values(): TemporalUtil$FieldsType[];
    private constructor()
    name(): "DATE" | "YEAR_MONTH" | "MONTH_DAY";
}