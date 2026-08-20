import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
/**
 * MixinEntityRenderState of event. Might be PRE or POST.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:61}
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