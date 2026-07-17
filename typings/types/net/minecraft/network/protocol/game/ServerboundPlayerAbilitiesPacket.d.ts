import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { Abilities } from '../../../../../net/minecraft/world/entity/player/Abilities.d.ts'
export class ServerboundPlayerAbilitiesPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundPlayerAbilitiesPacket>;
    constructor(abilities: Abilities)
    // private isFlying: boolean;
    // private viaFabricPlus$abilities: Abilities;
    handle(listener: ServerGamePacketListener): void;
    isFlying(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundPlayerAbilitiesPacket>;
    // private write(output: FriendlyByteBuf): void;
}