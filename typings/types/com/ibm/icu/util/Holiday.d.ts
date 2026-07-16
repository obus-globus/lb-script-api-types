import type { DateRule } from '../../../../com/ibm/icu/util/DateRule.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Holiday extends Object implements DateRule {
    static getHolidays(): Holiday[];
    static getHolidays(paramarg0: ULocale): Holiday[];
    static getHolidays(paramarg0: Locale): Holiday[];
    constructor(arg0: string, arg1: DateRule)
    // private name: string;
    readonly rule: DateRule;
    firstAfter(arg0: Date): Date;
    firstBetween(arg0: Date, arg1: Date): Date;
    getDisplayName(): string;
    getDisplayName(arg0: ULocale): string;
    getDisplayName(arg0: Locale): string;
    getRule(): DateRule;
    isBetween(arg0: Date, arg1: Date): boolean;
    isOn(arg0: Date): boolean;
    setRule(arg0: DateRule): void;
}