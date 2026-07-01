import type { InputConstants$Key } from '../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * A raw keyboard key press or release, reported with the key and the action code.
 */
export class KeyEvent extends Event implements WebSocketEvent {
    constructor(key: InputConstants$Key, action: number)
    readonly action: number;
    readonly key: InputConstants$Key;
}