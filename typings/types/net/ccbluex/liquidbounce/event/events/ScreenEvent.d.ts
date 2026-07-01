import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
/**
 * Fires when a GUI screen is opened or closed, exposing the screen (null when closing). Cancellable.
 */
export class ScreenEvent extends CancellableEvent {
    constructor(screen: Screen | null)
    readonly screen: Screen | null;
}