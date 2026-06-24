import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UCharacterProperty } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCharacterProperty.d.ts'
export class UCharacterProperty$IntProperty extends Object {
    constructor(null_: UCharacterProperty, source: number)
    constructor(null_: UCharacterProperty, column: number, mask: number, shift: number)
    // private column: number;
    // private mask: number;
    // private shift: number;
    getMaxValue(which: number): number;
    getSource(): number;
    getValue(c: number): number;
}