import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleDisplayNamesImpl$DataTable extends Object {
    constructor(nullIfNotFound: boolean)
    // private nullIfNotFound: boolean;
    get(tableName: string, code: string): string;
    get(tableName: string, subTableName: string, code: string): string;
    getLocale(): ULocale;
}