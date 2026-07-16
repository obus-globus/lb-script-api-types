import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFastExp$ThrowMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastExp$ThrowMode.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
/**
 * FastExp module
 *
 * Automatically repairs your armor.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastExp.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleFastExp.kt:54}
 */
export class ModuleFastExp extends ClientModule {
    static INSTANCE: ModuleFastExp;
    // private EXPERIENCE_PER_BOTTLE: number;
    // private REPAIR_RATE: number;
    // private bottlesRequired: number;
    // private bottlesUsed: number;
    // private combatPauseTime: number;
    // private /*not mapped: */ getCombatPauseTime(): number;
    // private itemsToThrow: number;
    // private repairing: boolean;
    // private repeatable: EventHook<GameTickEvent>;
    // private slotResetDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSlotResetDelay(): { start: number; endInclusive: number; step: number };
    // private throwMode: ModeValueGroup<ModuleFastExp$ThrowMode>;
    // private action(slot: HotbarItemSlot): void;
    // private anyExpOrbMovingToPlayer(): boolean;
    // private getRequiredExperienceBottleCount(slot: HotbarItemSlot): number;
    onDisabled(): void;
    // private waitForExperienceOrbs(): void;
}