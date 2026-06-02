import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Atom<T extends Object | number | string | boolean> extends Record {
    static of(paramname: string): Atom<Object>;
    constructor(name: string)
    // private name: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}