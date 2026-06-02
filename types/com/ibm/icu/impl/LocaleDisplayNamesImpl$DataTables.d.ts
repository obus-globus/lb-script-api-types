import type { LocaleDisplayNamesImpl$DataTable } from '../../../../com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTable.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class LocaleDisplayNamesImpl$DataTables extends Object {
    static load(paramarg0: string): LocaleDisplayNamesImpl$DataTables;
    constructor()
    get(arg0: ULocale, arg1: boolean): LocaleDisplayNamesImpl$DataTable;
}