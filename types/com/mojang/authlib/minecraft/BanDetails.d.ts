import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BanDetails extends Record {
    static MULTIPLAYER_SCOPE: string;
    constructor(id: UUID, expires: Instant, reason: string, reasonMessage: string)
    // private expires: Instant;
    // private id: UUID;
    // private reason: string;
    // private reasonMessage: string;
    equals(arg0: Object | null): boolean;
    expires(): Instant;
    hashCode(): number;
    id(): UUID;
    reason(): string;
    reasonMessage(): string;
    toString(): string;
}