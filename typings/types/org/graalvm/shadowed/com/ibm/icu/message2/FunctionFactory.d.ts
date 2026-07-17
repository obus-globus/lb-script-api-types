import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/Function.d.ts'
export interface FunctionFactory extends Object{
    create(locale: Locale, fixedOptions: { [key: string]: Object }): Function;
}