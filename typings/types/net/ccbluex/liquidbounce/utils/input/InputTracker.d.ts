import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MouseButtonEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Singleton object that tracks the state of mouse buttons and key presses.
 * It listens for mouse button events and provides utility functions to check if
 * a key or mouse button is currently pressed or was recently pressed.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:35}
 */
export class InputTracker extends Object implements EventListener {
    static INSTANCE: InputTracker;
    readonly debugDisplayName: Component;
    // private handleMouseAction: EventHook<MouseButtonEvent>;
    // private keyLastPressed: JavaMap<any, any>;
    // private mouseLastPressed: number[];
    // private mouseStates: number[];
    readonly running: boolean;
    children(): EventListener[];
    /**
     * Gets the time elapsed since the specified keyboard key was last pressed.
     *
     * @param keyCode The GLFW key code.
     * @returns Milliseconds since last press, or Long.MAX_VALUE if never pressed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L178 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:178}
     */
    getTimeSinceKeyPress(keyCode: number): number;
    /**
     * Gets the time elapsed since the specified mouse button was last pressed.
     *
     * @param button The GLFW code of the mouse button.
     * @returns Milliseconds since last press, or Long.MAX_VALUE if never pressed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L150 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:150}
     */
    getTimeSinceMousePress(button: number): number;
    /**
     * Checks if the specified mouse button is currently pressed.
     *
     * @param button The GLFW code of the mouse button.
     * @returns True if the mouse button is pressed, false otherwise.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L130 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:130}
     */
    isMouseButtonPressed(button: number): boolean;
    parent(): EventListener | null;
    unregister(): void;
    /**
     * Checks if the specified keyboard key was pressed recently.
     * Note: This requires manual tracking via updateKeyPress() since we don't have a keyboard event handler.
     *
     * @param keyCode The GLFW key code.
     * @param withinMs The time window in milliseconds to check within.
     * @returns True if the key was pressed within the specified time, false otherwise.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L167 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:167}
     */
    wasKeyPressedRecently(keyCode: number, withinMs: number): boolean;
    /**
     * Checks if the specified mouse button was pressed recently.
     *
     * @param button The GLFW code of the mouse button.
     * @param withinMs The time window in milliseconds to check within.
     * @returns True if the mouse button was pressed within the specified time, false otherwise.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L139 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:139}
     */
    wasMouseButtonPressedRecently(button: number, withinMs: number): boolean;
}