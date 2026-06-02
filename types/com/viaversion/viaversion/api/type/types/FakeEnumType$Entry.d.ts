import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FakeEnumType$Entry extends Record {
    static of(paramarg0: number, paramarg1: string): FakeEnumType$Entry;
    // private id: number;
    // private name: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): number;
    name(): string;
    toString(): string;
}