import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChatSelectionScreen$ChatSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/reporting/ChatSelectionScreen$ChatSelectionList$Entry.d.ts'
export class ChatSelectionScreen$ChatSelectionList$Heading extends Record {
    private constructor(sender: UUID, entry: ChatSelectionScreen$ChatSelectionList$Entry)
    // private entry: ChatSelectionScreen$ChatSelectionList$Entry;
    // private sender: UUID;
    canCombine(other: ChatSelectionScreen$ChatSelectionList$Heading): boolean;
    entry(): ChatSelectionScreen$ChatSelectionList$Entry;
    equals(o: Object | null): boolean;
    hashCode(): number;
    sender(): UUID;
    toString(): string;
}