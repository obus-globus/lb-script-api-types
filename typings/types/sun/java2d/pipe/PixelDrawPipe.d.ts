import type { Object } from '../../../java/lang/Object.d.ts'
import type { SunGraphics2D } from '../../../sun/java2d/SunGraphics2D.d.ts'
export interface PixelDrawPipe extends Object{
    drawArc(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    drawLine(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
    drawOval(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
    drawPolygon(arg0: SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
    drawPolyline(arg0: SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
    drawRect(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
    drawRoundRect(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
}