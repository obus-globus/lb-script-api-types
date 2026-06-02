import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
export class Render3DKt extends Object {
    /**
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleBlockESP
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleStorageESP
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L80 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:80}
     */
    static translate(paramarg0: PoseStack, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static translate(paramarg0: PoseStack, paramarg1: number, paramarg2: BlockPos): void;
    static translate(paramarg0: PoseStack, paramarg1: Vec3i): void;
    static usePoseStack(paramarg0: Function1<Object, Object>): Object | null;
    static withPush(paramarg0: PoseStack, paramarg1: Function1<Object, void>): void;
}