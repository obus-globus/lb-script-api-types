import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModelStorage } from '../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { SubmitNodeCollector$CustomGeometryRenderer } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector$CustomGeometryRenderer.d.ts'
export class SubmitNodeStorage$CustomGeometrySubmit extends Record implements ModelStorage {
    constructor(pose: PoseStack$Pose, customGeometryRenderer: SubmitNodeCollector$CustomGeometryRenderer)
    // private beId: number;
    // private customGeometryRenderer: SubmitNodeCollector$CustomGeometryRenderer;
    // private entityId: number;
    // private isRenderingBEs: boolean;
    // private itemId: number;
    // private pose: PoseStack$Pose;
    customGeometryRenderer(): SubmitNodeCollector$CustomGeometryRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    iris$capture(): void;
    iris$set(): void;
    iris$wasBE(): boolean;
    pose(): PoseStack$Pose;
    toString(): string;
}