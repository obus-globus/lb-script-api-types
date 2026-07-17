import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { PeriodFormatterData } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterData.d.ts'
import type { PeriodFormatterDataService } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterDataService.d.ts'
export class ResourceBasedPeriodFormatterDataService extends PeriodFormatterDataService {
    static getInstance(): ResourceBasedPeriodFormatterDataService;
    private constructor()
    readonly availableLocales: string[];
    // private cache: JavaMap<string, PeriodFormatterData>;
    // private lastData: PeriodFormatterData;
    // private lastLocale: string;
    get(localeName: string): PeriodFormatterData;
    getAvailableLocales(): string[];
}