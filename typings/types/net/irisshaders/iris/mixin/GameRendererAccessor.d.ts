import type { CrossFrameResourcePool } from '../../../../com/mojang/blaze3d/resource/CrossFrameResourcePool.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
export interface GameRendererAccessor extends Object{
    getResourcePool(): CrossFrameResourcePool;
    invokeBobHurt(arg0: CameraRenderState, arg1: PoseStack): void;
    invokeBobView(arg0: CameraRenderState, arg1: PoseStack): void;
    shouldRenderBlockOutlineA(): boolean;
}