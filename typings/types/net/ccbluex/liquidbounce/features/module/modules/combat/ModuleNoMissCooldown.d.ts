import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleNoMissCooldown extends ClientModule {
    static INSTANCE: ModuleNoMissCooldown;
    /**
     * Cancels the attack when missing an attack.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt:32}
     */
    readonly cancelAttackOnMiss: boolean;
    /**
     * Disables the miss-cooldown of 10 ticks when missing an attack.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt:27}
     */
    readonly removeAttackCooldown: boolean;
}