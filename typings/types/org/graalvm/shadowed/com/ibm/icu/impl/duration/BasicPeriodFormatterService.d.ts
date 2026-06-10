import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DurationFormatterFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DurationFormatterFactory.d.ts'
import type { PeriodBuilderFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilderFactory.d.ts'
import type { PeriodFormatterFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatterFactory.d.ts'
import type { PeriodFormatterService } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatterService.d.ts'
import type { PeriodFormatterDataService } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterDataService.d.ts'
export class BasicPeriodFormatterService extends Object implements PeriodFormatterService {
    static getInstance(): BasicPeriodFormatterService;
    constructor(ds: PeriodFormatterDataService)
    // private ds: PeriodFormatterDataService;
    getAvailableLocaleNames(): string[];
    newDurationFormatterFactory(): DurationFormatterFactory;
    newPeriodBuilderFactory(): PeriodBuilderFactory;
    newPeriodFormatterFactory(): PeriodFormatterFactory;
}