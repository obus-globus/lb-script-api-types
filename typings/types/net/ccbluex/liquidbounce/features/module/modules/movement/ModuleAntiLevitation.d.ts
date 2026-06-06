import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * An anti levitation module
 *
 * Stops the levitation and slow falling effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiLevitation.kt:24}
 */
export class ModuleAntiLevitation extends ClientModule {
    static INSTANCE: ModuleAntiLevitation;
}