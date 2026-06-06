import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Dank bobbing module
 *
 * Adds more bobbing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt:24}
 */
export class ModuleDankBobbing extends ClientModule {
    static INSTANCE: ModuleDankBobbing;
    readonly motion: number;
}