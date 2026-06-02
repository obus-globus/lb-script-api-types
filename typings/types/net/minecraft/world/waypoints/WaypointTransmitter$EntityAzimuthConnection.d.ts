import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Waypoint$Icon } from '../../../../net/minecraft/world/waypoints/Waypoint$Icon.d.ts'
import type { WaypointTransmitter$Connection } from '../../../../net/minecraft/world/waypoints/WaypointTransmitter$Connection.d.ts'
export class WaypointTransmitter$EntityAzimuthConnection extends Object implements WaypointTransmitter$Connection {
    constructor(source: LivingEntity, icon: Waypoint$Icon, receiver: ServerPlayer)
    // private icon: Waypoint$Icon;
    // private lastAngle: number;
    // private receiver: ServerPlayer;
    // private source: LivingEntity;
    connect(): void;
    disconnect(): void;
    isBroken(): boolean;
    update(): void;
}