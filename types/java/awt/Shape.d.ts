import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { PathIterator } from '../../java/awt/geom/PathIterator.d.ts'
import type { Point2D } from '../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Shape extends Object{
    contains(arg0: Point2D): boolean;
    contains(arg0: Rectangle2D): boolean;
    contains(arg0: number, arg1: number): boolean;
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    getBounds(): Rectangle;
    getBounds2D(): Rectangle2D;
    getPathIterator(arg0: AffineTransform): PathIterator;
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
    intersects(arg0: Rectangle2D): boolean;
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
}