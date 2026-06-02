import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BrowserTexture } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserTexture.d.ts'
import type { BrowserState } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserState.d.ts'
import type { BrowserViewport } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.d.ts'
/**
 * Browser interface for web content rendering and interaction
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:23}
 */
export interface Browser extends AutoCloseable, Object{
    /*not mapped: */ isInitialized(): boolean;
    priority: number;
    readonly state: BrowserState;
    /**
     * Current browser texture for rendering
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:39}
     */
    readonly texture: BrowserTexture | null;
    /**
     * Current URL of the browser
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:34}
     */
    url: string;
    viewport: BrowserViewport;
    visible: boolean;
    /**
     * Reloads the page ignoring cache
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:44}
     */
    forceReload(): void;
    /**
     * Navigate back in history
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:59}
     */
    goBack(): void;
    /**
     * Navigate forward in history
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:54}
     */
    goForward(): void;
    /**
     * Invalidates the browser texture, forcing a redraw
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:69}
     */
    invalidate(): void;
    /**
     * Reloads the current page
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:49}
     */
    reload(): void;
    /**
     * String representation of the Browser Instance
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:74}
     */
    toString(): string;
    /**
     * Updates browser dimensions and properties
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:64}
     */
    update(width: number, height: number): void;
}