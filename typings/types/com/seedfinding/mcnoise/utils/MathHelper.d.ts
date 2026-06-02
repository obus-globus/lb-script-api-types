import type { Object } from '../../../../java/lang/Object.d.ts'
export class MathHelper extends Object {
    static GRADIENTS: (Object | null)[];
    static dot(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static floor(paramarg0: number): number;
    static grad(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static lerp(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static lerp2(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static lerp3(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): number;
    static lfloor(paramarg0: number): number;
    static maintainPrecision(paramarg0: number): number;
    static smoothStep(paramarg0: number): number;
    constructor()
}