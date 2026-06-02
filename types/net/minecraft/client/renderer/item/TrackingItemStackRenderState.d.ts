import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
export class TrackingItemStackRenderState extends ItemStackRenderState {
    constructor()
    // private modelIdentityElements: Object[];
    appendModelIdentityElement(element: Object): void;
    getModelIdentity(): Object;
}