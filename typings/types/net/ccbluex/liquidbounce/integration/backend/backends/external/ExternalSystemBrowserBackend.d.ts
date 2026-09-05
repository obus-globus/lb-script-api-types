import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { BrowserAccelerationFlags } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserAccelerationFlags.d.ts'
import type { BrowserBackend } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserBackend.d.ts'
import type { ExternalSystemBrowser } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/backends/external/ExternalSystemBrowser.d.ts'
import type { BrowserSettings } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { BrowserViewport } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.d.ts'
import type { InputAcceptor } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.d.ts'
import type { TaskManager } from '../../../../../../../net/ccbluex/liquidbounce/integration/task/TaskManager.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Opens an external browser window.
 *
 * Funnily, this is surprisingly usable, even though
 * it just opens an URL.
 *
 * TODO: Use a webdriver to control an external browser window.
 *
 * @author Izuna <izuna.seikatsu@ccbluex.net>
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/backends/external/ExternalSystemBrowserBackend.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/backends/external/ExternalSystemBrowserBackend.kt:40}
 */
export class ExternalSystemBrowserBackend extends Object implements EventListener, BrowserBackend {
    constructor()
    accelerationFlags: BrowserAccelerationFlags;
    browsers: ExternalSystemBrowser[];
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private isInitialized: boolean;
    /*not mapped: */ isInitialized(): boolean;
    readonly running: boolean;
    readonly supportsIncognito: boolean;
    // private addBrowser(browser: ExternalSystemBrowser): void;
    children(): EventListener[];
    createBrowser(url: string, position: BrowserViewport, settings: BrowserSettings, priority: number, incognito: boolean, inputAcceptor: InputAcceptor | null): ExternalSystemBrowser;
    makeDependenciesAvailable(taskManager: TaskManager, whenAvailable: () => void): void;
    parent(): EventListener | null;
    removeBrowser(browser: ExternalSystemBrowser): void;
    start(): void;
    stop(): void;
    unregister(): void;
    update(): void;
}