import type { PresenceStatus } from '../../../../../com/mojang/authlib/yggdrasil/response/PresenceStatus.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PresenceStatusDto extends Record {
    constructor(profileId: UUID, pmid: UUID, status: PresenceStatus, lastUpdated: Instant)
    // private lastUpdated: Instant;
    // private pmid: UUID;
    // private profileId: UUID;
    // private status: PresenceStatus;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    lastUpdated(): Instant;
    pmid(): UUID;
    profileId(): UUID;
    status(): PresenceStatus;
    toString(): string;
}