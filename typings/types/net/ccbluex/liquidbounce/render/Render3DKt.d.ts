import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
export class Render3DKt extends Object {
    /**
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleBlockESP
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleStorageESP
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L84 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:84}
     */
    static translate(poseStack: PoseStack, x: number, y: number, z: number): void;
    static translate(poseStack: PoseStack, blockPos: number, origin: BlockPos): void;
    static translate(poseStack: PoseStack, vec3i: Vec3i): void;
    static usePoseStack(block: (param0: Object) => Object | null): Object | null;
    static withPush(poseStack: PoseStack, block: (param0: Object) => void): void;
}