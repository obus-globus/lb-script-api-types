import type { DisplayEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/DisplayEntityRenderState.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
export class ItemDisplayEntityRenderState extends DisplayEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    item: ItemStackRenderState;
    hasSubState(): boolean;
}