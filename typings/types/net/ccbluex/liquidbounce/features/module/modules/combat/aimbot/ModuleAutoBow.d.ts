import type { Random } from '../../../../../../../../java/util/Random.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
/**
 * AutoBow module
 *
 * Automatically shoots with your bow when it's fully charged
 *  + and make it possible to shoot faster
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/ModuleAutoBow.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/ModuleAutoBow.kt:36}
 */
export class ModuleAutoBow extends ClientModule {
    static INSTANCE: ModuleAutoBow;
    static onStopUsingItem(): void;
    /**
     * Keeps track of the last bow shot that has taken place
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/ModuleAutoBow.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/ModuleAutoBow.kt:42}
     */
    readonly lastShotTimer: Chronometer;
    readonly random: Random;
    onDisabled(): void;
    onStopUsingItem(): void;
}