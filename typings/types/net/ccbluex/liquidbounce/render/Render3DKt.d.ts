import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
export class Render3DKt extends Object {
    /**
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleBlockESP
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleStorageESP
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:69}
     */
    static translate(self: PoseStack, x: number, y: number, z: number): void;
    static translate(self: PoseStack, blockPos: number, origin: BlockPos): void;
    static translate(self: PoseStack, vec3i: Vec3i): void;
    static usePoseStack<T extends unknown>(block: (param0: PoseStack) => T): T;
    static withPush(self: PoseStack, block: (param0: PoseStack) => void): void;
}