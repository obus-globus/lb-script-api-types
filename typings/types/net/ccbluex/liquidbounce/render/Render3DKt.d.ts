import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { SubmitNodeStorage } from '../../../../net/minecraft/client/renderer/SubmitNodeStorage.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class Render3DKt extends Object {
    /**
     * @see SubmitNodeStorage.submitText
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:113}
     */
    static submitTextAlwaysOnTop(self: SubmitNodeStorage, poseStack: PoseStack, x: number, y: number, string: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, dropShadow: boolean, displayMode: Font$DisplayMode, lightCoords: number, color: number, backgroundColor: number, outlineColor: number): void;
    /**
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleBlockESP
     * @see net.ccbluex.liquidbounce.features.module.modules.render.ModuleStorageESP
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/render/Render3D.kt:70}
     */
    static translate(self: PoseStack, x: number, y: number, z: number): void;
    static translate(self: PoseStack, blockPos: number, origin: BlockPos): void;
    static translate(self: PoseStack, vec3i: Vec3i): void;
    static usePoseStack<T extends unknown>(block: (param0: PoseStack) => T): T;
    static withPush(self: PoseStack, block: (param0: PoseStack) => void): void;
}