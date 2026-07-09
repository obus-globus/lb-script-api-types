import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { SprintEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
import type { ScaffoldSprintControlFeature$SprintMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature$SprintMode.d.ts'
export class ScaffoldSprintControlFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldSprintControlFeature;
    /**
     * We want to sprint omnidirectional because we are walking
     * backwards or sideways to place blocks.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldSprintControlFeature.kt:74}
     */
    readonly allowOmnidirectionalSprint: boolean;
    // private clientMode: ScaffoldSprintControlFeature$SprintMode;
    // private /*not mapped: */ getClientMode(): ScaffoldSprintControlFeature$SprintMode;
    // private gameTickHandler: EventHook<GameTickEvent>;
    // private serverMode: ScaffoldSprintControlFeature$SprintMode;
    // private /*not mapped: */ getServerMode(): ScaffoldSprintControlFeature$SprintMode;
    // private sprintHandler: EventHook<SprintEvent>;
    // private wasPlaced: boolean;
    onBlockPlacement(): void;
}