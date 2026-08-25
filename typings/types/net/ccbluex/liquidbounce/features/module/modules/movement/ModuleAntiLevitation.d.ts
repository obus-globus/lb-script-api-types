import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * An anti levitation module
 *
 * Stops the levitation and slow falling effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt:29}
 */
export class ModuleAntiLevitation extends ClientModule {
    static INSTANCE: ModuleAntiLevitation;
}