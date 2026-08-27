import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BrowserAccelerationFlags } from '../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserAccelerationFlags.d.ts'
import type { Browser } from '../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { BrowserSettings } from '../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { BrowserViewport } from '../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.d.ts'
import type { InputAcceptor } from '../../../../../net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.d.ts'
import type { TaskManager } from '../../../../../net/ccbluex/liquidbounce/integration/task/TaskManager.d.ts'
/**
 * The browser interface which is used to create tabs and manage the browser backend.
 * Due to different possible browser backends, this interface is used to abstract the browser backend.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:33}
 */
export interface BrowserBackend extends Object {
    accelerationFlags: BrowserAccelerationFlags;
    readonly browsers: Browser[];
    /*not mapped: */ isInitialized(): boolean;
    /**
     * Whether this backend can give a browser cookies and storage of its own. Backends that hand the
     * page to something they do not control cannot.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:43}
     */
    readonly supportsIncognito: boolean;
    /**
     * @param incognito Whether the browser gets cookies and storage of its own that are kept in memory                  only, instead of sharing the ones the client persists. Not every backend can                  honour this - check {@link Browser.isIncognito} when it matters.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:67}
     */
    createBrowser(url: string, position: BrowserViewport, settings: BrowserSettings, priority: number, incognito: boolean, inputAcceptor: InputAcceptor | null): Browser;
    makeDependenciesAvailable(taskManager: TaskManager, whenAvailable: () => void): void;
    /**
     * Starts the browser backend and initializes it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:50}
     */
    start(): void;
    /**
     * Stops the browser backend and cleans up resources.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:55}
     */
    stop(): void;
    /**
     * Usually does a global render update of the browser.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:60}
     */
    update(): void;
}