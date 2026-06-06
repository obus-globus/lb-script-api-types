import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Prevents bouncing on blocks
 *
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.entity.MixinEntity
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiBounce.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiBounce.kt:24}
 */
export class ModuleAntiBounce extends ClientModule {
    static INSTANCE: ModuleAntiBounce;
}