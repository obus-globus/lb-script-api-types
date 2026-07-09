import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleNoMissCooldown extends ClientModule {
    static INSTANCE: ModuleNoMissCooldown;
    /**
     * Cancels the attack when missing an attack.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt:35}
     */
    readonly cancelAttackOnMiss: boolean;
    /**
     * Disables the miss-cooldown of 10 ticks when missing an attack.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleNoMissCooldown.kt:30}
     */
    readonly removeAttackCooldown: boolean;
}