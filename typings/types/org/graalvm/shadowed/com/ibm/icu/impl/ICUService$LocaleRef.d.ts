import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICUService$LocaleRef extends Object {
    constructor(dnCache: { [key: string]: string }, locale: ULocale, com: (param0: Object, param1: Object) => number)
    // private com: (param0: Object, param1: Object) => number;
    // private dnCache: { [key: string]: string };
    // private locale: ULocale;
    get(loc: ULocale, comp: (param0: Object, param1: Object) => number): { [key: string]: string };
}