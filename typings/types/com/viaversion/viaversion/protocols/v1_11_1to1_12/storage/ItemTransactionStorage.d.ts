import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ItemTransactionStorage extends Record {
    constructor(windowId: number, slotId: number, actionId: number)
    // private actionId: number;
    // private slotId: number;
    // private windowId: number;
    actionId(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    slotId(): number;
    toString(): string;
    windowId(): number;
}