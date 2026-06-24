import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TripwireConnectionHandler$TripwireData extends Record {
    private constructor(attached: boolean, disarmed: boolean, powered: boolean)
    // private attached: boolean;
    // private disarmed: boolean;
    // private powered: boolean;
    attached(): boolean;
    disarmed(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    powered(): boolean;
    toString(): string;
}