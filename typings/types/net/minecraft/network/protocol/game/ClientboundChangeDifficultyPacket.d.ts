import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { Difficulty } from '../../../../../net/minecraft/world/Difficulty.d.ts'
export class ClientboundChangeDifficultyPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundChangeDifficultyPacket>;
    constructor(difficulty: Difficulty, locked: boolean)
    // private difficulty: Difficulty;
    // private locked: boolean;
    difficulty(): Difficulty;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    locked(): boolean;
    toString(): string;
    type(): PacketType<ClientboundChangeDifficultyPacket>;
}