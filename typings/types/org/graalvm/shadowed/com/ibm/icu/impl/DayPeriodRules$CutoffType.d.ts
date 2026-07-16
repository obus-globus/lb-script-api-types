import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DayPeriodRules$CutoffType extends Enum<DayPeriodRules$CutoffType> {
    static AFTER: DayPeriodRules$CutoffType;
    static AT: DayPeriodRules$CutoffType;
    static BEFORE: DayPeriodRules$CutoffType;
    static FROM: DayPeriodRules$CutoffType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DayPeriodRules$CutoffType;
    static values(): DayPeriodRules$CutoffType[];
    private constructor()
    name(): "BEFORE" | "AFTER" | "FROM" | "AT";
}