import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerboundMovePlayerPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundMovePlayerPacket.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ServerboundMovePlayerPacket$Pos extends ServerboundMovePlayerPacket {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundMovePlayerPacket$Pos>;
    constructor(x: number, y: number, z: number, onGround: boolean, horizontalCollision: boolean)
    constructor(pos: Vec3, onGround: boolean, horizontalCollision: boolean)
    type(): PacketType<ServerboundMovePlayerPacket$Pos>;
    // private write(output: FriendlyByteBuf): void;
}