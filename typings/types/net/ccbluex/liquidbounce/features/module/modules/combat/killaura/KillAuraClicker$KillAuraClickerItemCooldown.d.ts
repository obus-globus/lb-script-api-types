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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraClicker.kt#L76 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraClicker.kt:76}
     */
    predictExitingRange(ticks: number): boolean;
}