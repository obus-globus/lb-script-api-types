import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUResourceTableAccess extends Object {
    static getTableString(paramarg0: ICUResourceBundle, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string): string;
    static getTableString(paramarg0: string, paramarg1: ULocale, paramarg2: string, paramarg3: string, paramarg4: string): string;
    constructor()
}