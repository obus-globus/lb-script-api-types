import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * NoInterpolation module
 *
 * Reduces or removes entity interpolation ticks
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt:25}
 */
export class ModuleNoInterpolation extends ClientModule {
    static INSTANCE: ModuleNoInterpolation;
    readonly value: number;
}