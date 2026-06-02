import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { BrowserTexture } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserTexture.d.ts'
import type { CefBrowserBackend } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/backends/cef/CefBrowserBackend.d.ts'
import type { Browser } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { BrowserRenderer } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserRenderer.d.ts'
import type { BrowserSettings } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { BrowserState } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserState.d.ts'
import type { BrowserViewport } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.d.ts'
import type { InputAcceptor } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.d.ts'
import type { InputHandler } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/input/InputHandler.d.ts'
import type { InputListener } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/input/InputListener.d.ts'
import type { MCEFBrowser } from '../../../../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFBrowser.d.ts'
import type { Logger } from '../../../../../../../org/apache/logging/log4j/Logger.d.ts'
export class CefBrowser extends Object implements MinecraftShortcuts, Browser, InputHandler {
    constructor(backend: CefBrowserBackend, url: string, viewport: BrowserViewport, settings: BrowserSettings, priority: number, inputAcceptor: InputAcceptor | null)
    // private backend: CefBrowserBackend;
    // private browserApi: MCEFBrowser;
    /*not mapped: */ getBrowserApi$liquidbounce(): MCEFBrowser;
    // private inputListener: InputListener | null;
    // private isInitialized: boolean;
    /*not mapped: */ isInitialized(): boolean;
    // private logger: Logger;
    priority: number;
    // private renderer: BrowserRenderer;
    readonly settings: BrowserSettings;
    state: BrowserState;
    readonly texture: BrowserTexture | null;
    url: string;
    viewport: BrowserViewport;
    visible: boolean;
    charTyped(codepoint: number): void;
    close(): void;
    // private comparePaintWithViewpoint(width: number, height: number): void;
    forceReload(): void;
    goBack(): void;
    goForward(): void;
    invalidate(): void;
    keyPressed(keyCode: number, scanCode: number, modifiers: number): void;
    keyReleased(keyCode: number, scanCode: number, modifiers: number): void;
    mouseClicked(mouseX: number, mouseY: number, mouseButton: number): void;
    mouseMoved(mouseX: number, mouseY: number): void;
    mouseReleased(mouseX: number, mouseY: number, mouseButton: number): void;
    mouseScrolled(mouseX: number, mouseY: number, delta: number): void;
    reload(): void;
    toString(): string;
    update(width: number, height: number): void;
}