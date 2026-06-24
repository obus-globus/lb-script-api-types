import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { UseCooldownEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/UseCooldownEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFastPlace$ApplyTo } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastPlace$ApplyTo.d.ts'
/**
 * FastPlace module
 *
 * Allows you to place blocks faster.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastPlace.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastPlace.kt:32}
 */
export class ModuleFastPlace extends ClientModule {
    static INSTANCE: ModuleFastPlace;
    // private applyTo: ModuleFastPlace$ApplyTo[];
    // private /*not mapped: */ getApplyTo(): ModuleFastPlace$ApplyTo[];
    // private cooldown: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getCooldown(): { start: number; endInclusive: number; step: number };
    // private startDelay: number;
    // private /*not mapped: */ getStartDelay(): number;
    // private useCooldownHandler: EventHook<UseCooldownEvent>;
}