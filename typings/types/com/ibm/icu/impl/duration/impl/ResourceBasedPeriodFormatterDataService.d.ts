import type { PeriodFormatterData } from '../../../../../../com/ibm/icu/impl/duration/impl/PeriodFormatterData.d.ts'
import type { PeriodFormatterDataService } from '../../../../../../com/ibm/icu/impl/duration/impl/PeriodFormatterDataService.d.ts'
export class ResourceBasedPeriodFormatterDataService extends PeriodFormatterDataService {
    static getInstance(): ResourceBasedPeriodFormatterDataService;
    private constructor()
    readonly availableLocales: string[];
    // private cache: { [key: string]: PeriodFormatterData };
    // private lastData: PeriodFormatterData;
    // private lastLocale: string;
    get(arg0: string): PeriodFormatterData;
    getAvailableLocales(): string[];
}