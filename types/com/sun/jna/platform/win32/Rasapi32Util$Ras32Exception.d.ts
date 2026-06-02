import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class Rasapi32Util$Ras32Exception extends RuntimeException {
    constructor(arg0: number)
    readonly code: number;
    getCode(): number;
}