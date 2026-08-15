import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * NoInterpolation module
 *
 * Reduces or removes entity interpolation ticks
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoInterpolation.kt:30}
 */
export class ModuleNoInterpolation extends ClientModule {
    static INSTANCE: ModuleNoInterpolation;
    readonly value: number;
    getValue(): number;
}