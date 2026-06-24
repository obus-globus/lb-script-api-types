import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { GuiItemRenderState } from '../../../../../../../net/minecraft/client/renderer/state/gui/GuiItemRenderState.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
import type { Matrix3x2fc } from '../../../../../../../org/joml/Matrix3x2fc.d.ts'
export class OversizedItemRenderState extends Record implements PictureInPictureRenderState {
    static IDENTITY_POSE: Matrix3x2fc;
    static getBounds(paramx0: number, paramy0: number, paramx1: number, paramy1: number, paramscissorArea: ScreenRectangle): ScreenRectangle;
    constructor(guiItemRenderState: GuiItemRenderState, x0: number, y0: number, x1: number, y1: number)
    // private guiItemRenderState: GuiItemRenderState;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    bounds(): ScreenRectangle;
    equals(o: Object | null): boolean;
    guiItemRenderState(): GuiItemRenderState;
    hashCode(): number;
    pose(): Matrix3x2fc;
    scale(): number;
    scissorArea(): ScreenRectangle;
    toString(): string;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}