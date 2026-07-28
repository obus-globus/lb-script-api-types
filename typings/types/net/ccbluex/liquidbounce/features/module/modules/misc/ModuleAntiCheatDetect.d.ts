import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Module Anti Cheat Detect
 *
 * Attempts to detect the anti-cheat used by the server.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt:33}
 */
export class ModuleAntiCheatDetect extends ClientModule {
    static INSTANCE: ModuleAntiCheatDetect;
    // private alertAboutAntiCheat(): void;
    /**
     * Called by {@link ServerObserver} when enough transactions have been received.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleAntiCheatDetect.kt:47}
     */
    completed(): void;
    onEnabled(): void;
}