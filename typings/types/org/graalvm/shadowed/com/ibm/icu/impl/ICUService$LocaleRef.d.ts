import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICUService$LocaleRef extends Object {
    constructor(dnCache: { [key: string]: string }, locale: ULocale, com: (param0: Object) => boolean)
    // private com: (param0: Object) => boolean;
    // private dnCache: { [key: string]: string };
    // private locale: ULocale;
    get(loc: ULocale, comp: (param0: Object) => boolean): { [key: string]: string };
}