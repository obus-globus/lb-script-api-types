import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { FeatureRenderer } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderer.d.ts'
import type { RenderTypeFeatureRenderer$Group } from '../../../../../net/minecraft/client/renderer/feature/RenderTypeFeatureRenderer$Group.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export abstract class RenderTypeFeatureRenderer<Submit extends SubmitNode> extends Object implements FeatureRenderer<Submit> {
    constructor()
    // private currentGroup: RenderTypeFeatureRenderer$Group;
    // private groups: RenderTypeFeatureRenderer$Group[];
    beginPrepare(context: FeatureFrameContext): void;
    buildGroup(context: FeatureFrameContext, submits: Submit[]): void;
    close(): void;
    // private currentGroup(): RenderTypeFeatureRenderer$Group;
    executeGroup(context: FeatureFrameContext, groupIndex: number, submits: Submit[], strictlyOrdered: boolean): void;
    finishExecute(context: FeatureFrameContext): void;
    finishPrepare(context: FeatureFrameContext): void;
    getVertexBuilder(renderType: RenderType): VertexConsumer;
    prepareGroup(context: FeatureFrameContext, submits: Submit[], strictlyOrdered: boolean): void;
}