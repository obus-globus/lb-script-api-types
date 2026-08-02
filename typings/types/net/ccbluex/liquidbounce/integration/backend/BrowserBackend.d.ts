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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:33}
 */
export interface BrowserBackend extends Object {
    accelerationFlags: BrowserAccelerationFlags;
    readonly browsers: Browser[];
    /*not mapped: */ isInitialized(): boolean;
    createBrowser(url: string, position: BrowserViewport, settings: BrowserSettings, priority: number, inputAcceptor: InputAcceptor | null): Browser;
    makeDependenciesAvailable(taskManager: TaskManager, whenAvailable: () => void): void;
    /**
     * Starts the browser backend and initializes it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:44}
     */
    start(): void;
    /**
     * Stops the browser backend and cleans up resources.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:49}
     */
    stop(): void;
    /**
     * Usually does a global render update of the browser.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackend.kt:54}
     */
    update(): void;
}