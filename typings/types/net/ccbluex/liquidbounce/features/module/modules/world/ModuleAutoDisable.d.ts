import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { DeathEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/DeathEvent.d.ts'
import type { DisconnectEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoDisable$DisableOn } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleAutoDisable$DisableOn.d.ts'
/**
 * AutoDisable module
 *
 * Automatically disables modules, when special event happens.
 *
 * Command: {@link CommandAutoDisable}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleAutoDisable.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleAutoDisable.kt:41}
 */
export class ModuleAutoDisable extends ClientModule {
    static INSTANCE: ModuleAutoDisable;
    // private deathHandler: EventHook<DeathEvent>;
    // private disableOn: ModuleAutoDisable$DisableOn[];
    // private /*not mapped: */ getDisableOn(): ModuleAutoDisable$DisableOn[];
    // private disconnectHandler: EventHook<DisconnectEvent>;
    // private moduleNames: string[];
    // private /*not mapped: */ getModuleNames(): string[];
    readonly modules: ClientModule[];
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private worldChangesHandler: EventHook<PacketEvent>;
    add(module: ClientModule): boolean;
    clear(): void;
    // private disableAndNotify(reason: string): void;
    remove(module: ClientModule): boolean;
}