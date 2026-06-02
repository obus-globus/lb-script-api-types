import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { PathIterator } from '../../../java/awt/geom/PathIterator.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export abstract class Line2D extends Object implements Shape, Cloneable {
    static linesIntersect(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number): boolean;
    static ptLineDist(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static ptLineDistSq(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static ptSegDist(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static ptSegDistSq(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static relativeCCW(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    constructor()
    clone(): Object;
    protected clone(): Object;
    contains(arg0: Point2D): boolean;
    contains(arg0: Rectangle2D): boolean;
    contains(arg0: number, arg1: number): boolean;
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    getBounds(): Rectangle;
    getP1(): Point2D;
    getP2(): Point2D;
    getPathIterator(arg0: AffineTransform): PathIterator;
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
    getX1(): number;
    getX2(): number;
    getY1(): number;
    getY2(): number;
    intersects(arg0: Rectangle2D): boolean;
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    intersectsLine(arg0: Line2D): boolean;
    intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    ptLineDist(arg0: Point2D): number;
    ptLineDist(arg0: number, arg1: number): number;
    ptLineDistSq(arg0: Point2D): number;
    ptLineDistSq(arg0: number, arg1: number): number;
    ptSegDist(arg0: Point2D): number;
    ptSegDist(arg0: number, arg1: number): number;
    ptSegDistSq(arg0: Point2D): number;
    ptSegDistSq(arg0: number, arg1: number): number;
    relativeCCW(arg0: Point2D): number;
    relativeCCW(arg0: number, arg1: number): number;
    setLine(arg0: Line2D): void;
    setLine(arg0: Point2D, arg1: Point2D): void;
    setLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
}