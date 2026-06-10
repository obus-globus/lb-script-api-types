import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractFunctionArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionArgumentsNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionArgumentsNode extends AbstractFunctionArgumentsNode {
    static cloneUninitialized(paramnode: AbstractFunctionArgumentsNode | null, parammaterializedTags: Class<Tag>[]): AbstractFunctionArgumentsNode | null;
    static create(paramcontext: JSContext, paramargs: (Object | null)[]): AbstractFunctionArgumentsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(args: JavaScriptNode[])
    // private args: JavaScriptNode[];
    copyUninitialized(materializedTags: Class<Tag>[]): AbstractFunctionArgumentsNode;
    executeFillObjectArray(frame: VirtualFrame, arguments: Object[], delta: number): Object[];
    getCount(frame: VirtualFrame): number;
    materializeInstrumentableArguments(): void;
}