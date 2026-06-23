import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class FlyVanilla extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyVanilla;
    // private bypassVanillaCheck: boolean;
    // private /*not mapped: */ getBypassVanillaCheck(): boolean;
    // private glide: number;
    // private /*not mapped: */ getGlide(): number;
    readonly parent: ModeValueGroup<any>;
    // private tickHandler: EventHook<GameTickEvent>;
}