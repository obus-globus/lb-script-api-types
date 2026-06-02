import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { PositionMoveRotation } from '../../../../../net/minecraft/world/entity/PositionMoveRotation.d.ts'
import type { Relative } from '../../../../../net/minecraft/world/entity/Relative.d.ts'
export class ClientboundTeleportEntityPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundTeleportEntityPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    static teleport(paramid: number, paramvalues: PositionMoveRotation, paramrelatives: Relative[], paramonGround: boolean): ClientboundTeleportEntityPacket;
    // private change: PositionMoveRotation;
    // private id: number;
    // private onGround: boolean;
    // private relatives: Relative[];
    change(): PositionMoveRotation;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    id(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    onGround(): boolean;
    relatives(): Relative[];
    toString(): string;
    type(): PacketType<ClientboundTeleportEntityPacket>;
}