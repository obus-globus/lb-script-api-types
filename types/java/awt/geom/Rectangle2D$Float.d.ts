import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
export class Rectangle2D$Float extends Rectangle2D implements Serializable {
    static OUT_BOTTOM: number;
    static OUT_LEFT: number;
    static OUT_RIGHT: number;
    static OUT_TOP: number;
    static intersect(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    static union(paramarg0: Rectangle2D, paramarg1: Rectangle2D, paramarg2: Rectangle2D): void;
    constructor()
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    height: number;
    width: number;
    x: number;
    y: number;
    createIntersection(arg0: Rectangle2D): Rectangle2D;
    createUnion(arg0: Rectangle2D): Rectangle2D;
    getBounds2D(): Rectangle2D;
    getHeight(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    isEmpty(): boolean;
    outcode(arg0: number, arg1: number): number;
    setRect(arg0: Rectangle2D): void;
    setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    setRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
    toString(): string;
}