import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class DecimalFraction extends Object implements Comparable<DecimalFraction> {
    constructor(fractionalPart: number, digits: number)
    readonly digits: number;
    readonly fractionalPart: number;
    compareTo(other: DecimalFraction): number;
    equals(other: Object | null): boolean;
    fractionalPartWithNDigits(newDigits: number): number;
    hashCode(): number;
    toString(): string;
}