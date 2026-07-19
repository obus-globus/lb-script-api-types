import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BrowserTexture } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserTexture.d.ts'
import type { BrowserState } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserState.d.ts'
import type { BrowserViewport } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.d.ts'
/**
 * Browser interface for web content rendering and interaction
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:26}
 */
export interface Browser extends AutoCloseable, Object{
    /*not mapped: */ isInitialized(): boolean;
    priority: number;
    readonly state: BrowserState;
    /**
     * Current browser texture for rendering
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:42}
     */
    readonly texture: BrowserTexture | null;
    /**
     * Current URL of the browser
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:37}
     */
    url: string;
    viewport: BrowserViewport;
    visible: boolean;
    close(): void;
    /**
     * Reloads the page ignoring cache
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:47}
     */
    forceReload(): void;
    /**
     * Navigate back in history
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:62}
     */
    goBack(): void;
    /**
     * Navigate forward in history
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:57}
     */
    goForward(): void;
    /**
     * Invalidates the browser texture, forcing a redraw
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:72}
     */
    invalidate(): void;
    /**
     * Reloads the current page
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:52}
     */
    reload(): void;
    /**
     * String representation of the Browser Instance
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:77}
     */
    toString(): string;
    /**
     * Updates browser dimensions and properties
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:67}
     */
    update(width: number, height: number): void;
}