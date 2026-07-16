import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Atom<T extends unknown> extends Record {
    static of<T extends unknown>(paramname: string): Atom<T>;
    constructor(name: string)
    // private name: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}