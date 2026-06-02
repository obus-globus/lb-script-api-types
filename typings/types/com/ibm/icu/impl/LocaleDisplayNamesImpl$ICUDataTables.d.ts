import type { LocaleDisplayNamesImpl$DataTable } from '../../../../com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTable.d.ts'
import type { LocaleDisplayNamesImpl$DataTables } from '../../../../com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTables.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
export abstract class LocaleDisplayNamesImpl$ICUDataTables extends LocaleDisplayNamesImpl$DataTables {
    static load(paramarg0: string): LocaleDisplayNamesImpl$DataTables;
    constructor(arg0: string)
    // private path: string;
    get(arg0: ULocale, arg1: boolean): LocaleDisplayNamesImpl$DataTable;
}