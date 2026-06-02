import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Category } from '../../../../com/ibm/icu/util/ULocale$Category.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ULocale$JDKLocaleHelper extends Object {
    static getDefault(paramarg0: ULocale$Category): Locale;
    static hasLocaleCategories(): boolean;
    static setDefault(paramarg0: ULocale$Category, paramarg1: Locale): void;
    static toLocale(paramarg0: ULocale): Locale;
    static toULocale(paramarg0: Locale): ULocale;
    private constructor()
}