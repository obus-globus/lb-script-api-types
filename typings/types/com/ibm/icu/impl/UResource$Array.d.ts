import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UResource$Array extends Object{
    getSize(): number;
    getValue(arg0: number, arg1: UResource$Value): boolean;
}