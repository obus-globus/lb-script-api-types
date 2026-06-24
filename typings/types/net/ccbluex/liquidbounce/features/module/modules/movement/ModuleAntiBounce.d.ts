import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Prevents bouncing on blocks
 *
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.entity.MixinEntity
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiBounce.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiBounce.kt:24}
 */
export class ModuleAntiBounce extends ClientModule {
    static INSTANCE: ModuleAntiBounce;
}