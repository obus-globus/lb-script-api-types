import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Dank bobbing module
 *
 * Adds more bobbing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt:29}
 */
export class ModuleDankBobbing extends ClientModule {
    static INSTANCE: ModuleDankBobbing;
    readonly motion: number;
}