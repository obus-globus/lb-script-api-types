import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class BinaryOp extends Record {
    // private name: string;
    // private priority: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    priority(): number;
    toString(): string;
}