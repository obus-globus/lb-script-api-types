import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
/**
 * MixinEntityRenderState of event. Might be PRE or POST.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:61}
 */
export class EventState extends Enum<EventState> {
    static POST: EventState;
    static PRE: EventState;
    static getEntries(): EventState[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): EventState;
    static values(): EventState[];
    private constructor(stateName: string)
    readonly stateName: string;
    name(): "PRE" | "POST";
}