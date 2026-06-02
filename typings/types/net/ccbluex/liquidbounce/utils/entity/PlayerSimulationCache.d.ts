import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { SimulatedPlayerCache } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayerCache.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class PlayerSimulationCache extends Object implements EventListener {
    static INSTANCE: PlayerSimulationCache;
    // private criticalMovementHandler: EventHook<MovementInputEvent>;
    // private gameTickHandler: EventHook<GameTickEvent>;
    // private localPlayerCache: SimulatedPlayerCache | null;
    // private modalMovementHandler: EventHook<MovementInputEvent>;
    // private movementHandler: EventHook<MovementInputEvent>;
    // private otherPlayerCache: Map<Player, SimulatedPlayerCache>;
    children(): EventListener[];
    getSimulationForLocalPlayer(): SimulatedPlayerCache;
    getSimulationForOtherPlayers(player: Player): SimulatedPlayerCache;
    parent(): EventListener | null;
    unregister(): void;
    // private updatePlayerCache(directionalInput: DirectionalInput, verify: boolean): void;
}