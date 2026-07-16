import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromCodePointNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromCodePointNode.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ImportValueNodeGen extends ImportValueNode {
    static create(): ImportValueNode;
    static getUncached(): ImportValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private fallback_interop_: InteropLibrary;
    // private fromChar_fromCodePointNode_: TruffleString$FromCodePointNode;
    // private fromString_fromJavaStringNode_: TruffleString$FromJavaStringNode;
    // private state_0_: number;
    // private switchEncodingNode: TruffleString$SwitchEncodingNode;
    // private executeAndSpecialize(arg0Value: Object): Object;
    executeWithTarget(arg0Value: Object): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Object): boolean;
}