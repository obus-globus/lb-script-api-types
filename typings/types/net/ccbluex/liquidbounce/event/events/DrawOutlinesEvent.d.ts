import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Sometimes, modules might want to contribute something to the glow framebuffer. They can hook this event
 * in order to do so.
 *
 * Note: After writing to the outline framebuffer {@link markDirty} must be called.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt:45}
 */
export class DrawOutlinesEvent extends Event {
    constructor(renderTarget: RenderTarget, pose: PoseStack, partialTicks: number)
    readonly dirtyFlag: boolean;
    readonly partialTicks: number;
    readonly pose: PoseStack;
    readonly renderTarget: RenderTarget;
    /**
     * Called when the framebuffer was edited.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/DrawEvents.kt:57}
     */
    markDirty(): void;
}