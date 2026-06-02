import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ModuleEagle$Conditional$Condition } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleEagle$Conditional$Condition.d.ts'
export class ModuleEagle$Conditional extends ToggleableValueGroup {
    static INSTANCE: ModuleEagle$Conditional;
    // private conditions: ModuleEagle$Conditional$Condition[];
    // private /*not mapped: */ getConditions(): ModuleEagle$Conditional$Condition[];
    readonly controlsSneak: boolean;
    readonly pitch: ClosedFloatingPointRange<number>;
    shouldSneak(event: MovementInputEvent): boolean;
}