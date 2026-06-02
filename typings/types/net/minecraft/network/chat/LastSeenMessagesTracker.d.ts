import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LastSeenMessagesTracker$Update } from '../../../../net/minecraft/network/chat/LastSeenMessagesTracker$Update.d.ts'
import type { LastSeenTrackedEntry } from '../../../../net/minecraft/network/chat/LastSeenTrackedEntry.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
export class LastSeenMessagesTracker extends Object {
    constructor(lastSeenCount: number)
    // private lastTrackedMessage: MessageSignature;
    // private offset: number;
    // private tail: number;
    // private trackedMessages: LastSeenTrackedEntry[];
    // private addEntry(entry: LastSeenTrackedEntry): void;
    addPending(message: MessageSignature, wasShown: boolean): boolean;
    generateAndApplyUpdate(): LastSeenMessagesTracker$Update;
    getAndClearOffset(): number;
    ignorePending(pendingMessage: MessageSignature): void;
    offset(): number;
}