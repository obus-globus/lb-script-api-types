import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUService$LocaleRef extends Object {
    constructor(arg0: JavaMap<string, string>, arg1: ULocale, arg2: (param0: Object, param1: Object) => number)
    // private com: (param0: Object, param1: Object) => number;
    // private dnCache: JavaMap<string, string>;
    // private locale: ULocale;
    get(arg0: ULocale, arg1: (param0: Object, param1: Object) => number): JavaMap<string, string>;
}