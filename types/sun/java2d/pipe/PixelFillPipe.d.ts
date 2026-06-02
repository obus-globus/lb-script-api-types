import type { Object } from '../../../java/lang/Object.d.ts'
import type { SunGraphics2D } from '../../../sun/java2d/SunGraphics2D.d.ts'
export interface PixelFillPipe extends Object{
    fillArc(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
    fillOval(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
    fillPolygon(arg0: SunGraphics2D, arg1: number[], arg2: number[], arg3: number): void;
    fillRect(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number): void;
    fillRoundRect(arg0: SunGraphics2D, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
}