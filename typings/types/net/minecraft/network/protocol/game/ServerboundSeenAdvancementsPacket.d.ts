import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { ServerboundSeenAdvancementsPacket$Action } from '../../../../../net/minecraft/network/protocol/game/ServerboundSeenAdvancementsPacket$Action.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ServerboundSeenAdvancementsPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundSeenAdvancementsPacket>;
    static closedScreen(): ServerboundSeenAdvancementsPacket;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    static openedTab(paramtab: AdvancementHolder): ServerboundSeenAdvancementsPacket;
    constructor(action: ServerboundSeenAdvancementsPacket$Action, tab: Identifier)
    readonly action: ServerboundSeenAdvancementsPacket$Action;
    readonly tab: Identifier;
    getAction(): ServerboundSeenAdvancementsPacket$Action;
    getTab(): Identifier;
    handle(listener: ServerGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundSeenAdvancementsPacket>;
    // private write(output: FriendlyByteBuf): void;
}