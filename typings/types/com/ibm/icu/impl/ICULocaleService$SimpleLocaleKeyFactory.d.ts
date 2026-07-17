import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ICULocaleService$LocaleKeyFactory } from '../../../../com/ibm/icu/impl/ICULocaleService$LocaleKeyFactory.d.ts'
import type { ICUService } from '../../../../com/ibm/icu/impl/ICUService.d.ts'
import type { ICUService$Factory } from '../../../../com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICULocaleService$SimpleLocaleKeyFactory extends ICULocaleService$LocaleKeyFactory {
    static INVISIBLE: boolean;
    static VISIBLE: boolean;
    constructor(arg0: Object, arg1: ULocale, arg2: number, arg3: boolean)
    constructor(arg0: Object, arg1: ULocale, arg2: number, arg3: boolean, arg4: string)
    // private id: string;
    // private kind: number;
    // private obj: Object;
    create(arg0: ICUService$Key, arg1: ICUService): Object;
    isSupportedID(arg0: string): boolean;
    toString(): string;
    updateVisibleIDs(arg0: JavaMap<string, ICUService$Factory>): void;
}