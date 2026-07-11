import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Prevents bouncing on blocks
 *
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.entity.MixinEntity
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiBounce.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiBounce.kt:29}
 */
export class ModuleAntiBounce extends ClientModule {
    static INSTANCE: ModuleAntiBounce;
}