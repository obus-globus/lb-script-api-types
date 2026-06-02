import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$FromNativePointerNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromNativePointerNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleStringFactory$FromNativePointerNodeGen extends TruffleString$FromNativePointerNode {
    static create(): TruffleString$FromNativePointerNode;
    static getUncached(): TruffleString$FromNativePointerNode;
    private constructor()
    // private fromBufferWithStringCompactionNode__field1_: number;
    // private fromNativePointerNode__field1_: number;
    // private interopLibrary_: Node;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): TruffleString;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): TruffleString;
}