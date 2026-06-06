import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { DrawOutlinesEvent$OutlineType } from '../../../../../net/ccbluex/liquidbounce/event/events/DrawOutlinesEvent$OutlineType.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
/**
 * Sometimes, modules might want to contribute something to the glow framebuffer. They can hook this event
 * in order to do so.
 *
 * Note: After writing to the outline framebuffer {@link markDirty} must be called.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt:39}
 */
export class DrawOutlinesEvent extends Event {
    constructor(renderTarget: RenderTarget, pose: PoseStack, cameraState: CameraRenderState, partialTicks: number, type: DrawOutlinesEvent$OutlineType)
    readonly cameraState: CameraRenderState;
    readonly dirtyFlag: boolean;
    readonly partialTicks: number;
    readonly pose: PoseStack;
    readonly renderTarget: RenderTarget;
    readonly type: DrawOutlinesEvent$OutlineType;
    /**
     * Called when the framebuffer was edited.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt:56}
     */
    markDirty(): void;
}