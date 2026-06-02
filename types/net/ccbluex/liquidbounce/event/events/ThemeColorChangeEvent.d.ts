import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ThemeColorChangeEvent extends Event implements WebSocketEvent {
    constructor(themeId: string, name: string, value: Color4b)
    readonly name: string;
    readonly themeId: string;
    readonly value: Color4b;
}