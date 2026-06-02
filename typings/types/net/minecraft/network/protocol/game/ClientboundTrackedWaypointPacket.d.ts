import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundTrackedWaypointPacket$Operation } from '../../../../../net/minecraft/network/protocol/game/ClientboundTrackedWaypointPacket$Operation.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { TrackedWaypoint } from '../../../../../net/minecraft/world/waypoints/TrackedWaypoint.d.ts'
import type { TrackedWaypointManager } from '../../../../../net/minecraft/world/waypoints/TrackedWaypointManager.d.ts'
import type { Waypoint$Icon } from '../../../../../net/minecraft/world/waypoints/Waypoint$Icon.d.ts'
export class ClientboundTrackedWaypointPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundTrackedWaypointPacket>;
    static addWaypointAzimuth(paramidentifier: UUID, paramicon: Waypoint$Icon, paramangle: number): ClientboundTrackedWaypointPacket;
    static addWaypointChunk(paramidentifier: UUID, paramicon: Waypoint$Icon, paramchunk: ChunkPos): ClientboundTrackedWaypointPacket;
    static addWaypointPosition(paramidentifier: UUID, paramicon: Waypoint$Icon, paramposition: Vec3i): ClientboundTrackedWaypointPacket;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    static removeWaypoint(paramidentifier: UUID): ClientboundTrackedWaypointPacket;
    static updateWaypointAzimuth(paramidentifier: UUID, paramicon: Waypoint$Icon, paramangle: number): ClientboundTrackedWaypointPacket;
    static updateWaypointChunk(paramidentifier: UUID, paramicon: Waypoint$Icon, paramchunk: ChunkPos): ClientboundTrackedWaypointPacket;
    static updateWaypointPosition(paramidentifier: UUID, paramicon: Waypoint$Icon, paramposition: Vec3i): ClientboundTrackedWaypointPacket;
    constructor(operation: ClientboundTrackedWaypointPacket$Operation, waypoint: TrackedWaypoint)
    // private operation: ClientboundTrackedWaypointPacket$Operation;
    // private waypoint: TrackedWaypoint;
    apply(manager: TrackedWaypointManager): void;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    operation(): ClientboundTrackedWaypointPacket$Operation;
    toString(): string;
    type(): PacketType<ClientboundTrackedWaypointPacket>;
    waypoint(): TrackedWaypoint;
}