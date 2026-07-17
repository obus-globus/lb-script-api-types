import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * An anti levitation module
 *
 * Stops the levitation and slow falling effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt:29}
 */
export class ModuleAntiLevitation extends ClientModule {
    static INSTANCE: ModuleAntiLevitation;
}