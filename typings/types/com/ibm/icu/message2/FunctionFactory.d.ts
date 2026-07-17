import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Function } from '../../../../com/ibm/icu/message2/Function.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FunctionFactory extends Object{
    create(arg0: Locale, arg1: JavaMap<string, Object>): Function;
}