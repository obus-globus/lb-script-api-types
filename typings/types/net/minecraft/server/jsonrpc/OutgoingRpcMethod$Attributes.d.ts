import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OutgoingRpcMethod$Attributes extends Record {
    constructor(discoverable: boolean, allowPreServerInit: boolean)
    // private allowPreServerInit: boolean;
    // private discoverable: boolean;
    allowPreServerInit(): boolean;
    discoverable(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}