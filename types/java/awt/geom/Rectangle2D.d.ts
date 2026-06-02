import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { Line2D } from '../../../java/awt/geom/Line2D.d.ts'
import type { PathIterator } from '../../../java/awt/geom/PathIterator.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { RectangularShape } from '../../../java/awt/geom/RectangularShape.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Rectangle2D extends RectangularShape {
    static OUT_BOTTOM: number;
    static OUT_LEFT: number;
    static OUT_RIGHT: number;
    static OUT_TOP: number;
    static intersect(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    static union(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    constructor()
    add(arg0: Point2D): void;
    add(arg0: Rectangle2D): void;
    add(arg0: number, arg1: number): void;
    contains(arg0: number, arg1: number): boolean;
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    createIntersection(arg0: Rectangle2D): Rectangle2D;
    createUnion(arg0: Rectangle2D): Rectangle2D;
    equals(arg0: Object | null): boolean;
    getBounds2D(): Rectangle2D;
    getPathIterator(arg0: AffineTransform): PathIterator;
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
    hashCode(): number;
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    intersectsLine(arg0: Line2D): boolean;
    intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    outcode(arg0: Point2D): number;
    outcode(arg0: number, arg1: number): number;
    setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setRect(arg0: Rectangle2D): void;
    setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
}