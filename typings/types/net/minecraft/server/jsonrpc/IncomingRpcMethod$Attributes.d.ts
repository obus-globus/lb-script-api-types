import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IncomingRpcMethod$Attributes extends Record {
    constructor(runOnMainThread: boolean, discoverable: boolean, allowPreServerInit: boolean)
    // private allowPreServerInit: boolean;
    // private discoverable: boolean;
    // private runOnMainThread: boolean;
    allowPreServerInit(): boolean;
    discoverable(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    runOnMainThread(): boolean;
    toString(): string;
}