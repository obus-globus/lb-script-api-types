import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { PathIterator } from '../../../java/awt/geom/PathIterator.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
import type { Curve } from '../../../sun/awt/geom/Curve.d.ts'
export class Area extends Object implements Shape, Cloneable {
    constructor()
    constructor(arg0: Shape)
    // private cachedBounds: Rectangle2D;
    // private curves: Curve[];
    add(arg0: Area): void;
    clone(): Object;
    protected clone(): Object;
    contains(arg0: Point2D): boolean;
    contains(arg0: Rectangle2D): boolean;
    contains(arg0: number, arg1: number): boolean;
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    createTransformedArea(arg0: AffineTransform): Area;
    equals(arg0: Area): boolean;
    exclusiveOr(arg0: Area): void;
    getBounds(): Rectangle;
    getBounds2D(): Rectangle2D;
    // private getCachedBounds(): Rectangle2D;
    getPathIterator(arg0: AffineTransform): PathIterator;
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
    intersect(arg0: Area): void;
    intersects(arg0: Rectangle2D): boolean;
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    // private invalidateBounds(): void;
    isEmpty(): boolean;
    isPolygonal(): boolean;
    isRectangular(): boolean;
    isSingular(): boolean;
    reset(): void;
    subtract(arg0: Area): void;
    transform(arg0: AffineTransform): void;
}