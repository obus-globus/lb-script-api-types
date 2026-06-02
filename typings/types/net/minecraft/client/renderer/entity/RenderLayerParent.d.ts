import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export interface RenderLayerParent<S extends EntityRenderState, M extends EntityModel<S>> extends Object{
    getModel(): M;
}