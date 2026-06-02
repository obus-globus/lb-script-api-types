import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Event } from '../../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { PolyglotScript } from '../../../../../../net/ccbluex/liquidbounce/script/PolyglotScript.d.ts'
import type { Value } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
export class ScriptModule extends ClientModule {
    constructor(script: PolyglotScript, moduleObject: { [key: string]: Object })
    // private _description: string | null;
    // private _values: { [key: string]: Value<Object> };
    description: () => string | null;
    // private events: { [key: string]: Value };
    readonly script: PolyglotScript;
    /**
     * Allows the user to access values by typing module.settings.<valuename>
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.kt:56}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule.kt:79}
     */
    // T-10: base on() removed; see augmentations/ScriptModule.augmentation.d.ts
    onDisabled(): void;
    onEnabled(): void;
}