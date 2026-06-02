import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Dank bobbing module
 *
 * Adds more bobbing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt:24}
 */
export class ModuleDankBobbing extends ClientModule {
    static INSTANCE: ModuleDankBobbing;
    readonly motion: number;
}