import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AccessorInfo$AccessorName extends Object {
    static of(paramarg0: string): AccessorInfo$AccessorName;
    static of(paramarg0: string, paramarg1: boolean): AccessorInfo$AccessorName;
    private constructor(arg0: string, arg1: string, arg2: string)
    methodName: string;
    name: string;
    prefix: string;
    toString(): string;
}