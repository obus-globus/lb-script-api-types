import type { DayPeriodRules$DayPeriodRulesData } from '../../../../com/ibm/icu/impl/DayPeriodRules$DayPeriodRulesData.d.ts'
import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
export class DayPeriodRules$DayPeriodRulesCountSink extends UResource$Sink {
    private constructor(arg0: DayPeriodRules$DayPeriodRulesData)
    // private data: DayPeriodRules$DayPeriodRulesData;
    put(arg0: UResource$Key, arg1: UResource$Value, arg2: boolean): void;
}