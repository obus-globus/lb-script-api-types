import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/DateRule.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class Holiday extends Object implements DateRule {
    static getHolidays(): Holiday[];
    static getHolidays(paramlocale: Locale): Holiday[];
    static getHolidays(paramlocale: ULocale): Holiday[];
    constructor(name: string, rule: DateRule)
    // private name: string;
    readonly rule: DateRule;
    firstAfter(start: Date): Date;
    firstBetween(start: Date, end: Date): Date;
    getDisplayName(): string;
    getDisplayName(locale: Locale): string;
    getDisplayName(locale: ULocale): string;
    getRule(): DateRule;
    isBetween(start: Date, end: Date): boolean;
    isOn(date: Date): boolean;
    setRule(rule: DateRule): void;
}