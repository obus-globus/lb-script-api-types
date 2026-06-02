import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleLongJump extends ClientModule {
    static INSTANCE: ModuleLongJump;
    readonly autoDisable: boolean;
    // private autoJump: boolean;
    // private /*not mapped: */ getAutoJump(): boolean;
    boosted: boolean;
    canBoost: boolean;
    jumped: boolean;
    readonly manualJumpHandler: EventHook<PlayerJumpEvent>;
    readonly mode: ModeValueGroup<Mode>;
    readonly tickHandler: EventHook<MovementInputEvent>;
}