import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
export class Kstat2StatusException extends RuntimeException {
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    readonly kstat2Status: number;
    getKstat2Status(): number;
}