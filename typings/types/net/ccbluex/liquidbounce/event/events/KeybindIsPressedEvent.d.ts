import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { KeyMapping } from '../../../../../net/minecraft/client/KeyMapping.d.ts'
/**
 * Reports whether a given key binding is currently pressed, exposing the key binding and the pressed state.
 */
export class KeybindIsPressedEvent extends Event {
    constructor(keyBinding: KeyMapping, isPressed: boolean)
    // private isPressed: boolean;
    /*not mapped: */ isPressed(): boolean;
    readonly keyBinding: KeyMapping;
}