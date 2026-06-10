import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { PeriodFormatterData } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterData.d.ts'
export abstract class PeriodFormatterDataService extends Object {
    constructor()
    get(localeName: string): PeriodFormatterData;
    getAvailableLocales(): string[];
}