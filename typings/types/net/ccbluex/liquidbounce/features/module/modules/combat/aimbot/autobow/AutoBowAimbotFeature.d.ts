import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { TargetTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
/**
 * Automatically shoots with your bow when you aim correctly at an enemy or when the bow is fully charged.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/autobow/AutoBowAimbotFeature.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/autobow/AutoBowAimbotFeature.kt:44}
 */
export class AutoBowAimbotFeature extends ToggleableValueGroup {
    static INSTANCE: AutoBowAimbotFeature;
    // private rotations: RotationsValueGroup;
    readonly targetTracker: TargetTracker;
    // private throughWalls: boolean;
    // private /*not mapped: */ getThroughWalls(): boolean;
    // private tickRepeatable: EventHook<GameTickEvent>;
}