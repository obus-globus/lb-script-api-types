import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameRenderEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameRenderEvent.d.ts'
import type { BrowserBackend } from '../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserBackend.d.ts'
import type { TaskManager } from '../../../../../net/ccbluex/liquidbounce/integration/task/TaskManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class BrowserBackendManager extends Object implements EventListener {
    static INSTANCE: BrowserBackendManager;
    backend: BrowserBackend | null;
    readonly debugDisplayName: Component;
    // private gameRenderHandler: EventHook<GameRenderEvent>;
    /*not mapped: */ isInitialized(): boolean;
    // private logger: Logger;
    readonly running: boolean;
    children(): EventListener[];
    /**
     * Causes an update of every browser by re-setting their viewport.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt#L114 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt:114}
     */
    forceUpdate(): void;
    init(): void;
    /**
     * Makes the browser dependencies available and initializes the browser
     * when the dependencies are available.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt:59}
     */
    makeDependenciesAvailable(taskManager: TaskManager): void;
    parent(): EventListener | null;
    /**
     * Initializes the browser.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt:82}
     */
    start(): void;
    /**
     * Shuts down the browser.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt#L103 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/BrowserBackendManager.kt:103}
     */
    stop(): Result<void>;
    unregister(): void;
}