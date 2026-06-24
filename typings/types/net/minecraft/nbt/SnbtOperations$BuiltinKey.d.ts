import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SnbtOperations$BuiltinKey extends Record {
    constructor(id: string, argCount: number)
    // private argCount: number;
    // private id: string;
    argCount(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    toString(): string;
}