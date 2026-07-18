import type { Record } from '../../../java/lang/Record.d.ts'
import type { Arena } from '../../../java/lang/foreign/Arena.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Upcalls$Upcall extends Record {
    private constructor(arena: Arena, javaCallback: Object)
    // private arena: Arena;
    // private javaCallback: Object;
    arena(): Arena;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    javaCallback(): Object;
    toString(): string;
}