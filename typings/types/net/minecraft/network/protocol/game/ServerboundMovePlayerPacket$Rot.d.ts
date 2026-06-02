import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerboundMovePlayerPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundMovePlayerPacket.d.ts'
export class ServerboundMovePlayerPacket$Rot extends ServerboundMovePlayerPacket {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundMovePlayerPacket$Rot>;
    constructor(yRot: number, xRot: number, onGround: boolean, horizontalCollision: boolean)
    type(): PacketType<ServerboundMovePlayerPacket$Rot>;
    // private write(output: FriendlyByteBuf): void;
}