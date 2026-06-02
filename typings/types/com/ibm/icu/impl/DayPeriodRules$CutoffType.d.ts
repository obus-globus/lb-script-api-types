import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DayPeriodRules$CutoffType extends Enum<DayPeriodRules$CutoffType> {
    static AFTER: DayPeriodRules$CutoffType;
    static AT: DayPeriodRules$CutoffType;
    static BEFORE: DayPeriodRules$CutoffType;
    static FROM: DayPeriodRules$CutoffType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DayPeriodRules$CutoffType;
    static values(): (Object | null)[];
    private constructor()
    name(): "BEFORE" | "AFTER" | "FROM" | "AT";
}