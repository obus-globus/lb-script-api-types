import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IteratorFunctionBuiltins$Iterable extends Record {
    private constructor(openMethod: Object, iterable: Object)
    // private iterable: Object;
    // private openMethod: Object;
    equals(o: Object | null): boolean;
    hashCode(): number;
    iterable(): Object;
    openMethod(): Object;
    toString(): string;
}