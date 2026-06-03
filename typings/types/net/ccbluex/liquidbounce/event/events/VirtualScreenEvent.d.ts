import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { VirtualScreenEvent$Action } from '../../../../../net/ccbluex/liquidbounce/event/events/VirtualScreenEvent$Action.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { CustomScreenType } from '../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType.d.ts'
export class VirtualScreenEvent extends Event implements WebSocketEvent {
    constructor(type: CustomScreenType, screenName: string, action: VirtualScreenEvent$Action)
    readonly action: VirtualScreenEvent$Action;
    /**
     * @deprecated Use `type` instead
     */
    readonly screenName: string;
    readonly type: CustomScreenType;
}