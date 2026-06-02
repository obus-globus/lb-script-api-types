import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LastSeenMessages } from '../../../../net/minecraft/network/chat/LastSeenMessages.d.ts'
import type { LastSeenMessages$Update } from '../../../../net/minecraft/network/chat/LastSeenMessages$Update.d.ts'
import type { LastSeenTrackedEntry } from '../../../../net/minecraft/network/chat/LastSeenTrackedEntry.d.ts'
import type { MessageSignature } from '../../../../net/minecraft/network/chat/MessageSignature.d.ts'
export class LastSeenMessagesValidator extends Object {
    constructor(lastSeenCount: number)
    // private lastPendingMessage: MessageSignature;
    // private lastSeenCount: number;
    // private trackedMessages: LastSeenTrackedEntry[];
    addPending(message: MessageSignature): void;
    applyOffset(offset: number): void;
    applyUpdate(update: LastSeenMessages$Update): LastSeenMessages;
    trackedMessagesCount(): number;
}