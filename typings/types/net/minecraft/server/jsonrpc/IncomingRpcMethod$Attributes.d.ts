import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IncomingRpcMethod$Attributes extends Record {
    // private discoverable: boolean;
    // private runOnMainThread: boolean;
    discoverable(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    runOnMainThread(): boolean;
    toString(): string;
}