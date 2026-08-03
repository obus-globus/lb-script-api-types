import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Dank bobbing module
 *
 * Adds more bobbing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt:29}
 */
export class ModuleDankBobbing extends ClientModule {
    static INSTANCE: ModuleDankBobbing;
    readonly motion: number;
}