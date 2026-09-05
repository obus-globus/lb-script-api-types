import type { GpuDevice } from '../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { BrowserTexture } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserTexture.d.ts'
import type { ExternalSystemBrowserBackend } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/backends/external/ExternalSystemBrowserBackend.d.ts'
import type { Browser } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { BrowserSettings } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { BrowserState } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserState.d.ts'
import type { BrowserViewport } from '../../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserViewport.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class ExternalSystemBrowser extends Object implements MinecraftShortcuts, Browser {
    constructor(backend: ExternalSystemBrowserBackend, url: string, viewport: BrowserViewport, settings: BrowserSettings, priority: number)
    // private backend: ExternalSystemBrowserBackend;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    // private isIncognito: boolean;
    /**
     * Always false - the page is handed to the system browser, whose profile we have no say over.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/backends/external/ExternalSystemBrowser.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/backends/external/ExternalSystemBrowser.kt:43}
     */
    /*not mapped: */ isIncognito(): boolean;
    // private isInitialized: boolean;
    /*not mapped: */ isInitialized(): boolean;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    priority: number;
    readonly settings: BrowserSettings;
    readonly state: BrowserState;
    readonly texture: BrowserTexture | null;
    url: string;
    viewport: BrowserViewport;
    visible: boolean;
    readonly world: ClientLevel;
    close(): void;
    forceReload(): void;
    goBack(): void;
    goForward(): void;
    invalidate(): void;
    reload(): void;
    toString(): string;
    update(width: number, height: number): void;
}