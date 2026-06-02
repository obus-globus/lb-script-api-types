import type { ProfileKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/ProfileKey.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AcknowledgedMessagesStorage$ChatSession extends Record {
    constructor(sessionId: UUID, profileKey: ProfileKey)
    // private profileKey: ProfileKey;
    // private sessionId: UUID;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    profileKey(): ProfileKey;
    sessionId(): UUID;
    toString(): string;
}