import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleNoMissCooldown extends ClientModule {
    static INSTANCE: ModuleNoMissCooldown;
    /**
     * Cancels the attack when missing an attack.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt:35}
     */
    readonly cancelAttackOnMiss: boolean;
    /**
     * Disables the miss-cooldown of 10 ticks when missing an attack.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt:30}
     */
    readonly removeAttackCooldown: boolean;
}