import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$NumberFormatException$Reason } from '../../../../../com/oracle/truffle/api/strings/TruffleString$NumberFormatException$Reason.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class TruffleString$NumberFormatException extends Exception {
    constructor(string: AbstractTruffleString, reason: TruffleString$NumberFormatException$Reason)
    constructor(string: AbstractTruffleString, regionOffset: number, regionLength: number, reason: TruffleString$NumberFormatException$Reason)
    readonly message: string | null;
    // private reason: TruffleString$NumberFormatException$Reason;
    // private regionLength: number;
    // private regionOffset: number;
    // private string: AbstractTruffleString;
    fillInStackTrace(): Throwable;
    getReason(): TruffleString$NumberFormatException$Reason;
    getRegionByteLength(): number;
    getRegionByteOffset(): number;
    getString(): AbstractTruffleString;
}