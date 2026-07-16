import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$ReadElementTypeCacheDispatchNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    executeTypeDispatch(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    executeTypeDispatch(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): Object;
    executeTypeDispatch(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    executeTypeDispatch(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): Object;
    executeTypeDispatchAsDouble(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeTypeDispatchAsDouble(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): number;
    executeTypeDispatchAsDouble(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeTypeDispatchAsDouble(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): number;
    executeTypeDispatchAsInt(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeTypeDispatchAsInt(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): number;
    executeTypeDispatchAsInt(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeTypeDispatchAsInt(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): number;
}