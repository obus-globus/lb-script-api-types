import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
export interface UResource$Array extends Object{
    getSize(): number;
    getValue(i: number, value: UResource$Value): boolean;
}