import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Dank bobbing module
 *
 * Adds more bobbing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDankBobbing.kt:29}
 */
export class ModuleDankBobbing extends ClientModule {
    static INSTANCE: ModuleDankBobbing;
    readonly motion: number;
}