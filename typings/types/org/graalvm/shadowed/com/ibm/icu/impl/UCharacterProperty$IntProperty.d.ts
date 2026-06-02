import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class UCharacterProperty$IntProperty extends Object {
    constructor(null_: UCharacterProperty$IntProperty, source: number)
    constructor(null_: UCharacterProperty$IntProperty, column: number, mask: number, shift: number)
    // private column: number;
    // private mask: number;
    // private shift: number;
    getMaxValue(which: number): number;
    getSource(): number;
    getValue(c: number): number;
}