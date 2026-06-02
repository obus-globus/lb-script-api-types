import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ModuleAntiAFK$RandomInteraction$Interaction } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleAntiAFK$RandomInteraction$Interaction.d.ts'
import type { DirectionalInput } from '../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
export class ModuleAntiAFK$RandomInteraction extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleAntiAFK$RandomInteraction;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    // private interactions: ModuleAntiAFK$RandomInteraction$Interaction[];
    // private /*not mapped: */ getInteractions(): ModuleAntiAFK$RandomInteraction$Interaction[];
    readonly movementInputEvent: EventHook<MovementInputEvent>;
    readonly parent: ModeValueGroup<Mode>;
    randomDirection: DirectionalInput;
    readonly repeatable: EventHook<GameTickEvent>;
}