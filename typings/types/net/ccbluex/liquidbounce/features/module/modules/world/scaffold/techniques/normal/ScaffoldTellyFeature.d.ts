import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PlayerAfterJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerAfterJumpEvent.d.ts'
import type { ScaffoldTellyFeature$Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/normal/ScaffoldTellyFeature$Mode.d.ts'
/**
 * Telly feature
 *
 * This is based on the telly technique and means that the player will jump when moving.
 * That allows for a faster scaffold.
 * Depending on the SameY setting, we might scaffold upwards.
 *
 * @see ModuleScaffold
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/normal/ScaffoldTellyFeature.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/normal/ScaffoldTellyFeature.kt:42}
 */
export class ScaffoldTellyFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldTellyFeature;
    // private afterJumpHandler: EventHook<PlayerAfterJumpEvent>;
    // private aimOnTower: boolean;
    // private /*not mapped: */ getAimOnTower(): boolean;
    readonly doNotAim: boolean;
    // private gameHandler: EventHook<GameTickEvent>;
    /**
     * New val to determine if the player is telly bridging
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/normal/ScaffoldTellyFeature.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/normal/ScaffoldTellyFeature.kt:50}
     */
    /*not mapped: */ isTellyBridging(): boolean;
    // private jumpTicks: number;
    // private jumpTicksOpt: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getJumpTicksOpt(): { start: number; endInclusive: number; step: number };
    // private movementInputHandler: EventHook<MovementInputEvent>;
    readonly resetMode: ScaffoldTellyFeature$Mode;
    // private straightTicks: number;
    // private /*not mapped: */ getStraightTicks(): number;
    // private ticksUntilJump: number;
}