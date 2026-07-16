import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ComponentsUpdateEvent$Source } from '../../../../../net/ccbluex/liquidbounce/event/events/ComponentsUpdateEvent$Source.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { HudComponent } from '../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
/**
 * Fires when the HUD components are updated, exposing the updated component list.
 */
export class ComponentsUpdateEvent extends Event implements WebSocketEvent {
    constructor(source: ComponentsUpdateEvent$Source, components: HudComponent[], themeId: string | null)
    readonly components: HudComponent[];
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly source: ComponentsUpdateEvent$Source;
    readonly themeId: string | null;
}