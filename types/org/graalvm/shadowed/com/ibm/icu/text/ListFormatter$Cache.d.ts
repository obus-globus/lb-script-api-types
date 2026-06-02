import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCache.d.ts'
import type { ListFormatter } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ListFormatter$Cache extends Object {
    private constructor()
    // private cache: ICUCache<string, ListFormatter>;
    get(locale: ULocale, style: string): ListFormatter;
}