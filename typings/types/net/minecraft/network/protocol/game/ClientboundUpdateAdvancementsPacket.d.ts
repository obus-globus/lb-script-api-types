import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementProgress } from '../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientboundUpdateAdvancementsPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateAdvancementsPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(reset: boolean, newAdvancements: AdvancementHolder[], removedAdvancements: Identifier[], progress: Map<Identifier, AdvancementProgress>, showAdvancements: boolean)
    readonly added: AdvancementHolder[];
    readonly progress: Map<Identifier, AdvancementProgress>;
    readonly removed: Identifier[];
    // private reset: boolean;
    // private showAdvancements: boolean;
    getAdded(): AdvancementHolder[];
    getProgress(): Map<Identifier, AdvancementProgress>;
    getRemoved(): Identifier[];
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    shouldReset(): boolean;
    shouldShowAdvancements(): boolean;
    type(): PacketType<ClientboundUpdateAdvancementsPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}