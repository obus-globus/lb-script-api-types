import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
/**
 * InspectorBoat Vulcan Step
 *
 * @author InspectorBoat (and translated by 1zuna)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt#L183 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt:183}
 */
export class ModuleStep$Vulcan286 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleStep$Vulcan286;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    // private stepCounter: number;
    // private stepping: boolean;
    disable(): void;
}