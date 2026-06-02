import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$JSObjectReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$JSObjectReadElementTypeCacheNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNodeFactory$JSObjectReadElementTypeCacheNodeGen extends ReadElementNode$JSObjectReadElementTypeCacheNode {
    static create(): ReadElementNode$JSObjectReadElementTypeCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private arrayDispatch_field1_: Node;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): Object;
    executeJSObjectGet(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): Object;
    executeJSObjectGet(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): Object;
    executeJSObjectGetDouble(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): number;
    executeJSObjectGetDouble(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): number;
    executeJSObjectGetInt(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): number;
    executeJSObjectGetInt(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): number;
}