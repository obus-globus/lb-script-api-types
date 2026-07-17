import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$FromZeroTerminatedNativePointerNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromZeroTerminatedNativePointerNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleStringFactory$FromZeroTerminatedNativePointerNodeGen extends TruffleString$FromZeroTerminatedNativePointerNode {
    static create(): TruffleString$FromZeroTerminatedNativePointerNode;
    static getUncached(): TruffleString$FromZeroTerminatedNativePointerNode;
    private constructor()
    // private interopLibrary_: Node;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): TruffleString;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): TruffleString;
}