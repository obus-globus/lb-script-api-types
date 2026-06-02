import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
export class FireworkRocketRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    isShotAtAngle: boolean;
    item: ItemStackRenderState;
}