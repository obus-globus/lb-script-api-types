import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SetRecord extends Record {
    // private has: Object;
    // private keys: Object;
    // private set: Object;
    // private size: number;
    equals(o: Object | null): boolean;
    has(): Object;
    hashCode(): number;
    keys(): Object;
    set(): Object;
    size(): number;
    toString(): string;
}