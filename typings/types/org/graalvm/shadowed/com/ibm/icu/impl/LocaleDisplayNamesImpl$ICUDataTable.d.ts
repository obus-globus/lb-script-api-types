import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { LocaleDisplayNamesImpl$DataTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/LocaleDisplayNamesImpl$DataTable.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleDisplayNamesImpl$ICUDataTable extends LocaleDisplayNamesImpl$DataTable {
    constructor(path: string, locale: ULocale, nullIfNotFound: boolean)
    // private bundle: ICUResourceBundle;
    get(tableName: string, code: string): string;
    get(tableName: string, subTableName: string, code: string): string;
    getLocale(): ULocale;
}