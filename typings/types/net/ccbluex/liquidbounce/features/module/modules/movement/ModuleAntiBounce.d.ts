import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Prevents bouncing on blocks
 *
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.entity.MixinEntity
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiBounce.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleAntiBounce.kt:29}
 */
export class ModuleAntiBounce extends ClientModule {
    static INSTANCE: ModuleAntiBounce;
}