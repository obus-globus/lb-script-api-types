import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RotatingSectionStorage$Node<T extends unknown> extends Record {
    private constructor(value: T)
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): T;
}