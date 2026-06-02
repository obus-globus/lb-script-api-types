import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Module Anti Cheat Detect
 *
 * Attempts to detect the anti-cheat used by the server.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt:28}
 */
export class ModuleAntiCheatDetect extends ClientModule {
    static INSTANCE: ModuleAntiCheatDetect;
    // private alertAboutAntiCheat(): void;
    /**
     * Called by {@link ServerObserver} when enough transactions have been received.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt:44}
     */
    completed(): void;
    onEnabled(): void;
}