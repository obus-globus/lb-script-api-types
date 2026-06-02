import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export interface UResource$Table extends Object{
    findValue(arg0: CharSequence, arg1: UResource$Value): boolean;
    getKeyAndValue(arg0: number, arg1: UResource$Key, arg2: UResource$Value): boolean;
    getSize(): number;
}