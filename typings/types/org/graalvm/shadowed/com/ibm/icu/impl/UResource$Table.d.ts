import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export interface UResource$Table extends Object{
    findValue(key: CharSequence, value: UResource$Value): boolean;
    getKeyAndValue(i: number, key: UResource$Key, value: UResource$Value): boolean;
    getSize(): number;
}