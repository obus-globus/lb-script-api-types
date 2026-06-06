import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
/**
 * MixinEntityRenderState of event. Might be PRE or POST.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:58}
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