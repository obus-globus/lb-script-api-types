import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector$CustomGeometryRenderer } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector$CustomGeometryRenderer.d.ts'
import type { SubmitNodeStorage$CustomGeometrySubmit } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage$CustomGeometrySubmit.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class CustomFeatureRenderer$Storage extends Object {
    constructor()
    // private solidCustomGeometrySubmits: Map<RenderType, SubmitNodeStorage$CustomGeometrySubmit[]>;
    // private solidCustomGeometrySubmitsUsage: RenderType[];
    // private translucentCustomGeometrySubmits: Map<RenderType, SubmitNodeStorage$CustomGeometrySubmit[]>;
    // private translucentCustomGeometrySubmitsUsage: RenderType[];
    add(poseStack: PoseStack, renderType: RenderType, customGeometryRenderer: SubmitNodeCollector$CustomGeometryRenderer): void;
    clear(): void;
    endFrame(): void;
}