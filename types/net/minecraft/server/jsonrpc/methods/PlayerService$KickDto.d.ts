import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { Message } from '../../../../../net/minecraft/server/jsonrpc/methods/Message.d.ts'
export class PlayerService$KickDto extends Record {
    static CODEC: MapCodec<PlayerService$KickDto>;
    constructor(player: PlayerDto, message: Optional<Message>)
    // private message: Optional<Message>;
    // private player: PlayerDto;
    equals(o: Object | null): boolean;
    hashCode(): number;
    message(): Optional<Message>;
    player(): PlayerDto;
    toString(): string;
}