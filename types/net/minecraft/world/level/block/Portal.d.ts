import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Portal$Transition } from '../../../../../net/minecraft/world/level/block/Portal$Transition.d.ts'
import type { TeleportTransition } from '../../../../../net/minecraft/world/level/portal/TeleportTransition.d.ts'
export interface Portal extends Object{
    getLocalTransition(): Portal$Transition;
    getPortalDestination(currentLevel: ServerLevel, entity: Entity, portalEntryPos: BlockPos): TeleportTransition;
    getPortalTransitionTime(level: ServerLevel, entity: Entity): number;
}