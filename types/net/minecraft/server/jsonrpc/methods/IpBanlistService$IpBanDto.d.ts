import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IpBanlistService$IpBan } from '../../../../../net/minecraft/server/jsonrpc/methods/IpBanlistService$IpBan.d.ts'
import type { IpBanListEntry } from '../../../../../net/minecraft/server/players/IpBanListEntry.d.ts'
export class IpBanlistService$IpBanDto extends Record {
    static CODEC: MapCodec<IpBanlistService$IpBanDto>;
    static from(paramban: IpBanListEntry): IpBanlistService$IpBanDto;
    constructor(ip: string, reason: Optional<string>, source: Optional<string>, expires: Optional<Instant>)
    // private expires: Optional<Instant>;
    // private ip: string;
    // private reason: Optional<string>;
    // private source: Optional<string>;
    equals(o: Object | null): boolean;
    expires(): Optional<Instant>;
    hashCode(): number;
    ip(): string;
    reason(): Optional<string>;
    source(): Optional<string>;
    // private toIpBan(): IpBanlistService$IpBan;
    toString(): string;
}