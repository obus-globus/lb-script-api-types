import type { Point2D } from '../../../java/awt/geom/Point2D.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
export class Point2D$Float extends Point2D implements Serializable {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static distanceSq(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
    constructor(arg0: number, arg1: number)
    x: number;
    y: number;
    getX(): number;
    getY(): number;
    setLocation(arg0: Point2D): void;
    setLocation(arg0: number, arg1: number): void;
    toString(): string;
}