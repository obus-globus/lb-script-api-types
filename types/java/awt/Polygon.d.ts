import type { Point } from '../../java/awt/Point.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { PathIterator } from '../../java/awt/geom/PathIterator.d.ts'
import type { Point2D } from '../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../java/awt/geom/Rectangle2D.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Crossings } from '../../sun/awt/geom/Crossings.d.ts'
export class Polygon extends Object implements Shape, Serializable {
    constructor()
    constructor(arg0: number[], arg1: number[], arg2: number)
    bounds: Rectangle;
    npoints: number;
    xpoints: number[];
    ypoints: number[];
    addPoint(arg0: number, arg1: number): void;
    calculateBounds(arg0: number[], arg1: number[], arg2: number): void;
    contains(arg0: Point): boolean;
    contains(arg0: Point2D): boolean;
    contains(arg0: Rectangle2D): boolean;
    contains(arg0: number, arg1: number): boolean;
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    contains(arg0: number, arg1: number): boolean;
    getBoundingBox(): Rectangle;
    getBounds(): Rectangle;
    getBounds2D(): Rectangle2D;
    // private getCrossings(arg0: number, arg1: number, arg2: number, arg3: number): Crossings;
    getPathIterator(arg0: AffineTransform): PathIterator;
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
    inside(arg0: number, arg1: number): boolean;
    intersects(arg0: Rectangle2D): boolean;
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    invalidate(): void;
    reset(): void;
    translate(arg0: number, arg1: number): void;
    updateBounds(arg0: number, arg1: number): void;
}