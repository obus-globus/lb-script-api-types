import type { PathIterator } from '../../../java/awt/geom/PathIterator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Curve } from '../../../sun/awt/geom/Curve.d.ts'
export abstract class Crossings extends Object {
    static debug: boolean;
    static findCrossings(paramarg0: PathIterator, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): Crossings;
    static findCrossings(paramarg0: Curve[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): Crossings;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private limit: number;
    // private tmp: Curve[];
    // private xhi: number;
    // private xlo: number;
    // private yhi: number;
    // private ylo: number;
    // private yranges: number[];
    accumulateCubic(arg0: number, arg1: number, arg2: number[]): boolean;
    accumulateLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    accumulateLine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    accumulateQuad(arg0: number, arg1: number, arg2: number[]): boolean;
    covers(arg0: number, arg1: number): boolean;
    getXHi(): number;
    getXLo(): number;
    getYHi(): number;
    getYLo(): number;
    isEmpty(): boolean;
    print(): void;
    record(arg0: number, arg1: number, arg2: number): void;
}