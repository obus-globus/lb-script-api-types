import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { RangedValue } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationUpdateEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/RotationUpdateEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { BlockChangeIntent } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.d.ts'
import type { IgnitionTrapPlanner } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/IgnitionTrapPlanner.d.ts'
import type { WebTrapPlanner } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/traps/traps/WebTrapPlanner.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { TargetTracker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
/**
 * Ignite & AutoWeb module
 *
 * Ignite: Automatically sets targets around you on fire.
 * AutoWeb: Automatically places cobwebs at targets around you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/ModuleAutoTrap.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/ModuleAutoTrap.kt:48}
 */
export class ModuleAutoTrap extends ClientModule {
    static INSTANCE: ModuleAutoTrap;
    // private currentPlan: BlockChangeIntent<Object> | null;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    // private ignitionTrapPlanner: IgnitionTrapPlanner;
    // private ignoreOpenInventory: boolean;
    // private /*not mapped: */ getIgnoreOpenInventory(): boolean;
    // private placementHandler: EventHook<GameTickEvent>;
    // private range: RangedValue<ClosedFloatingPointRange<number>>;
    // private rotationUpdateHandler: EventHook<RotationUpdateEvent>;
    // private rotations: RotationsValueGroup;
    readonly targetTracker: TargetTracker;
    // private timeout: boolean;
    // private webTrapPlanner: WebTrapPlanner;
    // private hasPendingCombatAction(): boolean;
    onDisabled(): void;
    onEnabled(): void;
    // private resetState(): void;
    // private shouldWaitForTiming(plan: BlockChangeIntent<Object>): boolean;
}