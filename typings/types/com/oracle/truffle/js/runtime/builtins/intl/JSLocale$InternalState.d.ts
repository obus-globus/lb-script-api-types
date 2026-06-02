import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class JSLocale$InternalState extends Object {
    constructor()
    calendar: string;
    caseFirst: string;
    collation: string;
    firstDayOfWeek: string;
    hourCycle: string;
    readonly locale: Locale;
    numberingSystem: string;
    numeric: boolean;
    getBaseName(): string;
    getCalendar(): string;
    getCaseFirst(): string;
    getCollation(): string;
    getFirstDayOfWeek(): string;
    getHourCycle(): string;
    getLanguage(): string;
    getLocale(): string;
    getNumberingSystem(): string;
    getNumeric(): boolean;
    getRegion(): string;
    getScript(): string;
    getULocale(): ULocale;
    getVariants(): string;
    maximize(): string;
    minimize(): string;
}