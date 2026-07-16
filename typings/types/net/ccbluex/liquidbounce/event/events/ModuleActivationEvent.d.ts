import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when a module is activated, exposing the module name.
 */
export class ModuleActivationEvent extends Event implements WebSocketEvent {
    constructor(moduleName: string)
    readonly moduleName: string;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}