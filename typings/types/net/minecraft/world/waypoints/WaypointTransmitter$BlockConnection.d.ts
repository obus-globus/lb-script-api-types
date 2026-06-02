import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WaypointTransmitter$Connection } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter$Connection.d.ts'
export interface WaypointTransmitter$BlockConnection extends Object, WaypointTransmitter$Connection{
    distanceManhattan(): number;
    isBroken(): boolean;
}