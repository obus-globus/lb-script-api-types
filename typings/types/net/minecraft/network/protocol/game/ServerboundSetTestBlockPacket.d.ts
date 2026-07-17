import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { TestBlockMode } from '../../../../../net/minecraft/world/level/block/state/properties/TestBlockMode.d.ts'
export class ServerboundSetTestBlockPacket extends Record implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundSetTestBlockPacket>;
    constructor(position: BlockPos, mode: TestBlockMode, message: string)
    // private message: string;
    // private mode: TestBlockMode;
    // private position: BlockPos;
    equals(o: Object | null): boolean;
    handle(listener: ServerGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    message(): string;
    mode(): TestBlockMode;
    position(): BlockPos;
    toString(): string;
    type(): PacketType<ServerboundSetTestBlockPacket>;
}