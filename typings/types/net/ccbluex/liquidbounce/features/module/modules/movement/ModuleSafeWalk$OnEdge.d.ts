import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { RefreshableFloatState } from '../../../../../../../net/ccbluex/liquidbounce/config/utils/RefreshableFloatState.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ModuleSafeWalk$OnEdge$OnEdgeMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSafeWalk$OnEdge$OnEdgeMode.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleSafeWalk$OnEdge extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Mode>)
    // private center: Vec3 | null;
    // private edgeDistance: RefreshableFloatState;
    /**
     * The input handler tracks the movement of the player and calculates the predicted future position.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSafeWalk.kt#L99 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSafeWalk.kt:99}
     */
    readonly inputHandler: EventHook<MovementInputEvent>;
    // private jump: boolean;
    // private /*not mapped: */ getJump(): boolean;
    // private keepTicks: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getKeepTicks(): { start: number; endInclusive: number; step: number };
    // private mode: ModuleSafeWalk$OnEdge$OnEdgeMode;
    // private /*not mapped: */ getMode(): ModuleSafeWalk$OnEdge$OnEdgeMode;
    // private overwriteTicks: number;
    readonly parent: ModeValueGroup<Mode>;
    // private sneak: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSneak(): { start: number; endInclusive: number; step: number };
    // private sneakTicks: number;
    disable(): void;
}