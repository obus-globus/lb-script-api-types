import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { PartialTickSupplier } from '../../../../net/minecraft/world/waypoints/PartialTickSupplier.d.ts'
import type { TrackedWaypoint } from '../../../../net/minecraft/world/waypoints/TrackedWaypoint.d.ts'
import type { TrackedWaypoint$Camera } from '../../../../net/minecraft/world/waypoints/TrackedWaypoint$Camera.d.ts'
import type { TrackedWaypoint$PitchDirection } from '../../../../net/minecraft/world/waypoints/TrackedWaypoint$PitchDirection.d.ts'
import type { TrackedWaypoint$Projector } from '../../../../net/minecraft/world/waypoints/TrackedWaypoint$Projector.d.ts'
import type { Waypoint$Icon } from '../../../../net/minecraft/world/waypoints/Waypoint$Icon.d.ts'
export class TrackedWaypoint$EmptyWaypoint extends TrackedWaypoint {
    static MAX_RANGE: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, TrackedWaypoint>;
    static WAYPOINT_TRANSMIT_RANGE_HIDE_MODIFIER: AttributeModifier;
    static empty(paramidentifier: UUID): TrackedWaypoint;
    static setAzimuth(paramidentifier: UUID, paramicon: Waypoint$Icon, paramangle: number): TrackedWaypoint;
    static setChunk(paramidentifier: UUID, paramicon: Waypoint$Icon, paramchunk: ChunkPos): TrackedWaypoint;
    static setPosition(paramidentifier: UUID, paramicon: Waypoint$Icon, paramposition: Vec3i): TrackedWaypoint;
    private constructor(identifier: Either<UUID, string>, icon: Waypoint$Icon, byteBuf: FriendlyByteBuf)
    private constructor(identifier: UUID)
    distanceSquared(fromEntity: Entity): number;
    pitchDirectionToCamera(level: Level, projector: TrackedWaypoint$Projector, partialTickSupplier: (param0: Entity) => number): TrackedWaypoint$PitchDirection;
    update(other: TrackedWaypoint): void;
    writeContents(buf: ByteBuf): void;
    yawAngleToCamera(level: Level, camera: TrackedWaypoint$Camera, partialTickSupplier: (param0: Entity) => number): number;
}