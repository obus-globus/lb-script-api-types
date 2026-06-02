import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TrackingItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/TrackingItemStackRenderState.d.ts'
import type { ScreenArea } from '../../../../../../net/minecraft/client/renderer/state/gui/ScreenArea.d.ts'
import type { Matrix3x2f } from '../../../../../../org/joml/Matrix3x2f.d.ts'
export class GuiItemRenderState extends Object implements ScreenArea {
    constructor(pose: Matrix3x2f, itemStackRenderState: TrackingItemStackRenderState, x: number, y: number, scissorArea: ScreenRectangle)
    // private bounds: ScreenRectangle;
    // private itemStackRenderState: TrackingItemStackRenderState;
    // private oversizedItemBounds: ScreenRectangle;
    // private pose: Matrix3x2f;
    // private scissorArea: ScreenRectangle;
    // private x: number;
    // private y: number;
    bounds(): ScreenRectangle;
    // private calculateBounds(itemBounds: ScreenRectangle): ScreenRectangle;
    // private calculateOversizedItemBounds(): ScreenRectangle;
    itemStackRenderState(): TrackingItemStackRenderState;
    oversizedItemBounds(): ScreenRectangle;
    pose(): Matrix3x2f;
    scissorArea(): ScreenRectangle;
    x(): number;
    y(): number;
}