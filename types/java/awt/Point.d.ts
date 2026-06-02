import type { Point2D } from '../../java/awt/geom/Point2D.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Point extends Point2D implements Serializable {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static distanceSq(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
    constructor(arg0: Point)
    constructor(arg0: number, arg1: number)
    x: number;
    y: number;
    equals(arg0: Object | null): boolean;
    getLocation(): Point;
    getX(): number;
    getY(): number;
    move(arg0: number, arg1: number): void;
    setLocation(arg0: Point): void;
    setLocation(arg0: number, arg1: number): void;
    setLocation(arg0: number, arg1: number): void;
    toString(): string;
    translate(arg0: number, arg1: number): void;
}