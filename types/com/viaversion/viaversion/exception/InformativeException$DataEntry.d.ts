import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InformativeException$DataEntry extends Record {
    private constructor(name: string, value: Object)
    // private name: string;
    // private value: Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    value(): Object;
}