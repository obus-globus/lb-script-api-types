import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { GenerationMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/GenerationMode.d.ts'
import type { Chronometer } from '../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { ItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * ModuleBookBot
 *
 * This module simplifies the process of filling and creating books using various principles,
 * enabling efficient generation and potential automation for mass book creation or "spam."
 *
 * @author sqlerrorthing
 *
 * @since 12/28/2024
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt#L80 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt:80}
 */
export class ModuleBookBot extends ClientModule {
    static INSTANCE: ModuleBookBot;
    // private bookCount: number;
    // private chronometer: Chronometer;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    // private generationMode: ModeValueGroup<GenerationMode>;
    /*not mapped: */ getGenerationMode$net_ccbluex_liquidbounce(): ModeValueGroup<GenerationMode>;
    // private inventoryConstraints: PlayerInventoryConstraints;
    // private /*not mapped: */ getRandomBook(): ItemSlot | null;
    // private scheduleInventoryAction: EventHook<ScheduleInventoryActionEvent>;
    // private isCandidate(itemStack: ItemStack): boolean;
    onEnabled(): void;
    // private writeBook(): void;
}