import type { IntConsumer } from '../../../../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IslamicCalendar$Algorithm } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/IslamicCalendar$Algorithm.d.ts'
import type { IslamicCalendar$CalculationType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/IslamicCalendar$CalculationType.d.ts'
export class IslamicCalendar$UmalquraAlgorithm extends Object implements IslamicCalendar$Algorithm {
    private constructor()
    compute(julianDays: number, current: number, yearConsumer: (param0: number) => void, monthConsumer: (param0: number) => void, dayOfMonthConsumer: (param0: number) => void, dayOfYearConsumer: (param0: number) => void): void;
    epoch(): number;
    getType(): IslamicCalendar$CalculationType;
    isCivil(): boolean;
    monthLength(year: number, month: number): number;
    monthStart(year: number, month: number): number;
    yearLength(year: number): number;
    yearStart(year: number): number;
}