import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class IntegerWidth extends Object {
    static zeroFillTo(paramminInt: number): IntegerWidth;
    private constructor(minInt: number, maxInt: number)
    // private maxInt: number;
    // private minInt: number;
    truncateAt(maxInt: number): IntegerWidth;
}