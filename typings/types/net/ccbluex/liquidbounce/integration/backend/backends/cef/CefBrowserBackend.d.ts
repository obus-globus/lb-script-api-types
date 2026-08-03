import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { BrowserAccelerationFlags } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserAccelerationFlags.d.ts'
import type { BrowserBackend } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserBackend.d.ts'
import type { CefBrowser } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/backends/cef/CefBrowser.d.ts'
import type { BrowserSettings } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { BrowserState } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserState.d.ts'
import type { BrowserViewport } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.d.ts'
import type { InputAcceptor } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.d.ts'
import type { TaskManager } from '../../../../../../../net/ccbluex/liquidbounce/integration/task/TaskManager.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { CefBrowser as CefBrowser_2 } from '../../../../../../../org/cef/browser/CefBrowser.d.ts'
/**
 * Uses a modified fork of the JCEF library browser backend made for Minecraft.
 * This browser backend is based on Chromium and is the most advanced browser backend.
 * JCEF is available through the MCEF library, which provides a Minecraft compatible version of JCEF.
 *
 * @see <a href="https://github.com/CCBlueX/java-cef/">JCEF</a>
 * @see <a href="https://github.com/CCBlueX/mcef/">MCEF</a>
 * @see @author Izuna <izuna.seikatsu@ccbluex.net>
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/backends/cef/CefBrowserBackend.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/backends/cef/CefBrowserBackend.kt:64}
 */
export class CefBrowserBackend extends Object implements EventListener, BrowserBackend {
    constructor()
    accelerationFlags: BrowserAccelerationFlags;
    browsers: CefBrowser[];
    // private cacheFolder: File;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    /*not mapped: */ isInitialized(): boolean;
    // private librariesFolder: File;
    // private mcefFolder: File;
    readonly running: boolean;
    // private addBrowser(browser: CefBrowser): void;
    children(): EventListener[];
    /**
     * Cleans up old cache directories.
     *
     * TODO: Check if we have an active PID using the cache directory, if so, check if the LiquidBounce
     *   process attached to the JCEF PID is still running or not. If not, we could kill the JCEF process
     *   and clean up the cache directory.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/backends/cef/CefBrowserBackend.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/backends/cef/CefBrowserBackend.kt:129}
     */
    cleanup(): void;
    createBrowser(url: string, position: BrowserViewport, settings: BrowserSettings, priority: number, inputAcceptor: InputAcceptor | null): CefBrowser;
    getBrowserByApi(apiInstance: CefBrowser_2): CefBrowser | null;
    makeDependenciesAvailable(taskManager: TaskManager, whenAvailable: () => void): void;
    // private markInitialized(apiInstance: CefBrowser_2): void;
    parent(): EventListener | null;
    removeBrowser(browser: CefBrowser): void;
    start(): void;
    stop(): void;
    unregister(): void;
    update(): void;
    // private updateStateForBrowser(apiInstance: CefBrowser_2, state: BrowserState): void;
}