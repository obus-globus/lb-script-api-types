import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractFunctionArgumentsNode extends JavaScriptBaseNode {
    static cloneUninitialized<T extends AbstractFunctionArgumentsNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    copyUninitialized(materializedTags: Class<Tag>[]): AbstractFunctionArgumentsNode;
    executeFillObjectArray(frame: VirtualFrame, arguments: Object[], delta: number): Object[];
    getCount(frame: VirtualFrame): number;
    materializeInstrumentableArguments(): void;
}