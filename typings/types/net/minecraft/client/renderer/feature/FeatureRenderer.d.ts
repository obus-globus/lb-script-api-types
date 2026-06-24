import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureFrameContext } from '../../../../../net/minecraft/client/renderer/feature/FeatureFrameContext.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export interface FeatureRenderer<Submit extends SubmitNode> extends AutoCloseable, Object{
    beginPrepare(context: FeatureFrameContext): void;
    close(): void;
    executeGroup(context: FeatureFrameContext, groupIndex: number, submits: Submit[], strictlyOrdered: boolean): void;
    finishExecute(context: FeatureFrameContext): void;
    finishPrepare(context: FeatureFrameContext): void;
    prepareGroup(context: FeatureFrameContext, submits: Submit[], strictlyOrdered: boolean): void;
}