import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Transliterator$Position extends Object {
    constructor()
    constructor(contextStart: number, contextLimit: number, start: number)
    constructor(contextStart: number, contextLimit: number, start: number, limit: number)
    constructor(pos: Transliterator$Position)
    contextLimit: number;
    contextStart: number;
    limit: number;
    start: number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    set(pos: Transliterator$Position): void;
    toString(): string;
    validate(length: number): void;
}