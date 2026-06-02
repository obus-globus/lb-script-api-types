import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { UserBanListEntry } from '../../../../../net/minecraft/server/players/UserBanListEntry.d.ts'
export class BanlistService$UserBan extends Record {
    private constructor(player: NameAndId, reason: string, source: string, expires: Optional<Instant>)
    // private expires: Optional<Instant>;
    // private player: NameAndId;
    // private reason: string;
    // private source: string;
    equals(o: Object | null): boolean;
    expires(): Optional<Instant>;
    hashCode(): number;
    player(): NameAndId;
    reason(): string;
    source(): string;
    // private toBanEntry(): UserBanListEntry;
    toString(): string;
}