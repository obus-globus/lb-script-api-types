import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { NoFallMLG$PlacementAction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMLG$PlacementAction.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { TimedPickupTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class NoFallMLG extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallMLG;
    // private PICKUP_TRACKER_CAPACITY: number;
    // private SCAFFOLDING_ATTEMPT_TIMEOUT_TICKS: number;
    // private currentTarget: NoFallMLG$PlacementAction | null;
    // private forceSneak: boolean;
    // private /*not mapped: */ getItemsForMLG(): Item[];
    // private minFallDist: number;
    // private /*not mapped: */ getMinFallDist(): number;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private netherItems: Item[];
    // private normalItems: Item[];
    // private pickupTracker: TimedPickupTracker;
    // private rotations: RotationsValueGroup;
    readonly running: boolean;
    // private scaffoldingPlacedAtTick: number;
    // private scaffoldingTarget: BlockPos | null;
    // private tickHandler: EventHook<GameTickEvent>;
    // private tickMovementHandler: EventHook<RotationUpdateEvent>;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private canPickUpWaterSafely(): boolean;
    // private canUseScaffoldingAt(targetPos: BlockPos): boolean;
    disable(): void;
    // private executePlacement(action: NoFallMLG$PlacementAction): void;
    // private getCurrentGoal(): NoFallMLG$PlacementAction | null;
    // private getCurrentMLGPlacementPlan(): NoFallMLG$PlacementAction | null;
    // private getCurrentPickupTarget(): NoFallMLG$PlacementAction | null;
    // private maintainScaffoldingAttempt(): boolean;
    // private resetState(): void;
}