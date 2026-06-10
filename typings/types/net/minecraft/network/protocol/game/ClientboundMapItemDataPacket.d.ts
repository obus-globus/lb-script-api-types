import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { MapDecoration } from '../../../../../net/minecraft/world/level/saveddata/maps/MapDecoration.d.ts'
import type { MapId } from '../../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData } from '../../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
import type { MapItemSavedData$MapPatch } from '../../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData$MapPatch.d.ts'
export class ClientboundMapItemDataPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundMapItemDataPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    // private colorPatch: Optional<MapItemSavedData$MapPatch>;
    // private decorations: Optional<MapDecoration[]>;
    // private locked: boolean;
    // private mapId: MapId;
    // private scale: number;
    applyToMap(map: MapItemSavedData): void;
    colorPatch(): Optional<MapItemSavedData$MapPatch>;
    decorations(): Optional<MapDecoration[]>;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    locked(): boolean;
    mapId(): MapId;
    scale(): number;
    toString(): string;
    type(): PacketType<ClientboundMapItemDataPacket>;
}