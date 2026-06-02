import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICULocaleService$LocaleKeyFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICULocaleService$LocaleKeyFactory.d.ts'
import type { ICUService } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICULocaleService$SimpleLocaleKeyFactory extends ICULocaleService$LocaleKeyFactory {
    static INVISIBLE: boolean;
    static VISIBLE: boolean;
    constructor(obj: Object, locale: ULocale, kind: number, visible: boolean)
    constructor(obj: Object, locale: ULocale, kind: number, visible: boolean, name: string)
    // private id: string;
    // private kind: number;
    // private obj: Object;
    create(key: ICUService$Key, service: ICUService): Object;
    isSupportedID(idToCheck: string): boolean;
    toString(): string;
    updateVisibleIDs(result: { [key: string]: ICUService$Factory }): void;
}