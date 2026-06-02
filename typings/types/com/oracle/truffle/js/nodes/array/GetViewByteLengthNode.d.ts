import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ArrayBufferByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayBufferByteLengthNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDataViewObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSDataViewObject.d.ts'
export abstract class GetViewByteLengthNode extends JavaScriptBaseNode {
    static create(): GetViewByteLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doAutoLength(dataView: JSDataViewObject, context: JSContext, getByteLengthNode: ArrayBufferByteLengthNode): number;
    execute(typedArrayObj: JSDataViewObject, context: JSContext): number;
}