import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EconomicMapImpl$CollisionLink extends Record {
    private constructor(value: Object, next: number)
    // private next: number;
    // private value: Object;
    equals(o: Object | null): boolean;
    hashCode(): number;
    next(): number;
    toString(): string;
    value(): Object;
}