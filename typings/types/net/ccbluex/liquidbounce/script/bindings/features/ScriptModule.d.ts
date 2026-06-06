import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Event } from '../../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { PolyglotScript } from '../../../../../../net/ccbluex/liquidbounce/script/PolyglotScript.d.ts'
import type { Value as Value_2 } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
export class ScriptModule extends ClientModule {
    constructor(script: PolyglotScript, moduleObject: { [key: string]: Object })
    // private _description: string | null;
    // private _values: { [key: string]: Value<Object> };
    description: () => string | null;
    // private events: { [key: string]: Value_2 };
    readonly script: PolyglotScript;
    /**
     * Allows the user to access values by typing module.settings.<valuename>
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.kt:56}
     */
    readonly settings: { [key: string]: Value<Object> };
    tag: string | null;
    // private callEvent(event: string, payload: Event | null): void;
    // private hookHandler(eventName: string): void;
    /**
     * Called from inside the script to register a new event handler.
     *
     * @param eventName Name of the event.
     * @param handler JavaScript function used to handle the event.   1. `() => void` (enable/disable)   2. `(Event) => void` (handler<T>)   3. `async (Event) => void` (sequenceHandler<T>)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.kt:79}
     */
    on(eventName: string, handler: Value_2): void;
    onDisabled(): void;
    onEnabled(): void;
}