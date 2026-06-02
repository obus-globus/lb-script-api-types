import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { KeyMapping } from '../../../../../net/minecraft/client/KeyMapping.d.ts'
export class KeybindIsPressedEvent extends Event {
    constructor(keyBinding: KeyMapping, isPressed: boolean)
    // private isPressed: boolean;
    /*not mapped: */ isPressed(): boolean;
    readonly keyBinding: KeyMapping;
}