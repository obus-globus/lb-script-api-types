import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { Path2D$Float } from '../../../java/awt/geom/Path2D$Float.d.ts'
import type { PathIterator } from '../../../java/awt/geom/PathIterator.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
export class GeneralPath extends Path2D$Float {
    static WIND_EVEN_ODD: number;
    static WIND_NON_ZERO: number;
    static contains(paramarg0: PathIterator, paramarg1: number, paramarg2: number): boolean;
    static contains(paramarg0: PathIterator, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): boolean;
    static contains(paramarg0: PathIterator, paramarg1: Point2D): boolean;
    static contains(paramarg0: PathIterator, paramarg1: Rectangle2D): boolean;
    static intersects(paramarg0: PathIterator, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): boolean;
    static intersects(paramarg0: PathIterator, paramarg1: Rectangle2D): boolean;
    constructor()
    constructor(arg0: Shape)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[], arg2: number, arg3: number[], arg4: number)
    constructor(arg0: number, arg1: number)
}