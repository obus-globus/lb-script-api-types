import type { DayPeriodRules$DayPeriodRulesData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/DayPeriodRules$DayPeriodRulesData.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export class DayPeriodRules$DayPeriodRulesCountSink extends UResource$Sink {
    private constructor(data: DayPeriodRules$DayPeriodRulesData)
    // private data: DayPeriodRules$DayPeriodRulesData;
    put(key: UResource$Key, value: UResource$Value, noFallback: boolean): void;
}