import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SubmitRenderPhase } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/SubmitRenderPhase.d.ts'
import type { SubmitNode } from '../../../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export interface FabricOrderedSubmitNodeCollector extends Object{
    submitCustom<T extends SubmitNode>(arg0: SubmitRenderPhase<T>, arg1: T): void;
}