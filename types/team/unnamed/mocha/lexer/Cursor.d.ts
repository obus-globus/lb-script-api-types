import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class Cursor extends Object implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private column: number;
    // private index: number;
    // private line: number;
    protected clone(): Object;
    clone(): Cursor;
    column(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    index(): number;
    line(): number;
    push(arg0: number): void;
    toString(): string;
}