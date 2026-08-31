import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RotationsValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { TimedPickupTracker } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/liquid/TimedPickupTracker.d.ts'
import type { PlacementPlan } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PlacementPlan.d.ts'
import type { Chronometer } from '../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Module Extinguish
 *
 * Automatically extinguishes yourself when you're burning.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleExtinguish.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleExtinguish.kt:54}
 */
export class ModuleExtinguish extends ClientModule {
    static INSTANCE: ModuleExtinguish;
    // private cooldown: number;
    // private /*not mapped: */ getCooldown(): number;
    // private cooldownTimer: Chronometer;
    // private currentTarget: PlacementPlan | null;
    // private notDuringCombat: boolean;
    // private /*not mapped: */ getNotDuringCombat(): boolean;
    // private pickupTracker: TimedPickupTracker;
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private rotations: RotationsValueGroup;
    // private tickHandler: EventHook<GameTickEvent>;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private findAction(): PlacementPlan | null;
    onDisabled(): void;
    onEnabled(): void;
    // private planExtinguishing(): PlacementPlan | null;
    // private planPickup(blockPos: BlockPos): PlacementPlan | null;
}