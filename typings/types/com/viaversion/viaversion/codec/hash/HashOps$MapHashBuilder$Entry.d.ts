import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class HashOps$MapHashBuilder$Entry extends Record implements Comparable<HashOps$MapHashBuilder$Entry> {
    private constructor(key: number, value: number)
    // private key: number;
    // private value: number;
    compareTo(arg0: HashOps$MapHashBuilder$Entry): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    key(): number;
    toString(): string;
    value(): number;
}