import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { MutableTruffleString$FromNativePointerNode } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString$FromNativePointerNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MutableTruffleStringFactory$FromNativePointerNodeGen extends MutableTruffleString$FromNativePointerNode {
    static create(): MutableTruffleString$FromNativePointerNode;
    static getUncached(): MutableTruffleString$FromNativePointerNode;
    private constructor()
    // private interopLibrary_: Node;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): MutableTruffleString;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): MutableTruffleString;
}