import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Waypoint } from '../../../../net/minecraft/world/waypoints/Waypoint.d.ts'
export interface WaypointManager<T extends Waypoint> extends Object{
    trackWaypoint(waypoint: T): void;
    untrackWaypoint(waypoint: T): void;
    updateWaypoint(waypoint: T): void;
}