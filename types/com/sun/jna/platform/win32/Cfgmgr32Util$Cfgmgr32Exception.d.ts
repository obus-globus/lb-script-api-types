import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class Cfgmgr32Util$Cfgmgr32Exception extends RuntimeException {
    constructor(arg0: number)
    readonly errorCode: number;
    getErrorCode(): number;
    toString(): string;
}