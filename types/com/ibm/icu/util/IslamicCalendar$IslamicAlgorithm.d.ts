import type { IslamicCalendar$Algorithm } from '../../../../com/ibm/icu/util/IslamicCalendar$Algorithm.d.ts'
import type { IslamicCalendar$CalculationType } from '../../../../com/ibm/icu/util/IslamicCalendar$CalculationType.d.ts'
import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IslamicCalendar$IslamicAlgorithm extends Object implements IslamicCalendar$Algorithm {
    private constructor()
    compute(arg0: number, arg1: number, arg2: (param0: number) => void, arg3: (param0: number) => void, arg4: (param0: number) => void, arg5: (param0: number) => void): void;
    epoch(): number;
    getType(): IslamicCalendar$CalculationType;
    isCivil(): boolean;
    monthLength(arg0: number, arg1: number): number;
    monthStart(arg0: number, arg1: number): number;
    yearLength(arg0: number): number;
    yearStart(arg0: number): number;
}