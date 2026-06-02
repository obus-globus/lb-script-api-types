import type { PathIterator } from '../../../java/awt/geom/PathIterator.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Crossings } from '../../../sun/awt/geom/Crossings.d.ts'
export abstract class Curve extends Object {
    static DECREASING: number;
    static INCREASING: number;
    static RECT_INTERSECTS: number;
    static TMIN: number;
    static accumulateExtremaBoundsForCubic(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number[], paramarg7: number[]): void;
    static accumulateExtremaBoundsForQuad(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number[], paramarg6: number[]): void;
    static diffbits(paramarg0: number, paramarg1: number): number;
    static insertCubic(paramarg0: Curve[], paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static insertLine(paramarg0: Curve[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static insertMove(paramarg0: Curve[], paramarg1: number, paramarg2: number): void;
    static insertQuad(paramarg0: Curve[], paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static next(paramarg0: number): number;
    static orderof(paramarg0: number, paramarg1: number): number;
    static pointCrossingsForCubic(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): number;
    static pointCrossingsForLine(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static pointCrossingsForPath(paramarg0: PathIterator, paramarg1: number, paramarg2: number): number;
    static pointCrossingsForQuad(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): number;
    static prev(paramarg0: number): number;
    static rectCrossingsForCubic(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number, paramarg13: number): number;
    static rectCrossingsForLine(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): number;
    static rectCrossingsForPath(paramarg0: PathIterator, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static rectCrossingsForQuad(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number): number;
    static round(paramarg0: number): number;
    static signeddiffbits(paramarg0: number, paramarg1: number): number;
    constructor(arg0: number)
    direction: number;
    TforY(arg0: number): number;
    XforT(arg0: number): number;
    XforY(arg0: number): number;
    YforT(arg0: number): number;
    accumulateCrossings(arg0: Crossings): boolean;
    compareTo(arg0: Curve, arg1: number[]): number;
    controlPointString(): string;
    crossingsFor(arg0: number, arg1: number): number;
    dXforT(arg0: number, arg1: number): number;
    dYforT(arg0: number, arg1: number): number;
    enlarge(arg0: Rectangle2D): void;
    fairlyClose(arg0: number, arg1: number): boolean;
    findIntersect(arg0: Curve, arg1: number[], arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number): boolean;
    getDirection(): number;
    getOrder(): number;
    getReversedCurve(): Curve;
    getSegment(arg0: number[]): number;
    getSubCurve(arg0: number, arg1: number): Curve;
    getSubCurve(arg0: number, arg1: number, arg2: number): Curve;
    getWithDirection(arg0: number): Curve;
    getX0(): number;
    getX1(): number;
    getXBot(): number;
    getXMax(): number;
    getXMin(): number;
    getXTop(): number;
    getY0(): number;
    getY1(): number;
    getYBot(): number;
    getYTop(): number;
    nextVertical(arg0: number, arg1: number): number;
    refineTforY(arg0: number, arg1: number, arg2: number): number;
    toString(): string;
}