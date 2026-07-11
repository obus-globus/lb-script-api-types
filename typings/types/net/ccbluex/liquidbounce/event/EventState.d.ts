import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
/**
 * MixinEntityRenderState of event. Might be PRE or POST.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:61}
 */
export class EventState extends Enum<EventState> {
    static POST: EventState;
    static PRE: EventState;
    static getEntries(): EventState[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EventState;
    static values(): (Object | null)[];
    private constructor(stateName: string)
    readonly stateName: string;
    name(): "PRE" | "POST";
}