import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICUResourceTableAccess extends Object {
    static getTableString(parampath: string, paramlocale: ULocale, paramtableName: string, paramitemName: string, paramdefaultValue: string): string;
    static getTableString(parambundle: ICUResourceBundle, paramtableName: string, paramsubtableName: string, paramitem: string, paramdefaultValue: string): string;
    constructor()
}