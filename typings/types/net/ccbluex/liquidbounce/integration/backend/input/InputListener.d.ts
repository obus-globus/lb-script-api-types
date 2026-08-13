import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { KeyboardCharEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/KeyboardCharEvent.d.ts'
import type { KeyboardKeyEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/MouseButtonEvent.d.ts'
import type { MouseCursorEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/MouseCursorEvent.d.ts'
import type { MouseScrollEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/MouseScrollEvent.d.ts'
import type { Browser } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { InputAcceptor } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.d.ts'
import type { InputHandler } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/input/InputHandler.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Handles input events for a single browser instance.
 *
 * This {@link EventListener} needs to be unregistered when the browser is closed.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputListener.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputListener.kt:41}
 */
export class InputListener extends Object implements AutoCloseable, EventListener {
    constructor(browser: Browser, inputHandler: InputHandler, acceptor: InputAcceptor)
    readonly acceptor: InputAcceptor;
    readonly browser: Browser;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly inputHandler: InputHandler;
    // private keyboardCharHandler: EventHook<KeyboardCharEvent>;
    // private keyboardKeyHandler: EventHook<KeyboardKeyEvent>;
    // private mouseButtonHandler: EventHook<MouseButtonEvent>;
    // private mouseCursorHandler: EventHook<MouseCursorEvent>;
    // private mouseScrollHandler: EventHook<MouseScrollEvent>;
    // private mouseX: number;
    // private mouseY: number;
    readonly running: boolean;
    children(): EventListener[];
    close(): void;
    parent(): EventListener | null;
    unregister(): void;
}