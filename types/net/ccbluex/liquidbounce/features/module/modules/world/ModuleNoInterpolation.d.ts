import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * NoInterpolation module
 *
 * Reduces or removes entity interpolation ticks
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt:25}
 */
export class ModuleNoInterpolation extends ClientModule {
    static INSTANCE: ModuleNoInterpolation;
    readonly value: number;
}