import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BoundingBox2f } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
import type { ItemStackListLayout$ContentDimensions } from '../../../../../net/ccbluex/liquidbounce/render/gui/ItemStackListLayout$ContentDimensions.d.ts'
import type { ItemStackListRenderState } from '../../../../../net/ccbluex/liquidbounce/render/gui/ItemStackListRenderState.d.ts'
export class ItemStackListLayout extends Object {
    static INSTANCE: ItemStackListLayout;
    computeBounds(state: ItemStackListRenderState): BoundingBox2f;
    measureContent(state: ItemStackListRenderState): ItemStackListLayout$ContentDimensions;
}