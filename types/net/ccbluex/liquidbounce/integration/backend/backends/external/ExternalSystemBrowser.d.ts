import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { BrowserTexture } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserTexture.d.ts'
import type { ExternalSystemBrowserBackend } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/backends/external/ExternalSystemBrowserBackend.d.ts'
import type { Browser } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { BrowserSettings } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { BrowserState } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserState.d.ts'
import type { BrowserViewport } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.d.ts'
export class ExternalSystemBrowser extends Object implements MinecraftShortcuts, Browser {
    constructor(backend: ExternalSystemBrowserBackend, url: string, viewport: BrowserViewport, settings: BrowserSettings, priority: number)
    // private backend: ExternalSystemBrowserBackend;
    // private isInitialized: boolean;
    /*not mapped: */ isInitialized(): boolean;
    priority: number;
    readonly settings: BrowserSettings;
    readonly state: BrowserState;
    readonly texture: BrowserTexture | null;
    url: string;
    viewport: BrowserViewport;
    visible: boolean;
    close(): void;
    forceReload(): void;
    goBack(): void;
    goForward(): void;
    invalidate(): void;
    reload(): void;
    toString(): string;
    update(width: number, height: number): void;
}