import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
/**
 * Fires during a player fluid-collision check, exposing the fluid tag. Cancellable.
 */
export class PlayerFluidCollisionCheckEvent extends CancellableEvent {
    constructor(fluid: TagKey<Fluid>)
    readonly fluid: TagKey<Fluid>;
}