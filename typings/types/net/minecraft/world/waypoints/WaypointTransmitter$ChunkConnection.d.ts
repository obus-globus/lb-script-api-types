import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WaypointTransmitter$Connection } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter$Connection.d.ts'
export interface WaypointTransmitter$ChunkConnection extends Object, WaypointTransmitter$Connection{
    connect(): void;
    disconnect(): void;
    distanceChessboard(): number;
    isBroken(): boolean;
    update(): void;
}