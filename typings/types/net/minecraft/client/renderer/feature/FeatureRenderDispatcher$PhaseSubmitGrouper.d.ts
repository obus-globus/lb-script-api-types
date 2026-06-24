import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FeatureRenderDispatcher$PreparedFrame } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher$PreparedFrame.d.ts'
import type { FeatureRenderDispatcher$PreparedGroup } from '../../../../../net/minecraft/client/renderer/feature/FeatureRenderDispatcher$PreparedGroup.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { FeatureRenderPhase } from '../../../../../net/minecraft/client/renderer/feature/phase/FeatureRenderPhase.d.ts'
import type { FeatureRenderPhase$Output } from '../../../../../net/minecraft/client/renderer/feature/phase/FeatureRenderPhase$Output.d.ts'
import type { SubmitNode } from '../../../../../net/minecraft/client/renderer/feature/submit/SubmitNode.d.ts'
export class FeatureRenderDispatcher$PhaseSubmitGrouper extends Object implements FeatureRenderPhase$Output {
    constructor(frame: FeatureRenderDispatcher$PreparedFrame, phase: FeatureRenderPhase<any>)
    // private allSubmits: SubmitNode[];
    // private frame: FeatureRenderDispatcher$PreparedFrame;
    // private lastGroup: FeatureRenderDispatcher$PreparedGroup<any>;
    // private phaseGroups: FeatureRenderDispatcher$PreparedGroup<any>[];
    accept(submit: SubmitNode, strictlyOrdered: boolean): void;
    acceptFeatureGroup<Submit extends SubmitNode>(featureType: FeatureRendererType<Submit>, submits: Submit[], strictlyOrdered: boolean): void;
    // private addOrExtendGroup<Submit extends SubmitNode>(featureType: FeatureRendererType<Submit>, strictlyOrdered: boolean, fromInclusive: number, toInclusive: number): void;
}