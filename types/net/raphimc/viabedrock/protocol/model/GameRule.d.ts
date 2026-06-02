import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GameRule extends Record {
    // private editable: boolean;
    // private name: string;
    // private value: Object;
    editable(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    value(): Object;
}