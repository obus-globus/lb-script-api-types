import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
import type { ResultField } from '../../../../../../../net/minecraft/util/profiling/ResultField.d.ts'
import type { Matrix3x2fc } from '../../../../../../../org/joml/Matrix3x2fc.d.ts'
export class GuiProfilerChartRenderState extends Record implements PictureInPictureRenderState {
    static IDENTITY_POSE: Matrix3x2fc;
    constructor(chartData: ResultField[], x0: number, y0: number, x1: number, y1: number, scissorArea: ScreenRectangle)
    constructor(chartData: ResultField[], x0: number, y0: number, x1: number, y1: number, scissorArea: ScreenRectangle, bounds: ScreenRectangle)
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
    pose(): Matrix3x2fc;
    scale(): number;
    scissorArea(): ScreenRectangle;
    toString(): string;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}