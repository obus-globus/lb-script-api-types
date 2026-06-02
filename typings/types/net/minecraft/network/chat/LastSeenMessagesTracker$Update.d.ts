import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LastSeenMessages } from '../../../../net/minecraft/network/chat/LastSeenMessages.d.ts'
import type { LastSeenMessages$Update } from '../../../../net/minecraft/network/chat/LastSeenMessages$Update.d.ts'
export class LastSeenMessagesTracker$Update extends Record {
    constructor(lastSeen: LastSeenMessages, update: LastSeenMessages$Update)
    // private lastSeen: LastSeenMessages;
    // private update: LastSeenMessages$Update;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lastSeen(): LastSeenMessages;
    toString(): string;
    update(): LastSeenMessages$Update;
}