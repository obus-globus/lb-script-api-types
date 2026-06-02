import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeStorage$ModelSubmit } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage$ModelSubmit.d.ts'
import type { SubmitNodeStorage$TranslucentModelSubmit } from '../../../../../net/minecraft/client/renderer/SubmitNodeStorage$TranslucentModelSubmit.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class ModelFeatureRenderer$Storage extends Object {
    constructor()
    // private solidModelSubmits: Map<RenderType, SubmitNodeStorage$ModelSubmit<Object>[]>;
    // private translucentModelSubmits: SubmitNodeStorage$TranslucentModelSubmit<Object>[];
    // private usedModelSubmitBuckets: RenderType[];
    add(renderType: RenderType, modelSubmit: SubmitNodeStorage$ModelSubmit<Object>): void;
    clear(): void;
    endFrame(): void;
}