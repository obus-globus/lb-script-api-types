import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BrowserTexture } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserTexture.d.ts'
import type { BrowserState } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserState.d.ts'
import type { BrowserViewport } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.d.ts'
/**
 * Browser interface for web content rendering and interaction
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:26}
 */
export interface Browser extends AutoCloseable, Object{
    /**
     * Whether this browser keeps its cookies and storage to itself, in memory.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:33}
     */
    /*not mapped: */ isIncognito(): boolean;
    /*not mapped: */ isInitialized(): boolean;
    priority: number;
    readonly state: BrowserState;
    /**
     * Current browser texture for rendering
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:48}
     */
    readonly texture: BrowserTexture | null;
    /**
     * Current URL of the browser
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:43}
     */
    url: string;
    viewport: BrowserViewport;
    visible: boolean;
    close(): void;
    /**
     * Reloads the page ignoring cache
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:53}
     */
    forceReload(): void;
    /**
     * Navigate back in history
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:68}
     */
    goBack(): void;
    /**
     * Navigate forward in history
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:63}
     */
    goForward(): void;
    /**
     * Invalidates the browser texture, forcing a redraw
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:78}
     */
    invalidate(): void;
    /**
     * Reloads the current page
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:58}
     */
    reload(): void;
    /**
     * String representation of the Browser Instance
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:83}
     */
    toString(): string;
    /**
     * Updates browser dimensions and properties
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/Browser.kt:73}
     */
    update(width: number, height: number): void;
}