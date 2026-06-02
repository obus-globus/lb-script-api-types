import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
export interface EntityTrackingEvents$StopTracking extends Object{
    onStopTracking(arg0: Entity, arg1: ServerPlayer): void;
}