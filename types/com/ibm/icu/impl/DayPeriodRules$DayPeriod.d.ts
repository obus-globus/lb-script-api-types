import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DayPeriodRules$DayPeriod extends Enum<DayPeriodRules$DayPeriod> {
    static AFTERNOON1: DayPeriodRules$DayPeriod;
    static AFTERNOON2: DayPeriodRules$DayPeriod;
    static AM: DayPeriodRules$DayPeriod;
    static EVENING1: DayPeriodRules$DayPeriod;
    static EVENING2: DayPeriodRules$DayPeriod;
    static MIDNIGHT: DayPeriodRules$DayPeriod;
    static MORNING1: DayPeriodRules$DayPeriod;
    static MORNING2: DayPeriodRules$DayPeriod;
    static NIGHT1: DayPeriodRules$DayPeriod;
    static NIGHT2: DayPeriodRules$DayPeriod;
    static NOON: DayPeriodRules$DayPeriod;
    static PM: DayPeriodRules$DayPeriod;
    static VALUES: (Object | null)[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DayPeriodRules$DayPeriod;
    static values(): (Object | null)[];
    private constructor()
    name(): "MIDNIGHT" | "NOON" | "MORNING1" | "AFTERNOON1" | "EVENING1" | "NIGHT1" | "MORNING2" | "AFTERNOON2" | "EVENING2" | "NIGHT2" | "AM" | "PM";
}