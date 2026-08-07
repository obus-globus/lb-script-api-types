import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * NoInterpolation module
 *
 * Reduces or removes entity interpolation ticks
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt:30}
 */
export class ModuleNoInterpolation extends ClientModule {
    static INSTANCE: ModuleNoInterpolation;
    readonly value: number;
    getValue(): number;
}