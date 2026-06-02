import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { Message } from '../../../../../net/minecraft/server/jsonrpc/methods/Message.d.ts'
export class ServerStateService$SystemMessage extends Record {
    static CODEC: Codec<ServerStateService$SystemMessage>;
    // private message: Message;
    // private overlay: boolean;
    // private receivingPlayers: Optional<PlayerDto[]>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    message(): Message;
    overlay(): boolean;
    receivingPlayers(): Optional<PlayerDto[]>;
    toString(): string;
}