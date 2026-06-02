import type { DurationFormatterFactory } from '../../../../../com/ibm/icu/impl/duration/DurationFormatterFactory.d.ts'
import type { PeriodBuilderFactory } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilderFactory.d.ts'
import type { PeriodFormatterFactory } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatterFactory.d.ts'
import type { PeriodFormatterService } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatterService.d.ts'
import type { PeriodFormatterDataService } from '../../../../../com/ibm/icu/impl/duration/impl/PeriodFormatterDataService.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BasicPeriodFormatterService extends Object implements PeriodFormatterService {
    static getInstance(): BasicPeriodFormatterService;
    constructor(arg0: PeriodFormatterDataService)
    // private ds: PeriodFormatterDataService;
    getAvailableLocaleNames(): E[];
    newDurationFormatterFactory(): DurationFormatterFactory;
    newPeriodBuilderFactory(): PeriodBuilderFactory;
    newPeriodFormatterFactory(): PeriodFormatterFactory;
}