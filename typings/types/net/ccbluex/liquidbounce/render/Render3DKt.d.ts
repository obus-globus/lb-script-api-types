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
    static translate(poseStack: PoseStack, x: number, y: number, z: number): void;
    static translate(poseStack: PoseStack, blockPos: number, origin: BlockPos): void;
    static translate(poseStack: PoseStack, vec3i: Vec3i): void;
    static usePoseStack(block: Function1<Object, Object>): Object | null;
    static withPush(poseStack: PoseStack, block: Function1<Object, void>): void;
}