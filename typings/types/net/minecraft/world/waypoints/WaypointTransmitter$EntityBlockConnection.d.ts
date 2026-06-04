import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Waypoint$Icon } from '../../../../net/minecraft/world/waypoints/Waypoint$Icon.d.ts'
import type { WaypointTransmitter$BlockConnection } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter$BlockConnection.d.ts'
export class WaypointTransmitter$EntityBlockConnection extends Object implements WaypointTransmitter$BlockConnection {
    constructor(source: LivingEntity, icon: Waypoint$Icon, receiver: ServerPlayer)
    // private icon: Waypoint$Icon;
    // private lastPosition: BlockPos;
    // private receiver: ServerPlayer;
    // private source: LivingEntity;
    connect(): void;
    disconnect(): void;
    distanceManhattan(): number;
    isBroken(): boolean;
    update(): void;
}