import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { EspMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/esp/modes/EspMode.d.ts'
import type { EspMode$BoxBased$BoxBasedEspRenderState } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/esp/modes/EspMode$BoxBased$BoxBasedEspRenderState.d.ts'
export class EspMode$BoxBased extends EspMode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    // private expand: number;
    // private /*not mapped: */ getExpand(): number;
    // private tickHandler: EventHook<GameTickEvent>;
    protected collectPreparedBoxes(tickDelta: number): EspMode$BoxBased$BoxBasedEspRenderState[];
    disable(): void;
}