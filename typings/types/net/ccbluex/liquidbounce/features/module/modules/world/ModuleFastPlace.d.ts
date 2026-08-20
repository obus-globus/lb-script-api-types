import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { UseCooldownEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/UseCooldownEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFastPlace$ApplyTo } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastPlace$ApplyTo.d.ts'
/**
 * FastPlace module
 *
 * Allows you to place blocks faster.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastPlace.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastPlace.kt:37}
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