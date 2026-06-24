import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UCharacterProperty } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UCharacterProperty.d.ts'
export class UCharacterProperty$BinaryProperty extends Object {
    constructor(null_: UCharacterProperty, source: number)
    constructor(null_: UCharacterProperty, column: number, mask: number)
    // private column: number;
    // private mask: number;
    contains(c: number): boolean;
    getSource(): number;
}