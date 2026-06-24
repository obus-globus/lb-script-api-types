import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelStorage } from '../../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { SubmitNodeCollector$CustomGeometryRenderer } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector$CustomGeometryRenderer.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { BatchableSubmit } from '../../../../../net/minecraft/client/renderer/feature/submit/BatchableSubmit.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class CustomFeatureRenderer$Submit extends Record implements ModelStorage, BatchableSubmit {
    constructor(pose: PoseStack$Pose, renderType: RenderType, customGeometryRenderer: SubmitNodeCollector$CustomGeometryRenderer)
    // private beId: number;
    // private customGeometryRenderer: SubmitNodeCollector$CustomGeometryRenderer;
    // private entityId: number;
    // private isRenderingBEs: boolean;
    // private itemId: number;
    // private pose: PoseStack$Pose;
    // private renderType: RenderType;
    batchKey(): Object;
    customGeometryRenderer(): SubmitNodeCollector$CustomGeometryRenderer;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<CustomFeatureRenderer$Submit>;
    hashCode(): number;
    iris$capture(): void;
    iris$set(): void;
    iris$wasBE(): boolean;
    pose(): PoseStack$Pose;
    renderType(): RenderType;
    toString(): string;
}