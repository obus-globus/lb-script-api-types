import type { ItemCooldown } from '../../../../../../../../net/ccbluex/liquidbounce/utils/clicking/ItemCooldown.d.ts'
export class KillAuraClicker$KillAuraClickerItemCooldown extends ItemCooldown {
    constructor()
    // private ignoreOnMaceSmash: boolean;
    // private /*not mapped: */ getIgnoreOnMaceSmash(): boolean;
    // private ignoreOnShieldBreak: boolean;
    // private /*not mapped: */ getIgnoreOnShieldBreak(): boolean;
    // private ignoreWhenExitingRange: boolean;
    // private /*not mapped: */ getIgnoreWhenExitingRange(): boolean;
    isCooldownPassed(ticks: number): boolean;
    /**
     * Predicts if we are going to move out of attack range.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraClicker.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraClicker.kt:73}
     */
    predictExitingRange(ticks: number): boolean;
}