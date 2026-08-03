import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Module Anti Cheat Detect
 *
 * Attempts to detect the anti-cheat used by the server.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt:33}
 */
export class ModuleAntiCheatDetect extends ClientModule {
    static INSTANCE: ModuleAntiCheatDetect;
    // private alertAboutAntiCheat(): void;
    /**
     * Called by {@link ServerObserver} when enough transactions have been received.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt:47}
     */
    completed(): void;
    onEnabled(): void;
}