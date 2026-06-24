import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
export class LastSeenTrackedEntry extends Record {
    constructor(signature: MessageSignature, pending: boolean)
    // private pending: boolean;
    // private signature: MessageSignature;
    acknowledge(): LastSeenTrackedEntry;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pending(): boolean;
    signature(): MessageSignature;
    toString(): string;
}