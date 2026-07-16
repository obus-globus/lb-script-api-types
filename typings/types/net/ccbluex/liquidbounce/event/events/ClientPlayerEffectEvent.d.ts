import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
/**
 * Fires when the client player's active status effects are updated.
 */
export class ClientPlayerEffectEvent extends Event implements WebSocketEvent {
    constructor(effects: MobEffectInstance[])
    readonly effects: MobEffectInstance[];
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}