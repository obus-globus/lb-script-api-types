import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoCrafter$OnFull } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoCrafter$OnFull.d.ts'
import type { ModuleAutoCrafter$RecipeBookMenuType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoCrafter$RecipeBookMenuType.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * AutoCrafter module
 *
 * Automatically crafts items using the Recipe Book.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoCrafter.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleAutoCrafter.kt:46}
 */
export class ModuleAutoCrafter extends ClientModule {
    static INSTANCE: ModuleAutoCrafter;
    // private allowedContainers: ModuleAutoCrafter$RecipeBookMenuType[];
    // private /*not mapped: */ getAllowedContainers(): ModuleAutoCrafter$RecipeBookMenuType[];
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    // private itemsToCraft: Item[];
    // private /*not mapped: */ getItemsToCraft(): Item[];
    // private onFull: ModuleAutoCrafter$OnFull;
    // private /*not mapped: */ getOnFull(): ModuleAutoCrafter$OnFull;
    // private sequentialCrafting: boolean;
    // private /*not mapped: */ getSequentialCrafting(): boolean;
    // private stackCrafting: boolean;
    // private /*not mapped: */ getStackCrafting(): boolean;
    // private tickHandler: EventHook<GameTickEvent>;
}