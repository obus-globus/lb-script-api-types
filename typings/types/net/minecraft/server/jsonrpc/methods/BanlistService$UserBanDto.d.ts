import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { BanlistService$UserBan } from '../../../../../net/minecraft/server/jsonrpc/methods/BanlistService$UserBan.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { UserBanListEntry } from '../../../../../net/minecraft/server/players/UserBanListEntry.d.ts'
export class BanlistService$UserBanDto extends Record {
    static CODEC: MapCodec<BanlistService$UserBanDto>;
    static from(paramentry: UserBanListEntry): BanlistService$UserBanDto;
    constructor(player: PlayerDto, reason: Optional<string>, source: Optional<string>, expires: Optional<Instant>)
    // private expires: Optional<Instant>;
    // private player: PlayerDto;
    // private reason: Optional<string>;
    // private source: Optional<string>;
    equals(o: Object | null): boolean;
    expires(): Optional<Instant>;
    hashCode(): number;
    player(): PlayerDto;
    reason(): Optional<string>;
    source(): Optional<string>;
    toString(): string;
    // private toUserBan(nameAndId: NameAndId): BanlistService$UserBan;
}