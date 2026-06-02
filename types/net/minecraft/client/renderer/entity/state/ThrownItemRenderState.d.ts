import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
export class ThrownItemRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    item: ItemStackRenderState;
}