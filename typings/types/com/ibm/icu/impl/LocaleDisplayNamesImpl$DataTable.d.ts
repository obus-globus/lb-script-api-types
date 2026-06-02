import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleDisplayNamesImpl$DataTable extends Object {
    constructor(arg0: boolean)
    // private nullIfNotFound: boolean;
    get(arg0: string, arg1: string): string;
    get(arg0: string, arg1: string, arg2: string): string;
    getLocale(): ULocale;
}