import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PendingInvite extends Record {
    static parse(paramjson: JsonObject): PendingInvite;
    constructor(invitationId: string, realmName: string, realmOwnerName: string, realmOwnerUuid: UUID, date: Instant)
    // private date: Instant;
    // private invitationId: string;
    // private realmName: string;
    // private realmOwnerName: string;
    // private realmOwnerUuid: UUID;
    date(): Instant;
    equals(o: Object | null): boolean;
    hashCode(): number;
    invitationId(): string;
    realmName(): string;
    realmOwnerName(): string;
    realmOwnerUuid(): UUID;
    toString(): string;
}