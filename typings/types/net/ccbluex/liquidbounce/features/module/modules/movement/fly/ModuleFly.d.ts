import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Fly module
 *
 * Allows you to fly.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/ModuleFly.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/ModuleFly.kt:62}
 */
export class ModuleFly extends ClientModule {
    static INSTANCE: ModuleFly;
    // private disableOnSetback: boolean;
    // private /*not mapped: */ getDisableOnSetback(): boolean;
    // private modes: ModeValueGroup<Mode>;
    /*not mapped: */ getModes$net_ccbluex_liquidbounce(): ModeValueGroup<Mode>;
    // private packetHandler: EventHook<PacketEvent>;
    // private wasFlyingAllowed: boolean;
    onDisabled(): void;
    onEnabled(): void;
}