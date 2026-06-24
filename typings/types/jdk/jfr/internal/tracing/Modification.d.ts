import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Modification extends Record {
    static NONE: Modification;
    static TIMING: Modification;
    static TRACING: Modification;
    constructor(timing: boolean, tracing: boolean)
    // private timing: boolean;
    // private tracing: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    timing(): boolean;
    toInt(): number;
    toString(): string;
    tracing(): boolean;
}