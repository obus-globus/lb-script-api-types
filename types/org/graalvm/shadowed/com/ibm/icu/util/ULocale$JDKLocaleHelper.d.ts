import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Category } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Category.d.ts'
export class ULocale$JDKLocaleHelper extends Object {
    static getDefault(paramcategory: ULocale$Category): Locale;
    static hasLocaleCategories(): boolean;
    static setDefault(paramcategory: ULocale$Category, paramnewLocale: Locale): void;
    static toLocale(paramuloc: ULocale): Locale;
    static toULocale(paramloc: Locale): ULocale;
    private constructor()
}