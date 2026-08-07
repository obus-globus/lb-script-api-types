import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * An anti levitation module
 *
 * Stops the levitation and slow falling effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt:29}
 */
export class ModuleAntiLevitation extends ClientModule {
    static INSTANCE: ModuleAntiLevitation;
}