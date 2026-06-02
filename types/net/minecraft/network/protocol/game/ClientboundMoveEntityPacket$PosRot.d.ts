import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientboundMoveEntityPacket } from '../../../../../net/minecraft/network/protocol/game/ClientboundMoveEntityPacket.d.ts'
export class ClientboundMoveEntityPacket$PosRot extends ClientboundMoveEntityPacket {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundMoveEntityPacket$PosRot>;
    constructor(id: number, xa: number, ya: number, za: number, yRot: number, xRot: number, onGround: boolean)
    type(): PacketType<ClientboundMoveEntityPacket$PosRot>;
    // private write(output: FriendlyByteBuf): void;
}