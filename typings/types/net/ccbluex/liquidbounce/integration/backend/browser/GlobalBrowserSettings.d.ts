import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { BrowserReadyEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/BrowserReadyEvent.d.ts'
export class GlobalBrowserSettings extends ValueGroup implements EventListener {
    static INSTANCE: GlobalBrowserSettings;
    /**
     * Uses GPU acceleration for rendering the browser.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.kt:52}
     */
    readonly accelerated: Value<boolean> | null;
    // private browserReadyHandler: EventHook<BrowserReadyEvent>;
    /**
     * Quality setting that controls the rendering resolution.
     * 1.0 = full resolution, 0.5 = half-resolution (better performance), etc.
     *
     * Unfortunately, this is a global setting that applies to all browsers,
     * as CEF is not letting us set a custom zoom level per browser.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.kt:45}
     */
    readonly quality: number;
    children(): EventListener[];
    parent(): EventListener | null;
    unregister(): void;
}