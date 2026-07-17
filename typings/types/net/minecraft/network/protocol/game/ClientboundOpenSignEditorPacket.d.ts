import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundOpenSignEditorPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundOpenSignEditorPacket>;
    constructor(pos: BlockPos, isFrontText: boolean)
    // private isFrontText: boolean;
    readonly pos: BlockPos;
    getPos(): BlockPos;
    handle(listener: ClientGamePacketListener): void;
    isFrontText(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundOpenSignEditorPacket>;
    // private write(output: FriendlyByteBuf): void;
}