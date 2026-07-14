import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { SprintEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleSprint$Ignore } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSprint$Ignore.d.ts'
import type { ModuleSprint$SprintMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSprint$SprintMode.d.ts'
import type { ModuleSprint$StopOn } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSprint$StopOn.d.ts'
import type { RotationsValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
/**
 * Sprint module
 *
 * Sprints automatically.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSprint.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSprint.kt:49}
 */
export class ModuleSprint extends ClientModule {
    static INSTANCE: ModuleSprint;
    // private ignore: ModuleSprint$Ignore[];
    // private /*not mapped: */ getIgnore(): ModuleSprint$Ignore[];
    // private jumpHandler: EventHook<PlayerJumpEvent>;
    // private omniRotationalHandler: EventHook<GameTickEvent>;
    // private rotations: RotationsValueGroup;
    readonly shouldIgnoreBlindness: boolean;
    readonly shouldIgnoreCollision: boolean;
    readonly shouldIgnoreHunger: boolean;
    readonly shouldSprintOmnidirectional: boolean;
    // private sprintHandler: EventHook<SprintEvent>;
    // private sprintMode: ModuleSprint$SprintMode;
    // private /*not mapped: */ getSprintMode(): ModuleSprint$SprintMode;
    // private sprintPreventionHandler: EventHook<SprintEvent>;
    // private stopOn: ModuleSprint$StopOn[];
    // private /*not mapped: */ getStopOn(): ModuleSprint$StopOn[];
    // private shouldPreventSprint(): boolean;
}