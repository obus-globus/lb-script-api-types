import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export interface OutlineBufferSourceSingleDrawAddition extends Object{
    liquid_bounce_getSingleDrawBuffers(arg0: RenderType): VertexConsumer;
}