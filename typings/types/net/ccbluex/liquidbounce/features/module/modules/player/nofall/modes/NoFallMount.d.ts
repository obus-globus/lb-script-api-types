import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
import type { SwingMode } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Tries to prevent fall damage by mounting a nearby rideable entity while falling.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMount.kt:40}
 */
export class NoFallMount extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallMount;
    // private dismountTargetId: number;
    // private dismountTicksLeft: number;
    // private lastTargetId: number;
    // private minFallDistance: number;
    // private /*not mapped: */ getMinFallDistance(): number;
    // private pendingMountedTargetId: number;
    // private repeatable: EventHook<GameTickEvent>;
    // private retryDelay: number;
    // private /*not mapped: */ getRetryDelay(): number;
    // private searchRange: number;
    // private /*not mapped: */ getSearchRange(): number;
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    disable(): void;
    // private isRideableTarget(entity: Entity): boolean;
    // private resetAutoDismountState(): void;
    // private resetRideState(): void;
    // private resetState(): void;
    // private scheduleAutoDismountIfNeeded(): void;
    // private shouldAttemptRide(): boolean;
    // private updateAutoDismount(): void;
}