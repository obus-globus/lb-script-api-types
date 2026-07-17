import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { CommandBlockEntity$Mode } from '../../../../../net/minecraft/world/level/block/entity/CommandBlockEntity$Mode.d.ts'
export class ServerboundSetCommandBlockPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundSetCommandBlockPacket>;
    constructor(pos: BlockPos, command: string, mode: CommandBlockEntity$Mode, trackOutput: boolean, conditional: boolean, automatic: boolean)
    readonly automatic: boolean;
    readonly command: string;
    readonly conditional: boolean;
    readonly mode: CommandBlockEntity$Mode;
    readonly pos: BlockPos;
    readonly trackOutput: boolean;
    getCommand(): string;
    getMode(): CommandBlockEntity$Mode;
    getPos(): BlockPos;
    handle(listener: ServerGamePacketListener): void;
    isAutomatic(): boolean;
    isConditional(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    isTrackOutput(): boolean;
    type(): PacketType<ServerboundSetCommandBlockPacket>;
    // private write(output: FriendlyByteBuf): void;
}