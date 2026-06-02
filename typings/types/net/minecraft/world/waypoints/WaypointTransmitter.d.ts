import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Waypoint } from '../../../../net/minecraft/world/waypoints/Waypoint.d.ts'
import type { Waypoint$Icon } from '../../../../net/minecraft/world/waypoints/Waypoint$Icon.d.ts'
import type { WaypointTransmitter$Connection } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter$Connection.d.ts'
export interface WaypointTransmitter extends Object, Waypoint{
    isTransmittingWaypoint(): boolean;
    makeWaypointConnectionWith(player: ServerPlayer): Optional<WaypointTransmitter$Connection>;
    waypointIcon(): Waypoint$Icon;
}