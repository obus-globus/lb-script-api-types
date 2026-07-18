import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { TimedPickupTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.d.ts'
import type { PlacementPlan } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PlacementPlan.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class NoFallMLG extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallMLG;
    /**
     * We need to sneak for at least 3 ticks to eliminate
     * the fall damage.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG.kt:87}
     */
    static SCAFFOLDING_SNEAKING_TICKS: number;
    // private PICKUP_TRACKER_CAPACITY: number;
    SCAFFOLDING_SNEAKING_TICKS: number;
    // private currentTarget: PlacementPlan | null;
    // private /*not mapped: */ getItemsForMLG(): Item[];
    // private minFallDist: number;
    // private /*not mapped: */ getMinFallDist(): number;
    // private netherItems: Item[];
    // private normalItems: Item[];
    // private pickupTracker: TimedPickupTracker;
    // private rotations: RotationsValueGroup;
    readonly running: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private tickMovementHandler: EventHook<RotationUpdateEvent>;
    // private canPickUpWaterSafely(): boolean;
    disable(): void;
    // private getCurrentGoal(): PlacementPlan | null;
    // private getCurrentMLGPlacementPlan(): PlacementPlan | null;
    // private getCurrentPickupTarget(): PlacementPlan | null;
}