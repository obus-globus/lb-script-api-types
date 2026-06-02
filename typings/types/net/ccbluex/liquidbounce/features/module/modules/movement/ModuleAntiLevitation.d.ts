import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * An anti levitation module
 *
 * Stops the levitation and slow falling effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt:24}
 */
export class ModuleAntiLevitation extends ClientModule {
    static INSTANCE: ModuleAntiLevitation;
}