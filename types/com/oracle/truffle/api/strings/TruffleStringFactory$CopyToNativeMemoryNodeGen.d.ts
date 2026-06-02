import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CopyToNativeMemoryNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CopyToNativeMemoryNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleStringFactory$CopyToNativeMemoryNodeGen extends TruffleString$CopyToNativeMemoryNode {
    static create(): TruffleString$CopyToNativeMemoryNode;
    static getUncached(): TruffleString$CopyToNativeMemoryNode;
    private constructor()
    // private interopLibrary_: Node;
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: Object, arg3Value: number, arg4Value: number, arg5Value: TruffleString$Encoding): void;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: Object, arg3Value: number, arg4Value: number, arg5Value: TruffleString$Encoding): void;
}