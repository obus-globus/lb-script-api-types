import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Portal } from '../../../../net/minecraft/world/level/block/Portal.d.ts'
import type { Portal$Transition } from '../../../../net/minecraft/world/level/block/Portal$Transition.d.ts'
import type { TeleportTransition } from '../../../../net/minecraft/world/level/portal/TeleportTransition.d.ts'
export class PortalProcessor extends Object {
    constructor(portal: Portal, portalEntryPosition: BlockPos)
    readonly entryPosition: BlockPos;
    readonly insidePortalThisTick: boolean;
    // private portal: Portal;
    readonly portalTime: number;
    // private decayTick(): void;
    getEntryPosition(): BlockPos;
    getPortalDestination(serverLevel: ServerLevel, entity: Entity): TeleportTransition;
    getPortalLocalTransition(): Portal$Transition;
    getPortalTime(): number;
    hasExpired(): boolean;
    isInsidePortalThisTick(): boolean;
    isSamePortal(portal: Portal): boolean;
    processPortalTeleportation(serverLevel: ServerLevel, entity: Entity, allowedToTeleport: boolean): boolean;
    setAsInsidePortalThisTick(insidePortal: boolean): void;
    updateEntryPosition(entryPosition: BlockPos): void;
}