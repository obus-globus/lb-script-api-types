import type { DayPeriodRules$CutoffType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/DayPeriodRules$CutoffType.d.ts'
import type { DayPeriodRules$DayPeriod } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/DayPeriodRules$DayPeriod.d.ts'
import type { DayPeriodRules$DayPeriodRulesData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/DayPeriodRules$DayPeriodRulesData.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Table } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Table.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class DayPeriodRules$DayPeriodRulesDataSink extends UResource$Sink {
    private constructor(data: DayPeriodRules$DayPeriodRulesData)
    // private cutoffType: DayPeriodRules$CutoffType;
    // private cutoffs: number[];
    // private data: DayPeriodRules$DayPeriodRulesData;
    // private period: DayPeriodRules$DayPeriod;
    // private ruleSetNum: number;
    // private addCutoff(type: DayPeriodRules$CutoffType, hourStr: string): void;
    // private processRules(rules: UResource$Table, key: UResource$Key, value: UResource$Value): void;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
    // private setDayPeriodForHoursFromCutoffs(): void;
}