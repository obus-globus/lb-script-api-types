import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
export class PlayerDto extends Record {
    static CODEC: MapCodec<PlayerDto>;
    static from(paramgameProfile: GameProfile): PlayerDto;
    static from(paramplayer: ServerPlayer): PlayerDto;
    static from(paramnameAndId: NameAndId): PlayerDto;
    constructor(id: Optional<UUID>, name: Optional<string>)
    // private id: Optional<UUID>;
    // private name: Optional<string>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Optional<UUID>;
    name(): Optional<string>;
    toString(): string;
}