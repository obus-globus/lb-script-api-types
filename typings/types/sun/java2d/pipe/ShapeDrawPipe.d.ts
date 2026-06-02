import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SunGraphics2D } from '../../../sun/java2d/SunGraphics2D.d.ts'
export interface ShapeDrawPipe extends Object{
    draw(arg0: SunGraphics2D, arg1: Shape): void;
    fill(arg0: SunGraphics2D, arg1: Shape): void;
}