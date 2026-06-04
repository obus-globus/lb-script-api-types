import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Waypoint$Icon } from '../../../../net/minecraft/world/waypoints/Waypoint$Icon.d.ts'
import type { WaypointTransmitter$ChunkConnection } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter$ChunkConnection.d.ts'
export class WaypointTransmitter$EntityChunkConnection extends Object implements WaypointTransmitter$ChunkConnection {
    constructor(source: LivingEntity, icon: Waypoint$Icon, receiver: ServerPlayer)
    // private icon: Waypoint$Icon;
    // private lastPosition: ChunkPos;
    // private receiver: ServerPlayer;
    // private source: LivingEntity;
    connect(): void;
    disconnect(): void;
    distanceChessboard(): number;
    isBroken(): boolean;
    update(): void;
}