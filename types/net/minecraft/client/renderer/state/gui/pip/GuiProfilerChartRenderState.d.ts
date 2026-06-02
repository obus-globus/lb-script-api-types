import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
import type { ResultField } from '../../../../../../../net/minecraft/util/profiling/ResultField.d.ts'
import type { Matrix3x2f } from '../../../../../../../org/joml/Matrix3x2f.d.ts'
export class GuiProfilerChartRenderState extends Record implements PictureInPictureRenderState {
    static IDENTITY_POSE: Matrix3x2f;
    static getBounds(paramx0: number, paramy0: number, paramx1: number, paramy1: number, paramscissorArea: ScreenRectangle): ScreenRectangle;
    // private bounds: ScreenRectangle;
    // private chartData: ResultField[];
    // private scissorArea: ScreenRectangle;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    bounds(): ScreenRectangle;
    chartData(): ResultField[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    pose(): Matrix3x2f;
    scale(): number;
    scissorArea(): ScreenRectangle;
    toString(): string;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}