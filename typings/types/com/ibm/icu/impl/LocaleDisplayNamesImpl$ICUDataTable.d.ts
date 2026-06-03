import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { LocaleDisplayNamesImpl$DataTable } from '../../../../com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTable.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
export class LocaleDisplayNamesImpl$ICUDataTable extends LocaleDisplayNamesImpl$DataTable {
    constructor(arg0: string, arg1: ULocale, arg2: boolean)
    // private bundle: ICUResourceBundle;
    get(arg0: string, arg1: string): string;
    get(arg0: string, arg1: string, arg2: string): string;
    getLocale(): ULocale;
}