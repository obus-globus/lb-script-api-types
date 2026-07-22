import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Event } from '../../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Value as Value_2 } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
export class ScriptMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(choiceObject: JavaMap<string, Object>, parent: ModeValueGroup<Mode>)
    // private _values: JavaMap<string, Value<Object>>;
    // private events: JavaMap<string, Value_2>;
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    /**
     * Allows the user to access values by typing module.settings.<valuename>
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptMode.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptMode.kt:40}
     */
    readonly settings: JavaMap<string, Value<Object>>;
    // private callEvent(event: string, payload: Event | null): void;
    disable(): void;
    enable(): void;
    // private hookHandler(eventName: string): void;
    /**
     * Called from inside the script to register a new event handler.
     *
     * @param eventName Name of the event.
     * @param handler JavaScript function used to handle the event.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptMode.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptMode.kt:57}
     */
    // T-10b: base on() removed; see augmentations/ScriptMode.augmentation.d.ts
}