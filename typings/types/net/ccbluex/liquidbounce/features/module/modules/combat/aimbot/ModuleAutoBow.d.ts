import type { Random } from '../../../../../../../../java/util/Random.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
/**
 * AutoBow module
 *
 * Automatically shoots with your bow when it's fully charged
 *  + and make it possible to shoot faster
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/ModuleAutoBow.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/ModuleAutoBow.kt:36}
 */
export class ModuleAutoBow extends ClientModule {
    static INSTANCE: ModuleAutoBow;
    static onStopUsingItem(): void;
    /**
     * Keeps track of the last bow shot that has taken place
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/ModuleAutoBow.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/ModuleAutoBow.kt:42}
     */
    readonly lastShotTimer: Chronometer;
    readonly random: Random;
    onDisabled(): void;
    onStopUsingItem(): void;
}