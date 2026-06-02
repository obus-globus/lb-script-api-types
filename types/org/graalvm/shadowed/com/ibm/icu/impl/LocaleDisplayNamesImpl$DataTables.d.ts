import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LocaleDisplayNamesImpl$DataTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTable.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class LocaleDisplayNamesImpl$DataTables extends Object {
    static load(paramclassName: string): LocaleDisplayNamesImpl$DataTables;
    constructor()
    get(locale: ULocale, nullIfNotFound: boolean): LocaleDisplayNamesImpl$DataTable;
}