import type { Shape } from '../../java/awt/Shape.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Stroke extends Object{
    createStrokedShape(arg0: Shape): Shape;
}