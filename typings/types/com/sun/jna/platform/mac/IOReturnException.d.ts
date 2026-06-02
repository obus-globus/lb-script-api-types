import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class IOReturnException extends RuntimeException {
    static getCode(paramarg0: number): number;
    static getSubSystem(paramarg0: number): number;
    static getSystem(paramarg0: number): number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    // private ioReturn: number;
    getIOReturnCode(): number;
}