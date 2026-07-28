import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { FramebufferResizeEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/FramebufferResizeEvent.d.ts'
import type { GameRenderEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/GameRenderEvent.d.ts'
import type { OverlayRenderEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { ResourceReloadEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/ResourceReloadEvent.d.ts'
import type { ScreenEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { ScreenRenderEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/ScreenRenderEvent.d.ts'
import type { BrowserTexture } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/BrowserTexture.d.ts'
import type { Browser } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Renders the browser tab on the screen.
 *
 * This {@link EventListener} needs to be unregistered when the browser is closed.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserRenderer.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserRenderer.kt:44}
 */
export class BrowserRenderer extends Object implements AutoCloseable, EventListener {
    constructor(browser: Browser)
    readonly browser: Browser;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private gameRenderHandler: EventHook<GameRenderEvent>;
    // private overlayRenderHandler: EventHook<OverlayRenderEvent>;
    // private rendered: boolean;
    // private resourceReloadHandler: EventHook<ResourceReloadEvent>;
    readonly running: boolean;
    // private screenHandler: EventHook<ScreenEvent>;
    // private screenRenderHandler: EventHook<ScreenRenderEvent>;
    // private shouldReload: boolean;
    // private windowResizeHandler: EventHook<FramebufferResizeEvent>;
    children(): EventListener[];
    close(): void;
    parent(): EventListener | null;
    // private render(context: GuiGraphicsExtractor): void;
    // private renderTexture(context: GuiGraphicsExtractor, texture: BrowserTexture, x: number, y: number, width: number, height: number): void;
    unregister(): void;
}