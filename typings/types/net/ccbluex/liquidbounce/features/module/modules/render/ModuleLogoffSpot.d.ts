import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldEntityRemoveEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldEntityRemoveEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleLogoffSpot$LoggedOffPlayer } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleLogoffSpot$LoggedOffPlayer.d.ts'
import type { LivingEntityRenderState } from '../../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
/**
 * Log off spot
 *
 * Creates a fake player entity when a player logs off.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleLogoffSpot.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleLogoffSpot.kt:47}
 */
export class ModuleLogoffSpot extends ClientModule {
    static INSTANCE: ModuleLogoffSpot;
    // private enableSendInChat: boolean;
    // private /*not mapped: */ getEnableSendInChat(): boolean;
    // private entityRemoveHandler: EventHook<WorldEntityRemoveEvent>;
    // private lastSeenPlayers: Map<UUID, ModuleLogoffSpot$LoggedOffPlayer>;
    // private packetHandler: EventHook<PacketEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    isLogoffEntity(entityId: number): boolean;
    isLogoffEntity(state: LivingEntityRenderState): boolean;
    onDisabled(): void;
}