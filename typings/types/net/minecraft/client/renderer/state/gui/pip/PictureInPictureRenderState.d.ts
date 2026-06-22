import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { ScreenArea } from '../../../../../../../net/minecraft/client/renderer/state/gui/ScreenArea.d.ts'
import type { Matrix3x2f } from '../../../../../../../org/joml/Matrix3x2f.d.ts'
export interface PictureInPictureRenderState extends Object, ScreenArea{
    bounds(): ScreenRectangle;
    pose(): Matrix3x2f;
    scale(): number;
    scissorArea(): ScreenRectangle;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}