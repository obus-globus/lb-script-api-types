import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
import type { ServerboundResourcePackPacket$Action } from '../../../../../net/minecraft/network/protocol/common/ServerboundResourcePackPacket$Action.d.ts'
export class ServerboundResourcePackPacket extends Record implements Packet<ServerCommonPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundResourcePackPacket>;
    constructor(id: UUID, action: ServerboundResourcePackPacket$Action)
    action: ServerboundResourcePackPacket$Action;
    // private id: UUID;
    equals(o: Object | null): boolean;
    handle(listener: ServerCommonPacketListener): void;
    hashCode(): number;
    id(): UUID;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ServerboundResourcePackPacket>;
    // private write(output: FriendlyByteBuf): void;
}