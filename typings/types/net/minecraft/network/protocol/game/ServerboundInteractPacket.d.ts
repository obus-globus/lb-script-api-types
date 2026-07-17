import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ServerboundInteractPacket extends Record implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundInteractPacket>;
    constructor(entityId: number, hand: InteractionHand, location: Vec3, usingSecondaryAction: boolean)
    // private entityId: number;
    // private hand: InteractionHand;
    // private location: Vec3;
    // private usingSecondaryAction: boolean;
    entityId(): number;
    equals(o: Object | null): boolean;
    hand(): InteractionHand;
    handle(listener: ServerGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    location(): Vec3;
    toString(): string;
    type(): PacketType<ServerboundInteractPacket>;
    usingSecondaryAction(): boolean;
}