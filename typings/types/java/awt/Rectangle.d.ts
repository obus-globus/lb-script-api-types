import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Point } from '../../java/awt/Point.d.ts'
import type { Shape } from '../../java/awt/Shape.d.ts'
import type { Point2D } from '../../java/awt/geom/Point2D.d.ts'
import type { Rectangle2D } from '../../java/awt/geom/Rectangle2D.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Rectangle extends Rectangle2D implements Shape, Serializable {
    static OUT_BOTTOM: number;
    static OUT_LEFT: number;
    static OUT_RIGHT: number;
    static OUT_TOP: number;
    static intersect(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    static union(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    constructor()
    constructor(arg0: Dimension)
    constructor(arg0: Point)
    constructor(arg0: Point, arg1: Dimension)
    constructor(arg0: Rectangle)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    height: number;
    width: number;
    x: number;
    y: number;
    add(arg0: Point): void;
    add(arg0: Rectangle): void;
    add(arg0: Point2D): void;
    add(arg0: Rectangle2D): void;
    add(arg0: number, arg1: number): void;
    add(arg0: number, arg1: number): void;
    contains(arg0: Point): boolean;
    contains(arg0: Rectangle): boolean;
    contains(arg0: Point2D): boolean;
    contains(arg0: Rectangle2D): boolean;
    contains(arg0: number, arg1: number): boolean;
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    contains(arg0: number, arg1: number): boolean;
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    createIntersection(arg0: Rectangle2D): Rectangle2D;
    createUnion(arg0: Rectangle2D): Rectangle2D;
    equals(arg0: Object | null): boolean;
    getBounds(): Rectangle;
    getBounds2D(): Rectangle2D;
    getHeight(): number;
    getLocation(): Point;
    getSize(): Dimension;
    getWidth(): number;
    getX(): number;
    getY(): number;
    grow(arg0: number, arg1: number): void;
    inside(arg0: number, arg1: number): boolean;
    intersection(arg0: Rectangle): Rectangle;
    intersects(arg0: Rectangle): boolean;
    intersects(arg0: Rectangle2D): boolean;
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    isEmpty(): boolean;
    move(arg0: number, arg1: number): void;
    outcode(arg0: Point2D): number;
    outcode(arg0: number, arg1: number): number;
    reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
    resize(arg0: number, arg1: number): void;
    setBounds(arg0: Rectangle): void;
    setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setLocation(arg0: Point): void;
    setLocation(arg0: number, arg1: number): void;
    setRect(arg0: Rectangle2D): void;
    setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setSize(arg0: Dimension): void;
    setSize(arg0: number, arg1: number): void;
    toString(): string;
    translate(arg0: number, arg1: number): void;
    union(arg0: Rectangle): Rectangle;
}