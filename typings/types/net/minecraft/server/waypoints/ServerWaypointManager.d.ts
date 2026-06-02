import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { WaypointManager } from '../../../../net/minecraft/world/waypoints/WaypointManager.d.ts'
import type { WaypointTransmitter } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter.d.ts'
import type { WaypointTransmitter$Connection } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter$Connection.d.ts'
export class ServerWaypointManager extends Object implements WaypointManager<WaypointTransmitter> {
    constructor()
    // private connections: Table<ServerPlayer, WaypointTransmitter, WaypointTransmitter$Connection>;
    // private players: ServerPlayer[];
    // private waypoints: WaypointTransmitter[];
    addPlayer(player: ServerPlayer): void;
    breakAllConnections(): void;
    // private createConnection(player: ServerPlayer, waypoint: WaypointTransmitter): void;
    remakeConnections(waypoint: WaypointTransmitter): void;
    removePlayer(player: ServerPlayer): void;
    trackWaypoint(waypoint: WaypointTransmitter): void;
    transmitters(): WaypointTransmitter[];
    untrackWaypoint(waypoint: WaypointTransmitter): void;
    // private updateConnection(player: ServerPlayer, waypoint: WaypointTransmitter, connection: WaypointTransmitter$Connection): void;
    updatePlayer(player: ServerPlayer): void;
    updateWaypoint(waypoint: WaypointTransmitter): void;
}