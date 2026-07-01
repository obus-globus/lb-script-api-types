import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { Dimension2D } from '../../../java/awt/geom/Dimension2D.d.ts'
import type { PathIterator } from '../../../java/awt/geom/PathIterator.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export abstract class RectangularShape extends Object implements Shape, Cloneable {
    constructor()
    clone(): Object;
    contains(arg0: number, arg1: number): boolean;
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    contains(arg0: Point2D): boolean;
    contains(arg0: Rectangle2D): boolean;
    getBounds(): Rectangle;
    getBounds2D(): Rectangle2D;
    getCenterX(): number;
    getCenterY(): number;
    getFrame(): Rectangle2D;
    getHeight(): number;
    getMaxX(): number;
    getMaxY(): number;
    getMinX(): number;
    getMinY(): number;
    getPathIterator(arg0: AffineTransform): PathIterator;
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
    getWidth(): number;
    getX(): number;
    getY(): number;
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    intersects(arg0: Rectangle2D): boolean;
    isEmpty(): boolean;
    setFrame(arg0: Point2D, arg1: Dimension2D): void;
    setFrame(arg0: Rectangle2D): void;
    setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setFrameFromCenter(arg0: Point2D, arg1: Point2D): void;
    setFrameFromCenter(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setFrameFromDiagonal(arg0: Point2D, arg1: Point2D): void;
    setFrameFromDiagonal(arg0: number, arg1: number, arg2: number, arg3: number): void;
}