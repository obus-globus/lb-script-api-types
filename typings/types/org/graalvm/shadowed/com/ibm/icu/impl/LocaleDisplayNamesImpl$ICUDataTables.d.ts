import type { LocaleDisplayNamesImpl$DataTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTable.d.ts'
import type { LocaleDisplayNamesImpl$DataTables } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTables.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class LocaleDisplayNamesImpl$ICUDataTables extends LocaleDisplayNamesImpl$DataTables {
    static load(paramclassName: string): LocaleDisplayNamesImpl$DataTables;
    constructor(path: string)
    // private path: string;
    get(locale: ULocale, nullIfNotFound: boolean): LocaleDisplayNamesImpl$DataTable;
}