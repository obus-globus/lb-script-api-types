import type { Object } from '../../../../java/lang/Object.d.ts'
export class Transliterator$Position extends Object {
    constructor()
    constructor(arg0: Transliterator$Position)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    contextLimit: number;
    contextStart: number;
    limit: number;
    start: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    set(arg0: Transliterator$Position): void;
    toString(): string;
    validate(arg0: number): void;
}