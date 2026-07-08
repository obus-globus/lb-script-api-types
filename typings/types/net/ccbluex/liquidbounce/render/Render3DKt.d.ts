import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
export class Render3DKt extends Object {
    /**
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleBlockESP
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleStorageESP
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:69}
     */
    static translate(poseStack: PoseStack, x: number, y: number, z: number): void;
    static translate(poseStack: PoseStack, blockPos: number, origin: BlockPos): void;
    static translate(poseStack: PoseStack, vec3i: Vec3i): void;
    static usePoseStack(block: (param0: Object) => Object | null): Object | null;
    static withPush(poseStack: PoseStack, block: (param0: Object) => void): void;
}