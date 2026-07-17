import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { PositionMoveRotation } from '../../../../../net/minecraft/world/entity/PositionMoveRotation.d.ts'
import type { Relative } from '../../../../../net/minecraft/world/entity/Relative.d.ts'
export class ClientboundPlayerPositionPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundPlayerPositionPacket>;
    static of(paramid: number, paramvalues: PositionMoveRotation, paramrelatives: Relative[]): ClientboundPlayerPositionPacket;
    constructor(id: number, change: PositionMoveRotation, relatives: Relative[])
    // private change: PositionMoveRotation;
    // private id: number;
    // private relatives: Relative[];
    change(): PositionMoveRotation;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    id(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    relatives(): Relative[];
    toString(): string;
    type(): PacketType<ClientboundPlayerPositionPacket>;
}