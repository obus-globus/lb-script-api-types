import type { PeriodFormatterData } from '../../../../../../com/ibm/icu/impl/duration/impl/PeriodFormatterData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PeriodFormatterDataService extends Object {
    constructor()
    get(arg0: string): PeriodFormatterData;
    getAvailableLocales(): string[];
}