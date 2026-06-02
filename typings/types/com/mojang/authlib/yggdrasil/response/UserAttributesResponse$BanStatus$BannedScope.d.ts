import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UserAttributesResponse$BanStatus$BannedScope extends Record {
    constructor(banId: UUID, expires: Instant, reason: string, reasonMessage: string)
    // private banId: UUID;
    // private expires: Instant;
    // private reason: string;
    // private reasonMessage: string;
    banId(): UUID;
    equals(arg0: Object | null): boolean;
    expires(): Instant;
    hashCode(): number;
    reason(): string;
    reasonMessage(): string;
    toString(): string;
}