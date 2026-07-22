import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { BrowserReadyEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/BrowserReadyEvent.d.ts'
import type { FpsLimitEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/FpsLimitEvent.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { KeyboardKeyEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { ScreenEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { Browser } from '../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { IntegrationBrowserSettings } from '../../../../../net/ccbluex/liquidbounce/integration/backend/browser/IntegrationBrowserSettings.d.ts'
import type { CustomScreen } from '../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreen.d.ts'
import type { CustomScreenType } from '../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType.d.ts'
import type { ScreenAcknowledgement } from '../../../../../net/ccbluex/liquidbounce/integration/screen/ScreenAcknowledgement.d.ts'
import type { Theme } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Theme.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class ScreenManager extends Object implements EventListener {
    static INSTANCE: ScreenManager;
    static isClientScreen(screen: Screen | null): boolean;
    readonly browserSettings: IntegrationBrowserSettings;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private effectUpdateHandler: EventHook<GameTickEvent>;
    // private fpsLimitHandler: EventHook<FpsLimitEvent>;
    // private handleBrowserReady: EventHook<BrowserReadyEvent>;
    // private keyHandler: EventHook<KeyboardKeyEvent>;
    // private logger: Logger;
    readonly mainBrowser: Browser | null;
    /*not mapped: */ getParent$net_ccbluex_liquidbounce(): Screen;
    readonly running: boolean;
    readonly screen: CustomScreen | null;
    readonly screenAcknowledgement: ScreenAcknowledgement;
    // private screenHandler: EventHook<ScreenEvent>;
    // private screenUpdater: EventHook<GameTickEvent>;
    readonly theme: Theme | null;
    // private worldChangeEvent: EventHook<WorldChangeEvent>;
    children(): EventListener[];
    closeScreen(): void;
    // private handleCurrentMinecraftScreen(minecraftScreen: Screen): boolean;
    // private handleCurrentScreen(screen: Screen | null): boolean;
    isClientScreen(screen: Screen | null): boolean;
    openScreen(name: string): void;
    openScreen(theme: Theme | null, type: CustomScreenType): void;
    parent(): EventListener | null;
    restart(): void;
    restoreOriginalScreen(): void;
    unregister(): void;
    update(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private validateBrowserState(browser: Browser, allowTryOnceMore: boolean, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private waitUntilInitialized(browser: Browser, $completion: Continuation<void>): any;
}