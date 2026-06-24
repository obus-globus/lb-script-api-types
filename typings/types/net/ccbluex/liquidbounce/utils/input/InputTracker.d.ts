import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { MouseButtonEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/MouseButtonEvent.d.ts'
/**
 * Singleton object that tracks the state of mouse buttons and key presses.
 * It listens for mouse button events and provides utility functions to check if
 * a key or mouse button is currently pressed or was recently pressed.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:30}
 */
export class InputTracker extends Object implements EventListener {
    static INSTANCE: InputTracker;
    // private handleMouseAction: EventHook<MouseButtonEvent>;
    // private keyLastPressed: { [key: string]: any };
    // private mouseLastPressed: number[];
    // private mouseStates: number[];
    children(): EventListener[];
    /**
     * Gets the time elapsed since the specified keyboard key was last pressed.
     *
     * @param keyCode The GLFW key code.
     * @returns Milliseconds since last press, or Long.MAX_VALUE if never pressed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L172 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:172}
     */
    getTimeSinceKeyPress(keyCode: number): number;
    /**
     * Gets the time elapsed since the specified mouse button was last pressed.
     *
     * @param button The GLFW code of the mouse button.
     * @returns Milliseconds since last press, or Long.MAX_VALUE if never pressed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L144 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:144}
     */
    getTimeSinceMousePress(button: number): number;
    /**
     * Checks if the specified mouse button is currently pressed.
     *
     * @param button The GLFW code of the mouse button.
     * @returns True if the mouse button is pressed, false otherwise.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L124 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:124}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L159 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:159}
     */
    wasKeyPressedRecently(keyCode: number, withinMs: number): boolean;
    /**
     * Checks if the specified mouse button was pressed recently.
     *
     * @param button The GLFW code of the mouse button.
     * @param withinMs The time window in milliseconds to check within.
     * @returns True if the mouse button was pressed within the specified time, false otherwise.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt#L132 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/InputTracker.kt:132}
     */
    wasMouseButtonPressedRecently(button: number, withinMs: number): boolean;
}