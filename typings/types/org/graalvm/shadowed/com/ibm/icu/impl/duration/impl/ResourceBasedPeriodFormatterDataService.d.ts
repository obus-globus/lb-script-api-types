import type { PeriodFormatterData } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterData.d.ts'
import type { PeriodFormatterDataService } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterDataService.d.ts'
export class ResourceBasedPeriodFormatterDataService extends PeriodFormatterDataService {
    static getInstance(): ResourceBasedPeriodFormatterDataService;
    private constructor()
    readonly availableLocales: string[];
    // private cache: { [key: string]: PeriodFormatterData };
    // private lastData: PeriodFormatterData;
    // private lastLocale: string;
    get(localeName: string): PeriodFormatterData;
    getAvailableLocales(): string[];
}