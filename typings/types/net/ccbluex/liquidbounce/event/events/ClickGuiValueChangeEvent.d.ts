import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when a value changes in the ClickGUI, exposing the affected configurable.
 */
export class ClickGuiValueChangeEvent extends Event implements WebSocketEvent {
    constructor(configurable: ValueGroup)
    readonly configurable: ValueGroup;
}