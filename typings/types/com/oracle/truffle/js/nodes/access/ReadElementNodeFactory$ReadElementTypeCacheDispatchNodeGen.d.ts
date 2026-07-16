import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsJSDynamicObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSDynamicObjectNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$JSObjectReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$JSObjectReadElementTypeCacheNode.d.ts'
import type { ReadElementNode$ReadElementTypeCacheDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ReadElementTypeCacheDispatchNode.d.ts'
import type { ReadElementNode$StringReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$StringReadElementTypeCacheNode.d.ts'
import type { ReadElementNodeFactory$ReadElementTypeCacheDispatchNodeGen$OtherData } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNodeFactory$ReadElementTypeCacheDispatchNodeGen$OtherData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNodeFactory$ReadElementTypeCacheDispatchNodeGen extends ReadElementNode$ReadElementTypeCacheDispatchNode {
    static create(): ReadElementNode$ReadElementTypeCacheDispatchNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isObjectNode: IsJSDynamicObjectNode;
    // private objectHandler: ReadElementNode$JSObjectReadElementTypeCacheNode;
    // private other_cache: ReadElementNodeFactory$ReadElementTypeCacheDispatchNodeGen$OtherData;
    // private state_0_: number;
    // private stringHandler: ReadElementNode$StringReadElementTypeCacheNode;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): Object;
    executeTypeDispatch(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    executeTypeDispatch(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): Object;
    executeTypeDispatch(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    executeTypeDispatch(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): Object;
    executeTypeDispatchAsDouble(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeTypeDispatchAsDouble(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): number;
    executeTypeDispatchAsDouble(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeTypeDispatchAsDouble(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): number;
    executeTypeDispatchAsInt(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeTypeDispatchAsInt(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): number;
    executeTypeDispatchAsInt(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeTypeDispatchAsInt(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode, arg5Value: boolean): number;
}