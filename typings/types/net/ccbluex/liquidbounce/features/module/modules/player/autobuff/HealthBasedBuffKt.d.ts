import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class HealthBasedBuffKt extends Object {
    /**
     * Shared health-threshold check used by {@link HealthBasedBuff} and the health potions in {@link StatusEffectBasedBuff}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/HealthBasedBuff.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/HealthBasedBuff.kt:27}
     */
    static isHealthRequirementMet(self: Player, currentHealth: number, percent: number, considerAbsorption: boolean): boolean;
}