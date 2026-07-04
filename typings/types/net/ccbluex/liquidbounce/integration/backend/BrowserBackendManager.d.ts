import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameRenderEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameRenderEvent.d.ts'
import type { BrowserBackend } from '../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserBackend.d.ts'
import type { TaskManager } from '../../../../../net/ccbluex/liquidbounce/integration/task/TaskManager.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class BrowserBackendManager extends Object implements EventListener {
    static INSTANCE: BrowserBackendManager;
    backend: BrowserBackend | null;
    // private gameRenderHandler: EventHook<GameRenderEvent>;
    /*not mapped: */ isInitialized(): boolean;
    // private logger: Logger;
    children(): EventListener[];
    /**
     * Causes an update of every browser by re-setting their viewport.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt#L114 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt:114}
     */
    forceUpdate(): void;
    init(): void;
    /**
     * Makes the browser dependencies available and initializes the browser
     * when the dependencies are available.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt:59}
     */
    makeDependenciesAvailable(taskManager: TaskManager): void;
    parent(): EventListener | null;
    /**
     * Initializes the browser.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt:82}
     */
    start(): void;
    /**
     * Shuts down the browser.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt#L103 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt:103}
     */
    stop(): Result<void>;
    unregister(): void;
}