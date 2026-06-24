import type { RenderPass$RenderArea } from '../../../../com/mojang/blaze3d/systems/RenderPass$RenderArea.d.ts'
import type { RenderPassDescriptor$Attachment } from '../../../../com/mojang/blaze3d/systems/RenderPassDescriptor$Attachment.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
export class RenderPassDescriptor extends Object {
    static create(paramlabel: () => string): RenderPassDescriptor;
    private constructor(label: () => string)
    colorAttachments: RenderPassDescriptor$Attachment<Optional<Vector4fc>>[];
    depthAttachment: RenderPassDescriptor$Attachment<OptionalDouble>;
    // private label: () => string;
    renderArea: RenderPass$RenderArea;
    label(): () => string;
    withColorAttachment(textureView: GpuTextureView): RenderPassDescriptor;
    withColorAttachment(textureView: GpuTextureView, clearValue: Optional<Vector4fc>): RenderPassDescriptor;
    withDepthAttachment(textureView: GpuTextureView): RenderPassDescriptor;
    withDepthAttachment(textureView: GpuTextureView, clearValue: OptionalDouble): RenderPassDescriptor;
    withRenderArea(renderArea: RenderPass$RenderArea): RenderPassDescriptor;
    withUnusedColorAttachment(): RenderPassDescriptor;
}