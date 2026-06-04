import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { PathIterator } from '../../../java/awt/geom/PathIterator.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class Path2D extends Object implements Shape, Cloneable {
    static WIND_EVEN_ODD: number;
    static WIND_NON_ZERO: number;
    static contains(paramarg0: PathIterator, paramarg1: number, paramarg2: number): boolean;
    static contains(paramarg0: PathIterator, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): boolean;
    static contains(paramarg0: PathIterator, paramarg1: Point2D): boolean;
    static contains(paramarg0: PathIterator, paramarg1: Rectangle2D): boolean;
    static intersects(paramarg0: PathIterator, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): boolean;
    static intersects(paramarg0: PathIterator, paramarg1: Rectangle2D): boolean;
    constructor()
    constructor(arg0: number, arg1: number)
    // private numCoords: number;
    // private numTypes: number;
    // private pointTypes: number[];
    windingRule: number;
    append(arg0: Shape, arg1: boolean): void;
    append(arg0: PathIterator, arg1: boolean): void;
    append(arg0: number, arg1: number): void;
    clone(): Object;
    protected clone(): Object;
    cloneCoordsDouble(arg0: AffineTransform): number[];
    cloneCoordsFloat(arg0: AffineTransform): number[];
    closePath(): void;
    contains(arg0: Point2D): boolean;
    contains(arg0: Rectangle2D): boolean;
    contains(arg0: number, arg1: number): boolean;
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    createTransformedShape(arg0: AffineTransform): Shape;
    curveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    getBounds(): Rectangle;
    getCurrentPoint(): Point2D;
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
    getPoint(arg0: number): Point2D;
    getWindingRule(): number;
    intersects(arg0: Rectangle2D): boolean;
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    lineTo(arg0: number, arg1: number): void;
    moveTo(arg0: number, arg1: number): void;
    needRoom(arg0: boolean, arg1: number): void;
    pointCrossings(arg0: number, arg1: number): number;
    quadTo(arg0: number, arg1: number, arg2: number, arg3: number): void;
    readObject(arg0: ObjectInputStream, arg1: boolean): void;
    rectCrossings(arg0: number, arg1: number, arg2: number, arg3: number): number;
    reset(): void;
    setWindingRule(arg0: number): void;
    transform(arg0: AffineTransform): void;
    trimToSize(): void;
    writeObject(arg0: ObjectOutputStream, arg1: boolean): void;
}