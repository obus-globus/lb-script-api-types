import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { Path2D } from '../../../java/awt/geom/Path2D.d.ts'
import type { PathIterator } from '../../../java/awt/geom/PathIterator.d.ts'
import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Path2D$Float extends Path2D implements Serializable {
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
    constructor(arg0: Shape, arg1: AffineTransform)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    // private floatCoords: number[];
    append(arg0: Shape, arg1: boolean): void;
    append(arg0: PathIterator, arg1: boolean): void;
    append(arg0: number, arg1: number): void;
    clone(): Object;
    cloneCoordsDouble(arg0: AffineTransform): number[];
    cloneCoordsFloat(arg0: AffineTransform): number[];
    curveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    getBounds2D(): Rectangle2D;
    getPathIterator(arg0: AffineTransform): PathIterator;
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator;
    getPoint(arg0: number): Point2D;
    lineTo(arg0: number, arg1: number): void;
    moveTo(arg0: number, arg1: number): void;
    needRoom(arg0: boolean, arg1: number): void;
    pointCrossings(arg0: number, arg1: number): number;
    quadTo(arg0: number, arg1: number, arg2: number, arg3: number): void;
    // private readObject(arg0: ObjectInputStream): void;
    readObject(arg0: ObjectInputStream, arg1: boolean): void;
    rectCrossings(arg0: number, arg1: number, arg2: number, arg3: number): number;
    transform(arg0: AffineTransform): void;
    trimToSize(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
    writeObject(arg0: ObjectOutputStream, arg1: boolean): void;
}