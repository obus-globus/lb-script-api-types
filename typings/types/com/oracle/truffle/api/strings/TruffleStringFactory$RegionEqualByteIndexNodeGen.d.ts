import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$RegionEqualByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$RegionEqualByteIndexNode.d.ts'
import type { TruffleString$WithMask } from '../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
export class TruffleStringFactory$RegionEqualByteIndexNodeGen extends TruffleString$RegionEqualByteIndexNode {
    static create(): TruffleString$RegionEqualByteIndexNode;
    static getUncached(): TruffleString$RegionEqualByteIndexNode;
    private constructor()
    // private state_0_: number;
    execute(a: AbstractTruffleString, fromByteIndexA: number, b: AbstractTruffleString, fromByteIndexB: number, length: number, expectedEncoding: TruffleString$Encoding): boolean;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: AbstractTruffleString, arg3Value: number, arg4Value: number, arg5Value: number[], arg6Value: TruffleString$Encoding): boolean;
    execute(a: AbstractTruffleString, fromByteIndexA: number, b: TruffleString$WithMask, fromByteIndexB: number, length: number, expectedEncoding: TruffleString$Encoding): boolean;
}