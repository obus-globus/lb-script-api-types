import type { ICUCache } from '../../../../com/ibm/icu/impl/ICUCache.d.ts'
import type { ListFormatter } from '../../../../com/ibm/icu/text/ListFormatter.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListFormatter$Cache extends Object {
    private constructor()
    // private cache: ICUCache<string, ListFormatter>;
    get(arg0: ULocale, arg1: string): ListFormatter;
}