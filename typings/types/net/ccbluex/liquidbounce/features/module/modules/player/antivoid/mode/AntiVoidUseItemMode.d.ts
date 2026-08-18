import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AntiVoidMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidMode.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * AntiVoid UseItem mode.
 *
 * When the player is falling into the void with no way to recover, a configured item
 * from the hotbar is used. This is useful on servers with power-ups where using
 * specific items can prevent void death.
 *
 * The trigger conditions are:
 * 1. the player is likely falling.
 * 2. the player's y motion is fast enough to be below {@link yMotionThreshold}.
 * 3. the simulation predicts the player will not reach solid ground within 40 ticks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidUseItemMode.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidUseItemMode.kt:43}
 */
export class AntiVoidUseItemMode extends AntiVoidMode {
    static Companion: Tagged$Companion;
    static INSTANCE: AntiVoidUseItemMode;
    // private SIMULATION_TICKS: number;
    // private items: Item[];
    // private /*not mapped: */ getItems(): Item[];
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private slotResetDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSlotResetDelay(): { start: number; endInclusive: number; step: number };
    // private yMotionThreshold: number;
    // private /*not mapped: */ getYMotionThreshold(): number;
    rescue(): boolean;
}