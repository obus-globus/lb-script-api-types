import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFreeze$DisableOn } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze$DisableOn.d.ts'
/**
 * Freeze module
 *
 * Allows you to freeze yourself without the server knowing.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleFreeze.kt:69}
 */
export class ModuleFreeze extends ClientModule {
    static INSTANCE: ModuleFreeze;
    // private balance: boolean;
    // private /*not mapped: */ getBalance(): boolean;
    // private disableOn: ModuleFreeze$DisableOn[];
    // private /*not mapped: */ getDisableOn(): ModuleFreeze$DisableOn[];
    // private missedOutTick: number;
    // private modes: ModeValueGroup<Mode>;
    // private moveHandler: EventHook<PlayerTickEvent>;
    // private notification: boolean;
    // private /*not mapped: */ getNotification(): boolean;
    // private packetHandler: EventHook<PacketEvent>;
    readonly renderHandler: EventHook<WorldRenderEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    // private warpInProgress: boolean;
    // private notifyAndDisable(reason: ModuleFreeze$DisableOn): void;
    onDisabled(): void;
    onEnabled(): void;
}