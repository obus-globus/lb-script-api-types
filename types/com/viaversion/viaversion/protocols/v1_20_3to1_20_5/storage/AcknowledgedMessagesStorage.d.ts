import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { ProfileKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/ProfileKey.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { AcknowledgedMessagesStorage$ChatSession } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/storage/AcknowledgedMessagesStorage$ChatSession.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AcknowledgedMessagesStorage extends Object implements StorableObject {
    constructor()
    // private chatSession: AcknowledgedMessagesStorage$ChatSession;
    // private delayedAckCount: number;
    // private lastSeenMessages: BitSet;
    readonly secureChatEnforced: boolean;
    accumulateAckCount(arg0: number): number;
    clear(): void;
    createSpoofedAck(): BitSet;
    isSecureChatEnforced(): boolean;
    onRemove(): void;
    queueChatSession(arg0: UUID, arg1: ProfileKey): void;
    secureChatEnforced(): boolean;
    sendQueuedChatSession(arg0: PacketWrapper): void;
    setSecureChatEnforced(arg0: boolean): void;
    updateFromMessage(arg0: number, arg1: BitSet): number;
}