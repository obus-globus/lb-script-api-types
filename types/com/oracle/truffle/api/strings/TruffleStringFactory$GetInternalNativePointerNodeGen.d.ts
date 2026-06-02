import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$GetInternalNativePointerNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$GetInternalNativePointerNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleStringFactory$GetInternalNativePointerNodeGen extends TruffleString$GetInternalNativePointerNode {
    static create(): TruffleString$GetInternalNativePointerNode;
    static getUncached(): TruffleString$GetInternalNativePointerNode;
    private constructor()
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): Object;
}