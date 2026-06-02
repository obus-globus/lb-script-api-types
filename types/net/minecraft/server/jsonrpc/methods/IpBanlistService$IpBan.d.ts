import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IpBanListEntry } from '../../../../../net/minecraft/server/players/IpBanListEntry.d.ts'
export class IpBanlistService$IpBan extends Record {
    private constructor(ip: string, reason: string, source: string, expires: Optional<Instant>)
    // private expires: Optional<Instant>;
    // private ip: string;
    // private reason: string;
    // private source: string;
    equals(o: Object | null): boolean;
    expires(): Optional<Instant>;
    hashCode(): number;
    ip(): string;
    reason(): string;
    source(): string;
    // private toIpBanEntry(): IpBanListEntry;
    toString(): string;
}