import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { IpBanlistService$IpBan } from '../../../../../net/minecraft/server/jsonrpc/methods/IpBanlistService$IpBan.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class IpBanlistService$IncomingIpBanDto extends Record {
    static CODEC: MapCodec<IpBanlistService$IncomingIpBanDto>;
    constructor(player: Optional<PlayerDto>, ip: Optional<string>, reason: Optional<string>, source: Optional<string>, expires: Optional<Instant>)
    // private expires: Optional<Instant>;
    // private ip: Optional<string>;
    // private player: Optional<PlayerDto>;
    // private reason: Optional<string>;
    // private source: Optional<string>;
    equals(o: Object | null): boolean;
    expires(): Optional<Instant>;
    hashCode(): number;
    ip(): Optional<string>;
    player(): Optional<PlayerDto>;
    reason(): Optional<string>;
    source(): Optional<string>;
    // private toIpBan(): IpBanlistService$IpBan;
    // private toIpBan(player: ServerPlayer): IpBanlistService$IpBan;
    toString(): string;
}