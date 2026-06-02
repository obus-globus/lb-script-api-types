import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RequiredBitLengthConverter extends Object implements Converter<number[], Object> {
    constructor(arg0: Converter<number[], Object>, arg1: number)
    constructor(arg0: Converter<number[], Object>, arg1: number, arg2: boolean)
    // private bitLength: number;
    // private converter: Converter<number[], Object>;
    // private exact: boolean;
    applyFrom(arg0: Object): number[];
    applyTo(arg0: number[]): Object;
    // private assertLength(arg0: number[]): number[];
}