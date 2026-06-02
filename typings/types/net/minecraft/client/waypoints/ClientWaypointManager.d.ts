import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { TrackedWaypoint } from '../../../../net/minecraft/world/waypoints/TrackedWaypoint.d.ts'
import type { TrackedWaypointManager } from '../../../../net/minecraft/world/waypoints/TrackedWaypointManager.d.ts'
export class ClientWaypointManager extends Object implements TrackedWaypointManager {
    constructor()
    // private waypoints: Map<Either<UUID, string>, TrackedWaypoint>;
    forEachWaypoint(fromEntity: Entity, consumer: (param0: TrackedWaypoint) => void): void;
    hasWaypoints(): boolean;
    trackWaypoint(waypoint: TrackedWaypoint): void;
    untrackWaypoint(waypoint: TrackedWaypoint): void;
    updateWaypoint(waypoint: TrackedWaypoint): void;
}