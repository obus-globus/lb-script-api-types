import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * NoInterpolation module
 *
 * Reduces or removes entity interpolation ticks
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt:30}
 */
export class ModuleNoInterpolation extends ClientModule {
    static INSTANCE: ModuleNoInterpolation;
    readonly value: number;
}