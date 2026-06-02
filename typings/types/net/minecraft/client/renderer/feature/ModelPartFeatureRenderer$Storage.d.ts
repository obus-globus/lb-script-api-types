import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeStorage$ModelPartSubmit } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage$ModelPartSubmit.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class ModelPartFeatureRenderer$Storage extends Object {
    constructor()
    // private solidModelPartSubmits: Map<RenderType, SubmitNodeStorage$ModelPartSubmit[]>;
    // private solidModelPartSubmitsUsage: RenderType[];
    // private translucentModelPartSubmits: Map<RenderType, SubmitNodeStorage$ModelPartSubmit[]>;
    // private translucentModelPartSubmitsUsage: RenderType[];
    add(renderType: RenderType, submit: SubmitNodeStorage$ModelPartSubmit): void;
    clear(): void;
    endFrame(): void;
}