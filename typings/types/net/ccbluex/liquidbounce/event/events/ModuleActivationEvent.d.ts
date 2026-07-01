import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when a module is activated, exposing the module name.
 */
export class ModuleActivationEvent extends Event implements WebSocketEvent {
    constructor(moduleName: string)
    readonly moduleName: string;
}