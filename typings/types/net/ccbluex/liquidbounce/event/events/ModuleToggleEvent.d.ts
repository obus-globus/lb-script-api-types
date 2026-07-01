import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when a module is enabled or disabled, exposing the module name and its new enabled state.
 */
export class ModuleToggleEvent extends Event implements WebSocketEvent {
    constructor(moduleName: string, hidden: boolean, enabled: boolean)
    readonly enabled: boolean;
    readonly hidden: boolean;
    readonly moduleName: string;
}