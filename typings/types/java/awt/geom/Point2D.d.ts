import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export abstract class Point2D extends Object implements Cloneable {
    static distance(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static distanceSq(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
    clone(): Object;
    distance(arg0: Point2D): number;
    distance(arg0: number, arg1: number): number;
    distanceSq(arg0: Point2D): number;
    distanceSq(arg0: number, arg1: number): number;
    equals(arg0: Object | null): boolean;
    getX(): number;
    getY(): number;
    hashCode(): number;
    setLocation(arg0: Point2D): void;
    setLocation(arg0: number, arg1: number): void;
}